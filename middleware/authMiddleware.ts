import { NextFunction, Request, Response } from 'express';
import { prisma } from '../bin/prismaConfig';
import { verifyToken } from '../utils/token';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';
import '../types/auth';

export async function authMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Token otentikasi tidak ditemukan');
    }

    const token = authHeader.substring(7).trim();
    if (!token) {
      throw new UnauthorizedError('Format token otentikasi tidak valid');
    }

    let payload;
    try {
      payload = verifyToken(token);
    } catch {
      throw new UnauthorizedError('Token tidak valid atau telah kedaluwarsa');
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
      },
    });

    if (!user) {
      throw new UnauthorizedError('Pengguna tidak ditemukan atau telah dihapus');
    }

    if (user.status === 'SUSPENDED') {
      throw new ForbiddenError(
        'Akun Anda ditangguhkan (SUSPENDED). Hubungi administrator.',
      );
    }

    if (user.status === 'INACTIVE') {
      throw new ForbiddenError('Akun Anda tidak aktif.');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

export async function optionalAuth(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next();
    }

    const token = authHeader.substring(7).trim();
    if (!token) {
      return next();
    }

    let payload;
    try {
      payload = verifyToken(token);
    } catch {
      return next();
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
      },
    });

    if (user && user.status !== 'SUSPENDED' && user.status !== 'INACTIVE') {
      req.user = user;
    }

    next();
  } catch {
    next();
  }
}

