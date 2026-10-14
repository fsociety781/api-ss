import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../utils/errors';
import { DeviceStatus, UserStatus } from '../../src/generated/prisma/client';
import { passwordSchema } from '../../utils/validation';

const createFarmerSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap petani wajib diisi'),
  phoneNumber: z.string().min(8, 'Nomor HP tidak valid'),
  email: z.string().email('Format email tidak valid').optional(),
  defaultPassword: passwordSchema.default('PetaniJamur123!'),
});

const updateFarmerSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email('Format email tidak valid').optional(),
  status: z
    .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] as const)
    .optional(),
});

const assignDeviceSchema = z.object({
  deviceId: z.string().min(1, 'Device ID wajib diisi'),
  farmerId: z.string().min(1, 'Farmer ID wajib diisi'),
});

export const AdminController = {
  // ==========================================
  // ADMIN DASHBOARD
  // ==========================================

  getDashboard: async (_req: Request, res: Response): Promise<void> => {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const [
      totalFarmers,
      activeFarmers,
      invitedFarmers,
      totalDevices,
      activeDevices,
      readyDevices,
      offlineDevices,
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'FARMER' } }),
      prisma.user.count({ where: { role: 'FARMER', status: 'ACTIVE' } }),
      prisma.user.count({ where: { role: 'FARMER', status: 'INVITED' } }),
      prisma.device.count(),
      prisma.device.count({ where: { status: 'ACTIVE' } }),
      prisma.device.count({ where: { status: 'READY' } }),
      prisma.device.count({
        where: {
          status: 'ACTIVE',
          OR: [{ lastSeenAt: null }, { lastSeenAt: { lt: thirtyMinutesAgo } }],
        },
      }),
    ]);

    const recentFarmers = await prisma.user.findMany({
      where: { role: 'FARMER' },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
        createdAt: true,
        _count: { select: { devices: true } },
      },
    });

    ApiResponse.success(res, {
      farmers: {
        total: totalFarmers,
        active: activeFarmers,
        invited: invitedFarmers,
      },
      devices: {
        total: totalDevices,
        active: activeDevices,
        ready: readyDevices,
        offline: offlineDevices,
      },
      recentFarmers,
    });
  },

  // ==========================================
  // FARMER MANAGEMENT
  // ==========================================

  createFarmer: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = createFarmerSchema.parse(req.body);

    const existingPhone = await prisma.user.findUnique({
      where: { phoneNumber: parsed.phoneNumber },
    });
    if (existingPhone) {
      throw new ConflictError('Nomor HP sudah terdaftar pada akun lain');
    }

    if (parsed.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: parsed.email },
      });
      if (existingEmail) {
        throw new ConflictError('Email sudah terdaftar pada akun lain');
      }
    }

    const passwordHash = await bcrypt.hash(parsed.defaultPassword, 12);

    const newFarmer = await prisma.user.create({
      data: {
        fullName: parsed.fullName,
        phoneNumber: parsed.phoneNumber,
        email: parsed.email ?? null,
        passwordHash,
        role: 'FARMER',
        status: 'INVITED',
        profileCompleted: false,
        mustChangePassword: true,
        createdById: req.user.id,
      },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        mustChangePassword: true,
        profileCompleted: true,
        createdAt: true,
      },
    });

    ApiResponse.success(
      res,
      {
        farmer: newFarmer,
        temporaryPassword: parsed.defaultPassword,
      },
      'Akun Petani berhasil dibuat dengan status INVITED. Berikan password default ke petani.',
      201,
    );
  },

  listFarmers: async (_req: Request, res: Response): Promise<void> => {
    const farmers = await prisma.user.findMany({
      where: { role: 'FARMER' },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
        activatedAt: true,
        lastLoginAt: true,
        createdAt: true,
        devices: {
          select: {
            id: true,
            serialNumber: true,
            name: true,
            status: true,
            controlMode: true,
          },
        },
        _count: {
          select: {
            devices: true,
          },
        },
      },
    });

    ApiResponse.success(res, farmers);
  },

  getFarmerById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const farmer = await prisma.user.findFirst({
      where: { id, role: 'FARMER' },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
        activatedAt: true,
        lastLoginAt: true,
        createdAt: true,
        devices: {
          include: {
            setting: true,
            actuators: true,
          },
        },
      },
    });

    if (!farmer) {
      throw new NotFoundError('Data petani tidak ditemukan');
    }

    ApiResponse.success(res, farmer);
  },

  updateFarmer: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const parsed = updateFarmerSchema.parse(req.body);

    const farmer = await prisma.user.findFirst({
      where: { id, role: 'FARMER' },
    });

    if (!farmer) {
      throw new NotFoundError('Data petani tidak ditemukan');
    }

    if (parsed.email && parsed.email !== farmer.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: parsed.email },
      });
      if (emailExists) {
        throw new ConflictError('Email sudah terdaftar pada akun lain');
      }
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        fullName: parsed.fullName ?? farmer.fullName,
        email: parsed.email ?? farmer.email,
        status: (parsed.status as UserStatus) ?? farmer.status,
      },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
      },
    });

    ApiResponse.success(res, updated, 'Data petani berhasil diperbarui');
  },

  // ==========================================
  // DEVICE ASSIGNMENT
  // ==========================================

  listDevices: async (_req: Request, res: Response): Promise<void> => {
    const devices = await prisma.device.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        farmer: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
          },
        },
        setting: true,
        actuators: true,
      },
    });

    ApiResponse.success(res, devices);
  },

  assignDevice: async (req: Request, res: Response): Promise<void> => {
    const parsed = assignDeviceSchema.parse(req.body);

    const device = await prisma.device.findUnique({
      where: { id: parsed.deviceId },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    const farmer = await prisma.user.findFirst({
      where: { id: parsed.farmerId, role: 'FARMER' },
    });

    if (!farmer) {
      throw new NotFoundError('Petani tidak ditemukan');
    }

    const updatedDevice = await prisma.device.update({
      where: { id: parsed.deviceId },
      data: {
        farmerId: parsed.farmerId,
        status: DeviceStatus.ACTIVE,
        activatedAt: device.activatedAt ?? new Date(),
      },
      include: {
        farmer: {
          select: { id: true, fullName: true, phoneNumber: true },
        },
      },
    });

    ApiResponse.success(
      res,
      updatedDevice,
      `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`,
    );
  },

  unassignDevice: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;

    const device = await prisma.device.findUnique({
      where: { id: deviceId },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    const updated = await prisma.device.update({
      where: { id: deviceId },
      data: {
        farmerId: null,
        status: DeviceStatus.READY,
      },
    });

    ApiResponse.success(
      res,
      updated,
      `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`,
    );
  },
};
