import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors';
import { ApiResponse } from '../utils/api-response';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (res.headersSent) {
    return;
  }

  if (err instanceof AppError) {
    ApiResponse.error(res, err.message, err.statusCode, err.errors);
    return;
  }

  if (err instanceof ZodError) {
    const fieldErrors = err.flatten().fieldErrors;
    ApiResponse.error(res, 'Validasi input gagal', 422, fieldErrors);
    return;
  }

  if (
    err instanceof SyntaxError &&
    'status' in err &&
    (err as { status: number }).status === 400
  ) {
    ApiResponse.error(res, 'Format payload JSON tidak valid', 400);
    return;
  }

  const prismaErr = err as { code?: string; meta?: { target?: string[] } };
  if (prismaErr && typeof prismaErr.code === 'string') {
    if (prismaErr.code === 'P2002') {
      const target = prismaErr.meta?.target?.join(', ') || 'field';
      ApiResponse.error(res, `Nilai untuk ${target} sudah terdaftar`, 409);
      return;
    }

    if (prismaErr.code === 'P2025') {
      ApiResponse.error(res, 'Data tidak ditemukan di database', 404);
      return;
    }
  }

  console.error('Unhandled Server Error:', err);

  const errorMessage =
    process.env.NODE_ENV === 'production'
      ? 'Terjadi kesalahan pada server'
      : (err as Error)?.message || 'Terjadi kesalahan pada server';

  ApiResponse.error(res, errorMessage, 500);
}
