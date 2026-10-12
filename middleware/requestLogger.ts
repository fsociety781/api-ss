import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

declare global {
  namespace Express {
    interface Request {
      id?: string;
    }
  }
}

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const reqId =
    (req.headers['x-request-id'] as string) ||
    `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  req.id = reqId;
  res.setHeader('X-Request-ID', reqId);

  const startNs = process.hrtime.bigint();

  res.on('finish', () => {
    const elapsedNs = process.hrtime.bigint() - startNs;
    const durationMs = Number(elapsedNs) / 1_000_000;

    const statusCode = res.statusCode;
    const logData = {
      requestId: reqId,
      method: req.method,
      url: req.originalUrl || req.url,
      statusCode,
      durationMs: +durationMs.toFixed(2),
      ip: req.ip || req.socket.remoteAddress,
      userAgent: req.get('user-agent') || 'unknown',
    };

    if (statusCode >= 500) {
      logger.error(`HTTP ${req.method} ${req.url} ${statusCode} - ${durationMs.toFixed(2)}ms`, logData);
    } else if (statusCode >= 400) {
      logger.warn(`HTTP ${req.method} ${req.url} ${statusCode} - ${durationMs.toFixed(2)}ms`, logData);
    } else {
      logger.info(`HTTP ${req.method} ${req.url} ${statusCode} - ${durationMs.toFixed(2)}ms`, logData);
    }
  });

  next();
};

