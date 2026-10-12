import { NextFunction, Request, Response } from 'express';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';

export function technicMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  if (!req.user) {
    return next(new UnauthorizedError('Otentikasi diperlukan'));
  }

  if (req.user.role !== 'TECHNICIAN') {
    return next(
      new ForbiddenError('Hanya teknisi yang berhak mengakses endpoint ini'),
    );
  }

  next();
}
