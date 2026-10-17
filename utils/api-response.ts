import { Response } from 'express';

export class ApiResponse {
  static success<T>(
    res: Response,
    data: T = null as unknown as T,
    message: string = 'Success',
    statusCode: number = 200,
  ): Response {
    return res.status(statusCode).json({
      success: true,
      status: 'success',
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  }

  static error(
    res: Response,
    message: string = 'Internal Server Error',
    statusCode: number = 500,
    errors: unknown = null,
    code?: string,
  ): Response {
    const defaultCode =
      statusCode === 400
        ? 'BAD_REQUEST'
        : statusCode === 401
          ? 'UNAUTHORIZED'
          : statusCode === 403
            ? 'FORBIDDEN'
            : statusCode === 404
              ? 'NOT_FOUND'
              : statusCode === 409
                ? 'CONFLICT'
                : statusCode === 422
                  ? 'VALIDATION_ERROR'
                  : 'INTERNAL_SERVER_ERROR';

    return res.status(statusCode).json({
      success: false,
      status: 'error',
      code: code ?? defaultCode,
      message,
      errors: errors ?? undefined,
      timestamp: new Date().toISOString(),
    });
  }
}
