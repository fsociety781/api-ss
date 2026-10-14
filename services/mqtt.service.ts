import mqtt, { MqttClient } from 'mqtt';
import { z } from 'zod';
import { env } from '../config/env';
import { prisma } from '../bin/prismaConfig';
import { ActuatorState, DeviceStatus } from '../src/generated/prisma/client';
import { logger } from '../utils/logger';

const sensorPayloadSchema = z.object({
  temperature: z.coerce.number().optional(),
  temp: z.coerce.number().optional(),
  humidity: z.coerce.number().optional(),
  hum: z.coerce.number().optional(),
});

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

        // Subscribe to device topics
        const topics = [
          '+/telemetry/sensor',
          '+/telemetry/heartbeat',
          '+/state/actuator',
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

      const serialNumber = parts[0];
      const category = parts[1];
      const sub = parts[2];

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

      const device = await prisma.device.findUnique({
        where: { serialNumber },
      });

      if (!device) {
        logger.warn('Pesan MQTT diterima untuk serial number yang tidak terdaftar:', {
          serialNumber,
          topic,
        });
        return;
      }

      const now = new Date();

      if (category === 'telemetry' && sub === 'sensor') {
        const parsed = sensorPayloadSchema.safeParse(rawContent);
        if (!parsed.success) {
          logger.warn('Payload telemetry sensor MQTT tidak valid:', {
            errors: parsed.error.issues,
            topic,
          });
          return;
        }

        const temperature = parsed.data.temperature ?? parsed.data.temp;
        const humidity = parsed.data.humidity ?? parsed.data.hum;

        if (
          temperature !== undefined &&
          humidity !== undefined &&
          !isNaN(temperature) &&
          !isNaN(humidity)
        ) {
          await prisma.sensorReading.create({
            data: {
              deviceId: device.id,
              temperature,
              humidity,
              recordedAt: now,
            },
          });
        }

        await prisma.device.update({
          where: { id: device.id },
          data: {
            lastSeenAt: now,
            status:
              device.status === DeviceStatus.OFFLINE && device.farmerId
                ? DeviceStatus.ACTIVE
                : device.status,
          },
        });
      }

      if (category === 'telemetry' && sub === 'heartbeat') {
        await prisma.device.update({
          where: { id: device.id },
          data: {
            lastSeenAt: now,
            status:
              device.status === DeviceStatus.OFFLINE && device.farmerId
                ? DeviceStatus.ACTIVE
                : device.status,
          },
        });
      }

      if (category === 'state' && sub === 'actuator') {
        const parsed = actuatorPayloadSchema.safeParse(rawContent);
        if (!parsed.success) {
          logger.warn('Payload state actuator MQTT tidak valid:', {
            errors: parsed.error.issues,
            topic,
          });
          return;
        }

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
    } catch (err) {
      logger.error('Error memproses pesan MQTT:', {
        topic,
        error: (err as Error).message,
        stack: (err as Error).stack,
      });
    }
  }

  public publish(topic: string, payload: unknown): boolean {
    if (!this.client || !this.isConnected) {
      return false;
    }

    const message =
      typeof payload === 'string' ? payload : JSON.stringify(payload);
    this.client.publish(topic, message, { qos: 1 });
    return true;
  }

  public publishCommand(
    serialNumber: string,
    subTopic: string,
    payload: unknown,
  ): boolean {
    return this.publish(`${serialNumber}/cmd/${subTopic}`, payload);
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
