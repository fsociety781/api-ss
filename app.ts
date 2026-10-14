import express, { Express, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { env } from './config/env';
import { APP_INFO } from './config/app-info';
import { requestLogger } from './middleware/requestLogger';
import { apiLimiter, authLimiter, actuatorLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';
import { ApiResponse } from './utils/api-response';

import healthRouter from './routes/health.routes';
import swaggerRouter from './docs/swagger';

import authRouter from './routes/auth/index';
import technicianRouter from './routes/technician/index';
import adminRouter from './routes/admin/index';
import farmerRouter from './routes/farmer/index';

import deviceRouter from './routes/device/index';
import controlRouter from './routes/control.routes';
import telemetryRouter from './routes/telemetry.routes';
import cycleRouter from './routes/cycle.routes';

const app: Express = express();

// ── Security Headers ──────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows Swagger UI to render inline styles/scripts
    crossOriginEmbedderPolicy: false,
  }),
);

// ── CORS Configuration ────────────────────────
app.use(
  cors({
    origin:
      env.CORS_ORIGIN === '*'
        ? true
        : env.CORS_ORIGIN.split(',').map((origin) => origin.trim()),
    credentials: true,
  }),
);

// ── HTTP Request Parsers & Loggers ───────────
if (env.NODE_ENV !== 'test') {
  app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}
app.use(requestLogger);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Static Files
app.use(
  express.static(path.join(__dirname, 'public'), {
    dotfiles: 'allow',
  }),
);

// ── Interactive API Documentation (Swagger) ───
app.use('/api/docs', swaggerRouter);
app.use('/api/v1/docs', swaggerRouter);

// ── Health Probing (Deep DB + MQTT Check) ─────
app.use('/api/health', healthRouter);
app.use('/api/v1/health', healthRouter);

// ── Root Greeting ─────────────────────────────
app.get('/', (_req: Request, res: Response) => {
  ApiResponse.success(
    res,
    {
      service: APP_INFO.serviceName,
      version: APP_INFO.version,
      status: 'operational',
      documentation: '/api/docs',
      healthCheck: '/api/health',
    },
    'Selamat datang di ShroomSync API Service',
  );
});

// ── Rate Limiting Protection ──────────────────
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/devices/:deviceId/actuator', actuatorLimiter);
app.use('/api/v1/devices/:deviceId/control', actuatorLimiter);
app.use('/api/v1', apiLimiter);

// ── API Routes (v1) ───────────────────────────
app.use('/api/v1/auth', authRouter);

// Role-based routes
app.use('/api/v1/technician', technicianRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/farmer', farmerRouter);

// Device, Control, Telemetry & Cycle Routes (100% api-shroomsync frontend compatible)
app.use('/api/v1/devices', deviceRouter);
app.use('/api/v1/devices', controlRouter);
app.use('/api/v1/devices', telemetryRouter);
app.use('/api/v1/devices', cycleRouter);

// ── Catch 404 for undefined routes ────────────
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.method} ${req.path} tidak ditemukan`,
    code: 'ROUTE_NOT_FOUND',
    timestamp: new Date().toISOString(),
  });
});

// ── Global Error Handler ──────────────────────
app.use(errorHandler);

export default app;
