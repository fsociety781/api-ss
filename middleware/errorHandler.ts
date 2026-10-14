import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors';
import { ApiResponse } from '../utils/api-response';
import { logger } from '../utils/logger';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (res.headersSent) {
    return;
  }

  const requestId = req.id || (req.headers['x-request-id'] as string) || undefined;
  if (requestId && !res.getHeader('X-Request-ID')) {
    res.setHeader('X-Request-ID', requestId);
  }

  if (err instanceof AppError) {
    logger.warn(`AppError [${err.statusCode}]: ${err.message}`, {
      requestId,
      statusCode: err.statusCode,
      path: req.originalUrl,
      method: req.method,
    });
    ApiResponse.error(res, err.message, err.statusCode, err.errors);
    return;
  }

  if (err instanceof ZodError) {
    const fieldErrors = err.flatten().fieldErrors;
    logger.warn('Zod validation error', {
      requestId,
      path: req.originalUrl,
      method: req.method,
      errors: fieldErrors,
    });
    ApiResponse.error(res, 'Validasi input gagal', 422, fieldErrors, 'VALIDATION_ERROR');
    return;
  }

  if (
    err instanceof SyntaxError &&
    'status' in err &&
    (err as { status: number }).status === 400
  ) {
    logger.warn('Malformed JSON payload received', {
      requestId,
      path: req.originalUrl,
      method: req.method,
    });
    ApiResponse.error(res, 'Format payload JSON tidak valid', 400, null, 'INVALID_JSON');
    return;
  }

  const prismaErr = err as { code?: string; meta?: { target?: string[] } };
  if (prismaErr && typeof prismaErr.code === 'string') {
    if (prismaErr.code === 'P2002') {
      const target = prismaErr.meta?.target?.join(', ') || 'field';
      logger.warn(`Prisma unique constraint violation on ${target}`, {
        requestId,
        path: req.originalUrl,
      });
      ApiResponse.error(res, `Nilai untuk ${target} sudah terdaftar`, 409, null, 'DUPLICATE_ENTRY');
      return;
    }

    if (prismaErr.code === 'P2025') {
      logger.warn('Prisma record not found', {
        requestId,
        path: req.originalUrl,
      });
      ApiResponse.error(res, 'Data tidak ditemukan di database', 404, null, 'RECORD_NOT_FOUND');
      return;
    }
  }

  logger.error('Unhandled Server Error', {
    requestId,
    path: req.originalUrl,
    method: req.method,
    error: err instanceof Error ? err.message : String(err),
    stack: err instanceof Error ? err.stack : undefined,
  });

  const errorMessage =
    process.env.NODE_ENV === 'production'
      ? 'Terjadi kesalahan pada server'
      : (err as Error)?.message || 'Terjadi kesalahan pada server';

  ApiResponse.error(res, errorMessage, 500, null, 'INTERNAL_SERVER_ERROR');
}
