"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mqttService = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
const zod_1 = require("zod");
const env_1 = require("../config/env");
const prismaConfig_1 = require("../bin/prismaConfig");
const client_1 = require("../src/generated/prisma/client");
const logger_1 = require("../utils/logger");
const sensorPayloadSchema = zod_1.z.object({
    temperature: zod_1.z.coerce.number().optional(),
    temp: zod_1.z.coerce.number().optional(),
    humidity: zod_1.z.coerce.number().optional(),
    hum: zod_1.z.coerce.number().optional(),
});
const actuatorPayloadSchema = zod_1.z.object({
    channel: zod_1.z.coerce.number(),
    state: zod_1.z.nativeEnum(client_1.ActuatorState),
});
class MqttService {
    constructor() {
        this.client = null;
        this.isConnected = false;
        this.reconnectAttempts = 0;
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
            logger_1.logger.info(`Menghubungkan ke MQTT Broker (EMQX): ${env_1.env.MQTT_BROKER_URL}...`);
            const connectOptions = {
                clientId: `${env_1.env.MQTT_CLIENT_ID}-${Math.random().toString(16).substring(2, 8)}`,
                reconnectPeriod: 5000,
                connectTimeout: 10000,
                clean: true,
            };
            if (env_1.env.MQTT_USERNAME && env_1.env.MQTT_USERNAME.trim() !== '') {
                connectOptions.username = env_1.env.MQTT_USERNAME;
            }
            if (env_1.env.MQTT_PASSWORD && env_1.env.MQTT_PASSWORD.trim() !== '') {
                connectOptions.password = env_1.env.MQTT_PASSWORD;
            }
            this.client = mqtt_1.default.connect(env_1.env.MQTT_BROKER_URL, connectOptions);
            this.client.on('connect', () => {
                this.isConnected = true;
                this.reconnectAttempts = 0;
                logger_1.logger.info('Terhubung ke MQTT Broker');
                // Subscribe to device topics
                const topics = [
                    '+/telemetry/sensor',
                    '+/telemetry/heartbeat',
                    '+/state/actuator',
                ];
                this.client?.subscribe(topics, (err) => {
                    if (err) {
                        logger_1.logger.error('Gagal subscribe ke topik MQTT:', { error: err.message });
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
                logger_1.logger.error('MQTT error:', { error: err.message });
            });
            this.client.on('offline', () => {
                this.isConnected = false;
                this.reconnectAttempts++;
                logger_1.logger.warn(`Koneksi MQTT offline, mencoba reconnect (percobaan #${this.reconnectAttempts})...`);
            });
            this.client.on('reconnect', () => {
                logger_1.logger.info('Mencoba reconnect ke MQTT Broker...');
            });
        }
        catch (error) {
            logger_1.logger.error('Gagal inisialisasi MQTT:', {
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
    async handleMessage(topic, payload) {
        try {
            const parts = topic.split('/');
            if (parts.length < 3) {
                logger_1.logger.warn('Topik MQTT tidak sesuai format serialNumber/cat/sub:', { topic });
                return;
            }
            const serialNumber = parts[0];
            const category = parts[1];
            const sub = parts[2];
            let rawContent;
            try {
                rawContent = JSON.parse(payload.toString());
            }
            catch {
                logger_1.logger.warn('Gagal mem-parse JSON payload MQTT:', {
                    topic,
                    rawPayload: payload.toString().slice(0, 200),
                });
                return;
            }
            const device = await prismaConfig_1.prisma.device.findUnique({
                where: { serialNumber },
            });
            if (!device) {
                logger_1.logger.warn('Pesan MQTT diterima untuk serial number yang tidak terdaftar:', {
                    serialNumber,
                    topic,
                });
                return;
            }
            const now = new Date();
            if (category === 'telemetry' && sub === 'sensor') {
                const parsed = sensorPayloadSchema.safeParse(rawContent);
                if (!parsed.success) {
                    logger_1.logger.warn('Payload telemetry sensor MQTT tidak valid:', {
                        errors: parsed.error.issues,
                        topic,
                    });
                    return;
                }
                const temperature = parsed.data.temperature ?? parsed.data.temp;
                const humidity = parsed.data.humidity ?? parsed.data.hum;
                if (temperature !== undefined &&
                    humidity !== undefined &&
                    !isNaN(temperature) &&
                    !isNaN(humidity)) {
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
                const parsed = actuatorPayloadSchema.safeParse(rawContent);
                if (!parsed.success) {
                    logger_1.logger.warn('Payload state actuator MQTT tidak valid:', {
                        errors: parsed.error.issues,
                        topic,
                    });
                    return;
                }
                await prismaConfig_1.prisma.actuator.updateMany({
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
        catch (err) {
            logger_1.logger.error('Error memproses pesan MQTT:', {
                topic,
                error: err.message,
                stack: err.stack,
            });
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