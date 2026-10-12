import express, { Request, Response, Router } from 'express';
import { prisma } from '../bin/prismaConfig';
import { mqttService } from '../services/mqtt.service';
import { env } from '../config/env';

const router: Router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const startTime = Date.now();
  let dbStatus: 'connected' | 'disconnected' | 'error' = 'disconnected';
  let dbLatencyMs: number | null = null;

  try {
    const dbStart = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    dbLatencyMs = Date.now() - dbStart;
    dbStatus = 'connected';
  } catch (err) {
    dbStatus = 'error';
  }

  const mqttConnected = mqttService.getConnected();
  const isHealthy = dbStatus === 'connected';

  const memUsage = process.memoryUsage();
  const healthData = {
    status: isHealthy ? 'healthy' : 'degraded',
    service: 'ShroomSync IoT API',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: env.NODE_ENV,
    checks: {
      database: {
        status: dbStatus,
        latencyMs: dbLatencyMs,
      },
      mqttBroker: {
        status: mqttConnected ? 'connected' : 'offline',
        brokerUrl: env.MQTT_BROKER_URL || 'disabled',
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

export default router;

