"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prismaConfig_1 = require("../bin/prismaConfig");
const mqtt_service_1 = require("../services/mqtt.service");
const env_1 = require("../config/env");
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    const startTime = Date.now();
    let dbStatus = 'disconnected';
    let dbLatencyMs = null;
    try {
        const dbStart = Date.now();
        await prismaConfig_1.prisma.$queryRaw `SELECT 1`;
        dbLatencyMs = Date.now() - dbStart;
        dbStatus = 'connected';
    }
    catch (err) {
        dbStatus = 'error';
    }
    const mqttConnected = mqtt_service_1.mqttService.getConnected();
    const isHealthy = dbStatus === 'connected';
    const memUsage = process.memoryUsage();
    const healthData = {
        status: isHealthy ? 'healthy' : 'degraded',
        service: 'ShroomSync IoT API',
        version: '2.0.0',
        timestamp: new Date().toISOString(),
        uptimeSeconds: Math.floor(process.uptime()),
        environment: env_1.env.NODE_ENV,
        checks: {
            database: {
                status: dbStatus,
                latencyMs: dbLatencyMs,
            },
            mqttBroker: {
                status: mqttConnected ? 'connected' : 'offline',
                brokerUrl: env_1.env.MQTT_BROKER_URL || 'disabled',
            },
        },
        system: {
            nodeVersion: process.version,
            memory: {
                rssMb: +(memUsage.rss / 1024 / 1024).toFixed(2),
                heapUsedMb: +(memUsage.heapUsed / 1024 / 1024).toFixed(2),
                heapTotalMb: +(memUsage.heapTotal / 1024 / 1024).toFixed(2),
            },
        },
        totalCheckDurationMs: Date.now() - startTime,
    };
    res.status(isHealthy ? 200 : 503).json(healthData);
});
exports.default = router;
//# sourceMappingURL=health.routes.js.map