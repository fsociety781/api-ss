"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mqttService = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
const env_1 = require("../bin/env");
const prismaConfig_1 = require("../bin/prismaConfig");
const client_1 = require("../src/generated/prisma/client");
const logger_1 = require("../utils/logger");
class MqttService {
    constructor() {
        this.client = null;
        this.isConnected = false;
    }
    getConnected() {
        return this.isConnected;
    }
    initialize() {
        if (!env_1.env.MQTT_BROKER_URL) {
            logger_1.logger.info('MQTT_BROKER_URL tidak diset, MQTT service dinonaktifkan (mode HTTP-only).');
            return;
        }
        try {
            logger_1.logger.info(`Menghubungkan ke MQTT Broker: ${env_1.env.MQTT_BROKER_URL}...`);
            this.client = mqtt_1.default.connect(env_1.env.MQTT_BROKER_URL, {
                clientId: `${env_1.env.MQTT_CLIENT_ID}-${Math.random().toString(16).substring(2, 8)}`,
                reconnectPeriod: 5000,
                connectTimeout: 10000,
                username: env_1.env.MQTT_USERNAME,
                password: env_1.env.MQTT_PASSWORD,
            });
            this.client.on('connect', () => {
                this.isConnected = true;
                logger_1.logger.info('Terhubung ke MQTT Broker');
                // Subscribe to device topics
                const topics = [
                    '+/telemetry/sensor',
                    '+/telemetry/heartbeat',
                    '+/state/actuator',
                ];
                this.client?.subscribe(topics, (err) => {
                    if (err) {
                        logger_1.logger.error('Gagal subscribe ke topik MQTT:', err);
                    }
                    else {
                        logger_1.logger.info(`Berhasil subscribe topik: ${topics.join(', ')}`);
                    }
                });
            });
            this.client.on('message', (topic, message) => {
                void this.handleMessage(topic, message);
            });
            this.client.on('error', (err) => {
                logger_1.logger.error('MQTT error:', err);
            });
            this.client.on('offline', () => {
                this.isConnected = false;
                logger_1.logger.warn('Koneksi MQTT offline, mencoba reconnect otomatis...');
            });
        }
        catch (error) {
            logger_1.logger.error('Gagal inisialisasi MQTT:', error);
        }
    }
    async handleMessage(topic, payload) {
        try {
            const parts = topic.split('/');
            const serialNumber = parts[0];
            const category = parts[1];
            const sub = parts[2];
            const content = JSON.parse(payload.toString());
            const device = await prismaConfig_1.prisma.device.findUnique({
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
                    await prismaConfig_1.prisma.sensorReading.create({
                        data: {
                            deviceId: device.id,
                            temperature,
                            humidity,
                            recordedAt: now,
                        },
                    });
                }
                await prismaConfig_1.prisma.device.update({
                    where: { id: device.id },
                    data: {
                        lastSeenAt: now,
                        status: device.status === client_1.DeviceStatus.OFFLINE && device.farmerId
                            ? client_1.DeviceStatus.ACTIVE
                            : device.status,
                    },
                });
            }
            if (category === 'telemetry' && sub === 'heartbeat') {
                await prismaConfig_1.prisma.device.update({
                    where: { id: device.id },
                    data: {
                        lastSeenAt: now,
                        status: device.status === client_1.DeviceStatus.OFFLINE && device.farmerId
                            ? client_1.DeviceStatus.ACTIVE
                            : device.status,
                    },
                });
            }
            if (category === 'state' && sub === 'actuator') {
                const channel = content.channel;
                const state = content.state;
                if (channel !== undefined && state) {
                    await prismaConfig_1.prisma.actuator.updateMany({
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
        }
        catch (err) {
            console.error(`Error memproses pesan MQTT dari topik ${topic}:`, err.message);
        }
    }
    publish(topic, payload) {
        if (!this.client || !this.isConnected) {
            return false;
        }
        const message = typeof payload === 'string' ? payload : JSON.stringify(payload);
        this.client.publish(topic, message, { qos: 1 });
        return true;
    }
    publishCommand(serialNumber, subTopic, payload) {
        return this.publish(`${serialNumber}/cmd/${subTopic}`, payload);
    }
    async disconnect() {
        if (this.client) {
            await new Promise((resolve) => {
                this.client.end(false, () => {
                    this.isConnected = false;
                    resolve();
                });
            });
        }
    }
}
exports.mqttService = new MqttService();
//# sourceMappingURL=mqtt.service.js.map