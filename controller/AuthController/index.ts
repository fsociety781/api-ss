import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../utils/errors';
import { signToken } from '../../utils/token';
import { loginPasswordSchema, passwordSchema } from '../../utils/validation';

const loginSchema = z.object({
  identifier: z.string().min(1, 'Nomor HP atau email wajib diisi'),
  password: loginPasswordSchema,
});

const onboardingSchema = z.object({
  currentPassword: z.string().min(1, 'Password lama/default wajib diisi'),
  newPassword: passwordSchema,
  fullName: z.string().min(2, 'Nama lengkap wajib diisi').optional(),
  email: z.string().email('Format email tidak valid').optional(),
});

const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Password lama wajib diisi'),
  newPassword: passwordSchema,
});

export const AuthController = {
  login: async (req: Request, res: Response): Promise<void> => {
    const rawBody = req.body as Record<string, unknown>;
    const identifier = (
      rawBody.identifier ||
      rawBody.phoneNumber ||
      rawBody.email ||
      rawBody.username
    ) as string | undefined;

    const parsed = loginSchema.parse({
      identifier: identifier?.trim() || '',
      password: typeof rawBody.password === 'string' ? rawBody.password : '',
    });

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { phoneNumber: parsed.identifier },
          { email: parsed.identifier },
        ],
      },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedError('Nomor HP/email atau password salah');
    }

    if (user.status === 'SUSPENDED') {
      throw new UnauthorizedError(
        'Akun Anda sedang ditangguhkan. Silakan hubungi admin.',
      );
    }

    if (user.status === 'INACTIVE') {
      throw new UnauthorizedError('Akun Anda tidak aktif.');
    }

    const isMatch = await bcrypt.compare(parsed.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedError('Nomor HP/email atau password salah');
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const token = signToken({
      userId: user.id,
      phoneNumber: user.phoneNumber,
      email: user.email,
      role: user.role,
      status: user.status,
    });

    const mustSetupProfile = user.mustChangePassword || !user.profileCompleted;
    const nextStep = mustSetupProfile ? 'complete_profile' : 'dashboard';

    ApiResponse.success(
      res,
      {
        token,
        user: {
          id: user.id,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          role: user.role,
          status: user.status,
          profileCompleted: user.profileCompleted,
          mustChangePassword: user.mustChangePassword,
        },
        mustChangePassword: user.mustChangePassword,
        profileCompleted: user.profileCompleted,
        nextStep,
      },
      mustSetupProfile
        ? 'Login berhasil. Silakan lengkapi data dan ubah password awal Anda.'
        : 'Login berhasil. Selamat datang kembali.',
    );
  },

  completeOnboarding: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = onboardingSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user || !user.passwordHash) {
      throw new NotFoundError('Pengguna tidak ditemukan');
    }

    const isCurrentMatch = await bcrypt.compare(
      parsed.currentPassword,
      user.passwordHash,
    );

    if (!isCurrentMatch) {
      throw new BadRequestError('Password lama/default tidak cocok');
    }

    if (parsed.email && parsed.email !== user.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: parsed.email },
      });
      if (emailExists && emailExists.id !== user.id) {
        throw new ConflictError('Email sudah digunakan oleh akun lain');
      }
    }

    const newPasswordHash = await bcrypt.hash(parsed.newPassword, 12);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: newPasswordHash,
        fullName: parsed.fullName ?? user.fullName,
        email: parsed.email ?? user.email,
        mustChangePassword: false,
        profileCompleted: true,
        status: user.status === 'INVITED' ? 'ACTIVE' : user.status,
        activatedAt: user.activatedAt ?? new Date(),
      },
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

    const refreshedToken = signToken({
      userId: updatedUser.id,
      phoneNumber: updatedUser.phoneNumber,
      email: updatedUser.email,
      role: updatedUser.role,
      status: updatedUser.status,
    });

    ApiResponse.success(
      res,
      {
        token: refreshedToken,
        user: updatedUser,
        nextStep: 'dashboard',
      },
      'Profil berhasil diperbarui dan password berhasil diganti.',
    );
  },

  changePassword: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = changePasswordSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user || !user.passwordHash) {
      throw new NotFoundError('Pengguna tidak ditemukan');
    }

    const isOldMatch = await bcrypt.compare(
      parsed.oldPassword,
      user.passwordHash,
    );

    if (!isOldMatch) {
      throw new BadRequestError('Password lama tidak sesuai');
    }

    const newHash = await bcrypt.hash(parsed.newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: newHash,
        mustChangePassword: false,
      },
    });

    ApiResponse.success(res, null, 'Password berhasil diubah.');
  },

  getMe: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
        activatedAt: true,
        lastLoginAt: true,
        createdAt: true,
        _count: {
          select: {
            devices: true,
            createdUsers: true,
            createdDevices: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundError('Pengguna tidak ditemukan');
    }

    ApiResponse.success(res, user);
  },

  updateProfile: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const updateProfileSchema = z.object({
      fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter').optional(),
      email: z.string().email('Format email tidak valid').optional(),
    });

    const parsed = updateProfileSchema.parse(req.body);

    if (parsed.email && parsed.email !== req.user.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: parsed.email },
      });
      if (emailExists && emailExists.id !== req.user.id) {
        throw new ConflictError('Email sudah terdaftar pada akun lain');
      }
    }

    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(parsed.fullName !== undefined && { fullName: parsed.fullName }),
        ...(parsed.email !== undefined && { email: parsed.email }),
      },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        profileCompleted: true,
      },
    });

    ApiResponse.success(res, updated, 'Profil berhasil diperbarui');
  },
};
