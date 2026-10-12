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
  ): Response {
    return res.status(statusCode).json({
      success: false,
      message,
      errors: errors ?? undefined,
      timestamp: new Date().toISOString(),
    });
  }
}

