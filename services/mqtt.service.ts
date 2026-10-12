import mqtt, { MqttClient } from 'mqtt';
import { env } from '../bin/env';
import { prisma } from '../bin/prismaConfig';
import { ActuatorState, DeviceStatus } from '../src/generated/prisma/client';
import { logger } from '../utils/logger';

class MqttService {
  private client: MqttClient | null = null;
  private isConnected: boolean = false;

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
      logger.info(`Menghubungkan ke MQTT Broker: ${env.MQTT_BROKER_URL}...`);
      this.client = mqtt.connect(env.MQTT_BROKER_URL, {
        clientId: `${env.MQTT_CLIENT_ID}-${Math.random().toString(16).substring(2, 8)}`,
        reconnectPeriod: 5000,
        connectTimeout: 10000,
        username: env.MQTT_USERNAME,
        password: env.MQTT_PASSWORD,
      });

      this.client.on('connect', () => {
        this.isConnected = true;
        logger.info('Terhubung ke MQTT Broker');

        // Subscribe to device topics
        const topics = [
          '+/telemetry/sensor',
          '+/telemetry/heartbeat',
          '+/state/actuator',
        ];

        this.client?.subscribe(topics, (err) => {
          if (err) {
            logger.error('Gagal subscribe ke topik MQTT:', err);
          } else {
            logger.info(`Berhasil subscribe topik: ${topics.join(', ')}`);
          }
        });
      });

      this.client.on('message', (topic, message) => {
        void this.handleMessage(topic, message);
      });

      this.client.on('error', (err) => {
        logger.error('MQTT error:', err);
      });

      this.client.on('offline', () => {
        this.isConnected = false;
        logger.warn('Koneksi MQTT offline, mencoba reconnect otomatis...');
      });
    } catch (error) {
      logger.error('Gagal inisialisasi MQTT:', error);
    }
  }

  private async handleMessage(topic: string, payload: Buffer): Promise<void> {
    try {
      const parts = topic.split('/');
      const serialNumber = parts[0];
      const category = parts[1];
      const sub = parts[2];

      const content = JSON.parse(payload.toString());

      const device = await prisma.device.findUnique({
        where: { serialNumber },
      });

      if (!device) {
        return;
      }

      const now = new Date();

      if (category === 'telemetry' && sub === 'sensor') {
        const temperature = Number(content.temperature ?? content.temp);
        const humidity = Number(content.humidity ?? content.hum);

        if (!isNaN(temperature) && !isNaN(humidity)) {
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
        const channel = content.channel;
        const state = content.state as ActuatorState;

        if (channel !== undefined && state) {
          await prisma.actuator.updateMany({
            where: {
              deviceId: device.id,
              channel: Number(channel),
            },
            data: {
              state,
              lastChangedAt: now,
            },
          });
        }
      }
    } catch (err) {
      console.error(
        `Error memproses pesan MQTT dari topik ${topic}:`,
        (err as Error).message,
      );
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
