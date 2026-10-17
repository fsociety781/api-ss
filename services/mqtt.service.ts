import mqtt, { MqttClient } from 'mqtt';
import { z } from 'zod';
import { env } from '../config/env';
import { prisma } from '../bin/prismaConfig';
import {
  ActuatorState,
  ActuatorType,
  ControlMode,
  DeviceStatus,
} from '../src/generated/prisma/client';
import { logger } from '../utils/logger';
import { firebaseService } from './firebase.service';

const actuatorPayloadSchema = z.object({
  channel: z.coerce.number(),
  state: z.nativeEnum(ActuatorState),
});

class MqttService {
  private client: MqttClient | null = null;
  private isConnected: boolean = false;
  private reconnectAttempts: number = 0;

  public getConnected(): boolean {
    return this.isConnected;
  }

  public initialize(): void {
    if (!env.MQTT_BROKER_URL) {
      logger.info(
        'MQTT_BROKER_URL tidak diset, MQTT service dinonaktifkan (mode HTTP-only).',
      );
      return;
    }

    try {
      logger.info(
        `Menghubungkan ke MQTT Broker (EMQX): ${env.MQTT_BROKER_URL}...`,
      );

      const connectOptions: mqtt.IClientOptions = {
        clientId: `${env.MQTT_CLIENT_ID}-${Math.random().toString(16).substring(2, 8)}`,
        reconnectPeriod: 5000,
        connectTimeout: 10000,
        clean: true,
      };

      if (env.MQTT_USERNAME && env.MQTT_USERNAME.trim() !== '') {
        connectOptions.username = env.MQTT_USERNAME;
      }
      if (env.MQTT_PASSWORD && env.MQTT_PASSWORD.trim() !== '') {
        connectOptions.password = env.MQTT_PASSWORD;
      }

      this.client = mqtt.connect(env.MQTT_BROKER_URL, connectOptions);

      this.client.on('connect', () => {
        this.isConnected = true;
        this.reconnectAttempts = 0;
        logger.info('Terhubung ke MQTT Broker');

        // Subscribe to device topics including activation check and bidirectional states
        const topics = [
          '+/telemetry/sensor',
          '+/telemetry/history',
          '+/telemetry/heartbeat',
          '+/state/actuator',
          '+/state/setpoint/+',
          '+/state/control/+',
          '+/state/timer/+',
          '+/state/schedule/#',
          '+/state/ota',
          '+/telemetry/ota',
          'shroomsync/ota/+/status',
          '+/legacy/ota/status',
          '+/activation/check',
        ];

        this.client?.subscribe(topics, (err) => {
          if (err) {
            logger.error('Gagal subscribe ke topik MQTT:', { error: err.message });
          } else {
            logger.info(`Berhasil subscribe topik: ${topics.join(', ')}`);
          }
        });
      });

      this.client.on('message', (topic, message) => {
        void this.handleMessage(topic, message);
      });

      this.client.on('error', (err) => {
        logger.error('MQTT error:', { error: err.message });
      });

      this.client.on('offline', () => {
        this.isConnected = false;
        this.reconnectAttempts++;
        logger.warn(
          `Koneksi MQTT offline, mencoba reconnect (percobaan #${this.reconnectAttempts})...`,
        );
      });

      this.client.on('reconnect', () => {
        logger.info('Mencoba reconnect ke MQTT Broker...');
      });
    } catch (error) {
      logger.error('Gagal inisialisasi MQTT:', {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  private async handleMessage(topic: string, payload: Buffer): Promise<void> {
    try {
      const parts = topic.split('/');
      if (parts.length < 3) {
        logger.warn('Topik MQTT tidak sesuai format serialNumber/cat/sub:', { topic });
        return;
      }

      let serialNumber = parts[0];
      let category = parts[1];
      let sub = parts[2];

      // Format shroomsync/ota/{serialNumber}/status -> category 'state', sub 'ota'
      if (parts[0] === 'shroomsync' && parts[1] === 'ota' && parts[3] === 'status') {
        serialNumber = parts[2];
        category = 'state';
        sub = 'ota';
      } else if (category === 'legacy' && sub === 'ota' && parts[3] === 'status') {
        // Format {serialNumber}/legacy/ota/status -> category 'state', sub 'ota'
        category = 'state';
        sub = 'ota';
      }

      let rawContent: unknown;
      try {
        rawContent = JSON.parse(payload.toString());
      } catch {
        logger.warn('Gagal mem-parse JSON payload MQTT:', {
          topic,
          rawPayload: payload.toString().slice(0, 200),
        });
        return;
      }

      // Unpack envelope if wrapped in "data"
      const dataObj: Record<string, unknown> =
        rawContent &&
        typeof rawContent === 'object' &&
        'data' in rawContent &&
        rawContent.data &&
        typeof rawContent.data === 'object'
          ? (rawContent.data as Record<string, unknown>)
          : (rawContent as Record<string, unknown>);

      const envelopeObj = (
        rawContent && typeof rawContent === 'object' ? rawContent : {}
      ) as Record<string, unknown>;

      const device = await prisma.device.findUnique({
        where: { serialNumber },
        include: { farmer: true, setting: true },
      });

      if (!device) {
        logger.warn('Pesan MQTT diterima untuk serial number yang tidak terdaftar:', {
          serialNumber,
          topic,
        });

        // Jika perangkat minta check aktivasi tapi serial tidak ada di DB
        if (category === 'activation' && sub === 'check') {
          this.publishActivationStatus(
            serialNumber,
            false,
            '',
            'Perangkat tidak terdaftar di sistem',
          );
        }
        return;
      }

      const now = new Date();

      // ── 1. ACTIVATION CHECK REQUEST FROM HARDWARE ──
      if (category === 'activation' && sub === 'check') {
        const macAddress = (dataObj.mac_address || envelopeObj.mac_address) as
          | string
          | undefined;
        const firmwareVersion = (dataObj.firmware_version ||
          envelopeObj.firmware_version) as string | undefined;
        const hardwareVersion = (dataObj.hardware_version ||
          envelopeObj.hardware_version) as string | undefined;

        await prisma.device.update({
          where: { id: device.id },
          data: {
            lastSeenAt: now,
            ...(macAddress && { macAddress }),
            ...(firmwareVersion && { firmwareVersion }),
            ...(hardwareVersion && { hardwareVersion }),
          },
        });

        if (device.status === DeviceStatus.ACTIVE && device.farmerId) {
          const ownerName =
            device.farmer?.fullName || device.farmer?.phoneNumber || 'Petani';
          this.publishActivationStatus(
            device.serialNumber,
            true,
            ownerName,
            'Perangkat teraktivasi',
          );
        } else {
          this.publishActivationStatus(
            device.serialNumber,
            false,
            '',
            'Perangkat belum diaktivasi',
          );
        }
        return;
      }

      // ── 2. TELEMETRY: SENSOR & HISTORY ──
      if (category === 'telemetry' && (sub === 'sensor' || sub === 'history')) {
        const tempRaw = dataObj.temperature ?? dataObj.temp ?? dataObj.suhu;
        const humRaw = dataObj.humidity ?? dataObj.hum ?? dataObj.kelembaban;

        const temperature = tempRaw != null ? Number(tempRaw) : NaN;
        const humidity = humRaw != null ? Number(humRaw) : NaN;

        if (!isNaN(temperature) && !isNaN(humidity)) {
          await prisma.sensorReading.create({
            data: {
              deviceId: device.id,
              temperature,
              humidity,
              recordedAt: now,
            },
          });

          // Peringatan otomatis jika suhu/kelembaban di luar batas aman
          if (device.farmerId && device.setting) {
            const setting = device.setting;
            const maxTemp = setting.maxTemperature != null ? Number(setting.maxTemperature) : null;
            const minTemp = setting.minTemperature != null ? Number(setting.minTemperature) : null;
            const minHum = setting.minHumidity != null ? Number(setting.minHumidity) : null;
            const maxHum = setting.maxHumidity != null ? Number(setting.maxHumidity) : null;

            if (maxTemp != null && temperature > maxTemp) {
              void firebaseService.notifyTelemetryAlert(device.farmerId, device, 'temperature', temperature, maxTemp, true);
            } else if (minTemp != null && temperature < minTemp) {
              void firebaseService.notifyTelemetryAlert(device.farmerId, device, 'temperature', temperature, minTemp, false);
            }

            if (minHum != null && humidity < minHum) {
              void firebaseService.notifyTelemetryAlert(device.farmerId, device, 'humidity', humidity, minHum, false);
            } else if (maxHum != null && humidity > maxHum) {
              void firebaseService.notifyTelemetryAlert(device.farmerId, device, 'humidity', humidity, maxHum, true);
            }
          }
        }

        const rawRssi =
          dataObj.rssi ??
          dataObj.rssi_dbm ??
          dataObj.rssiDbm ??
          envelopeObj.rssi ??
          envelopeObj.rssi_dbm ??
          envelopeObj.rssiDbm;
        const rawUptime =
          dataObj.uptime ??
          dataObj.uptime_ms ??
          dataObj.uptimeMs ??
          envelopeObj.uptime ??
          envelopeObj.uptime_ms ??
          envelopeObj.uptimeMs;

        const rssi =
          rawRssi != null && !isNaN(Number(rawRssi))
            ? Math.round(Number(rawRssi))
            : null;
        const uptime =
          rawUptime != null && !isNaN(Number(rawUptime))
            ? BigInt(Math.round(Number(rawUptime)))
            : null;

        await prisma.device.update({
          where: { id: device.id },
          data: {
            lastSeenAt: now,
            status:
              device.status === DeviceStatus.OFFLINE && device.farmerId
                ? DeviceStatus.ACTIVE
                : device.status,
            ...(rssi != null ? { rssiDbm: rssi } : {}),
            ...(uptime != null ? { uptimeMs: uptime } : {}),
          },
        });
      }

      // ── 3. TELEMETRY: HEARTBEAT ──
      if (category === 'telemetry' && sub === 'heartbeat') {
        const fw = (dataObj.firmware_version ||
          envelopeObj.firmware_version ||
          dataObj.firmwareVersion) as string | undefined;
        const hw = (dataObj.hardware_version ||
          envelopeObj.hardware_version ||
          dataObj.hardwareVersion) as string | undefined;

        const rawRssi =
          dataObj.rssi ??
          dataObj.rssi_dbm ??
          dataObj.rssiDbm ??
          envelopeObj.rssi ??
          envelopeObj.rssi_dbm ??
          envelopeObj.rssiDbm;
        const rawUptime =
          dataObj.uptime ??
          dataObj.uptime_ms ??
          dataObj.uptimeMs ??
          envelopeObj.uptime ??
          envelopeObj.uptime_ms ??
          envelopeObj.uptimeMs;

        const rssi =
          rawRssi != null && !isNaN(Number(rawRssi))
            ? Math.round(Number(rawRssi))
            : null;
        const uptime =
          rawUptime != null && !isNaN(Number(rawUptime))
            ? BigInt(Math.round(Number(rawUptime)))
            : null;

        await prisma.device.update({
          where: { id: device.id },
          data: {
            lastSeenAt: now,
            status:
              device.status === DeviceStatus.OFFLINE && device.farmerId
                ? DeviceStatus.ACTIVE
                : device.status,
            ...(fw && { firmwareVersion: fw }),
            ...(hw && { hardwareVersion: hw }),
            ...(rssi != null ? { rssiDbm: rssi } : {}),
            ...(uptime != null ? { uptimeMs: uptime } : {}),
          },
        });
      }

      // ── 4. STATE: ACTUATOR ──
      if (category === 'state' && sub === 'actuator') {
        // Direct channel format: { channel: 1, state: 'ON' }
        if (dataObj.channel !== undefined && dataObj.state !== undefined) {
          const parsed = actuatorPayloadSchema.safeParse(dataObj);
          if (parsed.success) {
            await prisma.actuator.updateMany({
              where: {
                deviceId: device.id,
                channel: parsed.data.channel,
              },
              data: {
                state: parsed.data.state,
                lastChangedAt: now,
              },
            });
          }
        }

        // ESP32 named format: { pump: 'ON'|'OFF', pumpOn: bool, floorPump: 'ON'|'OFF', floorPumpOn: bool, mode: 'MANUAL' }
        if ('pump' in dataObj || 'pumpOn' in dataObj) {
          const isPumpOn =
            dataObj.pump === 'ON' ||
            dataObj.pump === 1 ||
            dataObj.pumpOn === true ||
            dataObj.pumpOn === 'true';
          await prisma.actuator.updateMany({
            where: {
              deviceId: device.id,
              OR: [
                { type: ActuatorType.PUMP },
                { name: { contains: 'pump', mode: 'insensitive' } },
                { channel: 3 },
              ],
            },
            data: {
              state: isPumpOn ? ActuatorState.ON : ActuatorState.OFF,
              lastChangedAt: now,
            },
          });
        }

        if ('floorPump' in dataObj || 'floorPumpOn' in dataObj) {
          const isFloorOn =
            dataObj.floorPump === 'ON' ||
            dataObj.floorPump === 1 ||
            dataObj.floorPumpOn === true ||
            dataObj.floorPumpOn === 'true';
          await prisma.actuator.updateMany({
            where: {
              deviceId: device.id,
              OR: [
                { type: ActuatorType.FLOOR_WATERING },
                { type: ActuatorType.MISTING },
                { name: { contains: 'fan', mode: 'insensitive' } },
                { name: { contains: 'siram', mode: 'insensitive' } },
                { channel: 1 },
              ],
            },
            data: {
              state: isFloorOn ? ActuatorState.ON : ActuatorState.OFF,
              lastChangedAt: now,
            },
          });
        }

        if (dataObj.mode && typeof dataObj.mode === 'string') {
          const modeStr = dataObj.mode.toUpperCase();
          if (['MANUAL', 'AUTO', 'HYBRID', 'SCHEDULE'].includes(modeStr)) {
            await prisma.device.update({
              where: { id: device.id },
              data: { controlMode: modeStr as ControlMode },
            });
          }
        }
      }

      // ── 5. STATE: SETPOINT AUTO ──
      if (category === 'state' && sub === 'setpoint' && parts[3] === 'auto') {
        const minS = dataObj.MinS != null ? Number(dataObj.MinS) : undefined;
        const midS = dataObj.MidS != null ? Number(dataObj.MidS) : undefined;
        const minK = dataObj.MinK != null ? Number(dataObj.MinK) : undefined;
        const midK = dataObj.MidK != null ? Number(dataObj.MidK) : undefined;

        await prisma.deviceSetting.upsert({
          where: { deviceId: device.id },
          create: {
            deviceId: device.id,
            minTemperature: minS ?? 24.0,
            maxTemperature: midS ?? 28.0,
            minHumidity: minK ?? 80.0,
            maxHumidity: midK ?? 95.0,
          },
          update: {
            ...(minS != null && !isNaN(minS) && { minTemperature: minS }),
            ...(midS != null && !isNaN(midS) && { maxTemperature: midS }),
            ...(minK != null && !isNaN(minK) && { minHumidity: minK }),
            ...(midK != null && !isNaN(midK) && { maxHumidity: midK }),
          },
        });
      }

      // ── 6. STATE: TIMER AUTO & FLOOR ──
      if (category === 'state' && sub === 'timer') {
        if (parts[3] === 'auto') {
          const menit = dataObj.Menit != null ? Number(dataObj.Menit) : 0;
          const detik = dataObj.Detik != null ? Number(dataObj.Detik) : 0;
          const totalSeconds = menit * 60 + detik;

          await prisma.deviceSetting.upsert({
            where: { deviceId: device.id },
            create: {
              deviceId: device.id,
              timerDurationSeconds: totalSeconds,
            },
            update: {
              timerDurationSeconds: totalSeconds,
            },
          });
        } else if (parts[3] === 'floor') {
          logger.info(`Laporan state timer lantai dari ${device.serialNumber}:`, dataObj);
        }
      }

      // ── 7. STATE: CONTROL MODE ──
      if (category === 'state' && sub === 'control' && parts[3] === 'mode') {
        const modeVal = dataObj.mode;
        let mode: ControlMode | null = null;
        if (modeVal === 1 || modeVal === '1' || modeVal === 'MANUAL')
          mode = ControlMode.MANUAL;
        else if (modeVal === 2 || modeVal === '2' || modeVal === 'AUTO')
          mode = ControlMode.AUTO;
        else if (modeVal === 3 || modeVal === '3' || modeVal === 'HYBRID')
          mode = ControlMode.HYBRID;
        else if (modeVal === 4 || modeVal === '4' || modeVal === 'SCHEDULE')
          mode = ControlMode.SCHEDULE;

        if (mode) {
          await prisma.device.update({
            where: { id: device.id },
            data: { controlMode: mode },
          });
        }
      }

      // ── 7b. STATE: SCHEDULE ──
      if (category === 'state' && sub === 'schedule') {
        logger.info(`Laporan state jadwal dari ${device.serialNumber}:`, {
          subType: parts[3],
          slot: parts[4],
          data: dataObj,
        });
      }

      // ── 8. STATE / TELEMETRY: OTA UPDATE STATUS FEEDBACK ──
      if ((category === 'state' || category === 'telemetry') && sub === 'ota') {
        const rawStatus = (dataObj.status || envelopeObj.status || '').toString().trim();
        const rawVersion = (dataObj.version || dataObj.firmware_version || envelopeObj.firmware_version) as string | undefined;
        const rawProgress = Number(dataObj.progress ?? envelopeObj.progress ?? 0);
        const rawError = (dataObj.error || envelopeObj.error) as string | undefined;

        logger.info(`Laporan status OTA diterima dari ${device.serialNumber}:`, {
          status: rawStatus,
          progress: rawProgress,
          version: rawVersion,
          error: rawError,
        });

        const statusUpper = rawStatus.toUpperCase();
        let normalizedStatus = 'IN_PROGRESS';
        let notes = `${rawStatus} (${rawProgress}%)`;

        const isSuccess =
          statusUpper.includes('SUCCESS') ||
          statusUpper === 'OK' ||
          rawStatus === 'Update Success!';

        const isFailure =
          statusUpper.includes('FAIL') ||
          Boolean(rawError) ||
          [
            'BAD_CHECKSUM',
            'HW_MISMATCH',
            'ALREADY_UP_TO_DATE',
            'STALL TIMEOUT',
            'MEMORY ERROR',
            'TIMEOUT/DISCONNECT',
            'SPACE INSUFFICIENT',
            'CONTENT ZERO',
            'CONNECT FAILED',
          ].includes(statusUpper) ||
          statusUpper.startsWith('ERR') ||
          statusUpper.startsWith('HTTP ERR');

        if (isSuccess) {
          normalizedStatus = 'SUCCESS';
          notes = 'Pembaruan firmware berhasil dan sistem restart';
        } else if (isFailure) {
          normalizedStatus = 'FAILED';
          notes = rawError ? `Gagal: ${rawError}` : `Gagal: ${rawStatus}`;
        }

        const latestLog = await prisma.otaLog.findFirst({
          where: {
            OR: [{ deviceId: device.id }, { deviceSerialNumber: device.serialNumber }],
          },
          orderBy: { createdAt: 'desc' },
        });

        if (latestLog) {
          await prisma.otaLog.update({
            where: { id: latestLog.id },
            data: {
              status: normalizedStatus,
              notes,
            },
          });
        }

        if (isSuccess && rawVersion) {
          await prisma.device.update({
            where: { id: device.id },
            data: {
              firmwareVersion: rawVersion,
              lastSeenAt: now,
            },
          });
        }
      }
    } catch (err) {
      logger.error('Error memproses pesan MQTT:', {
        topic,
        error: (err as Error).message,
        stack: (err as Error).stack,
      });
    }
  }

  public publish(
    topic: string,
    payload: unknown,
    options?: { retain?: boolean; qos?: 0 | 1 | 2 },
  ): boolean {
    if (!this.client || !this.isConnected) {
      return false;
    }

    const message =
      typeof payload === 'string' ? payload : JSON.stringify(payload);
    this.client.publish(topic, message, {
      qos: options?.qos ?? 1,
      retain: options?.retain ?? false,
    });
    return true;
  }

  public publishActivationStatus(
    serialNumber: string,
    activated: boolean,
    owner: string = '',
    message?: string,
  ): boolean {
    const topic = `${serialNumber}/activation/status`;
    const payload = {
      activated,
      owner,
      message:
        message ||
        (activated
          ? 'Perangkat berhasil diaktivasi'
          : 'Perangkat belum diaktivasi'),
    };
    const published = this.publish(topic, payload, { retain: true, qos: 1 });
    logger.info(`MQTT publish activation status ke ${topic}:`, {
      activated,
      owner,
      published,
    });
    return published;
  }

  public publishCommand(
    serialNumber: string,
    subTopic: string,
    payload: unknown,
  ): boolean {
    return this.publish(`${serialNumber}/cmd/${subTopic}`, payload);
  }

  public publishOtaTrigger(serialNumber: string, payload: unknown): boolean {
    // Kirim ke semua topik OTA yang didukung ESP32 firmware
    // 1. Standar ShroomSync: shroomsync/ota/:serial/trigger
    // 2. Format perintah umum: :serial/cmd/ota
    // 3. Format legacy: :serial/legacy/ota/trigger
    const p1 = this.publish(`shroomsync/ota/${serialNumber}/trigger`, payload, { qos: 1 });
    const p2 = this.publish(`${serialNumber}/cmd/ota`, payload, { qos: 1 });
    const p3 = this.publish(`${serialNumber}/legacy/ota/trigger`, payload, { qos: 1 });
    return p1 || p2 || p3;
  }

  public publishOtaBroadcast(payload: unknown): boolean {
    return this.publish('shroomsync/ota/broadcast', payload, { qos: 1 });
  }

  public async disconnect(): Promise<void> {
    if (this.client) {
      await new Promise<void>((resolve) => {
        this.client!.end(false, () => {
          this.isConnected = false;
          resolve();
        });
      });
    }
  }
}

export const mqttService = new MqttService();
