import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../utils/errors';
import {
  ActuatorType,
  DeviceStatus,
  OwnershipType,
  UserStatus,
} from '../../src/generated/prisma/client';
import { passwordSchema } from '../../utils/validation';

const createDeviceSchema = z.object({
  serialNumber: z.string().min(3, 'Serial number minimal 3 karakter'),
  activationCode: z
    .string()
    .min(6, 'Kode aktivasi minimal 6 karakter')
    .optional(),
  name: z.string().optional(),
  model: z.string().min(1, 'Model perangkat wajib diisi').default('SS-ESP32-V1'),
  hardwareVersion: z.string().default('1.0'),
  firmwareVersion: z.string().default('1.0.0'),
  ownershipType: z
    .enum(['OWNED', 'RENTED', 'LEASED'] as const)
    .default('RENTED'),
});

const updateDeviceSchema = z.object({
  name: z.string().optional(),
  status: z
    .enum([
      'READY',
      'ACTIVE',
      'OFFLINE',
      'SUSPENDED',
      'MAINTENANCE',
    ] as const)
    .optional(),
  hardwareVersion: z.string().optional(),
  firmwareVersion: z.string().optional(),
  ownershipType: z.enum(['OWNED', 'RENTED', 'LEASED'] as const).optional(),
});

const createAdminSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap admin wajib diisi'),
  phoneNumber: z.string().min(8, 'Nomor HP tidak valid'),
  email: z.string().email('Format email tidak valid').optional(),
  defaultPassword: passwordSchema.default('AdminShroomSync123!'),
});

const updateAdminStatusSchema = z.object({
  status: z.enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] as const),
});

export const TechController = {
  // ==========================================
  // TECHNICIAN DASHBOARD & SYSTEM OVERVIEW
  // ==========================================

  getDashboard: async (_req: Request, res: Response): Promise<void> => {
    const [
      totalDevices,
      maintenanceDevices,
      totalAdmins,
      totalReadings,
      totalLogs,
      devices,
    ] = await Promise.all([
      prisma.device.count(),
      prisma.device.count({ where: { status: 'MAINTENANCE' } }),
      prisma.user.count({ where: { role: 'ADMIN' } }),
      prisma.sensorReading.count(),
      prisma.controlLog.count(),
      prisma.device.findMany({
        select: {
          model: true,
          firmwareVersion: true,
          hardwareVersion: true,
        },
      }),
    ]);

    const firmwareDist: Record<string, number> = {};
    const modelDist: Record<string, number> = {};

    for (const d of devices) {
      const fw = d.firmwareVersion ?? 'unknown';
      firmwareDist[fw] = (firmwareDist[fw] ?? 0) + 1;

      const model = d.model;
      modelDist[model] = (modelDist[model] ?? 0) + 1;
    }

    ApiResponse.success(res, {
      totalDevices,
      maintenanceDevices,
      totalAdmins,
      telemetryThroughput: {
        totalSensorReadings: totalReadings,
        totalControlLogs: totalLogs,
      },
      distribution: {
        byFirmware: firmwareDist,
        byModel: modelDist,
      },
    });
  },

  // ==========================================
  // DEVICE MANAGEMENT (TECHNICIAN)
  // ==========================================

  createDevice: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = createDeviceSchema.parse(req.body);

    const existingSerial = await prisma.device.findUnique({
      where: { serialNumber: parsed.serialNumber },
    });
    if (existingSerial) {
      throw new ConflictError(
        `Perangkat dengan serial number "${parsed.serialNumber}" sudah terdaftar`,
      );
    }

    const activationCode =
      parsed.activationCode ||
      `ACT-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    const existingCode = await prisma.device.findUnique({
      where: { activationCode },
    });
    if (existingCode) {
      throw new ConflictError('Kode aktivasi sudah digunakan, coba kode lain');
    }

    const newDevice = await prisma.$transaction(async (tx) => {
      const device = await tx.device.create({
        data: {
          serialNumber: parsed.serialNumber,
          activationCode,
          name: parsed.name ?? `Kumbung ${parsed.serialNumber}`,
          model: parsed.model,
          hardwareVersion: parsed.hardwareVersion,
          firmwareVersion: parsed.firmwareVersion,
          ownershipType: parsed.ownershipType as OwnershipType,
          status: DeviceStatus.READY,
          createdById: req.user!.id,
          setting: {
            create: {
              minTemperature: 24.0,
              maxTemperature: 28.0,
              minHumidity: 80.0,
              maxHumidity: 95.0,
              timerDurationSeconds: 300,
              telemetryIntervalSec: 60,
            },
          },
        },
        include: {
          setting: true,
        },
      });

      const defaultActuators = [
        {
          deviceId: device.id,
          name: 'Siram Lantai (Floor)',
          type: ActuatorType.FLOOR_WATERING,
          channel: 1,
        },
        {
          deviceId: device.id,
          name: 'Pengabutan (Misting)',
          type: ActuatorType.MISTING,
          channel: 2,
        },
        {
          deviceId: device.id,
          name: 'Pompa Utama (Pump)',
          type: ActuatorType.PUMP,
          channel: 3,
        },
        {
          deviceId: device.id,
          name: 'Lampu Kumbung',
          type: ActuatorType.LIGHT,
          channel: 4,
        },
      ];

      for (const act of defaultActuators) {
        await tx.actuator.create({ data: act });
      }

      return tx.device.findUnique({
        where: { id: device.id },
        include: {
          setting: true,
          actuators: true,
          createdBy: {
            select: { id: true, fullName: true, phoneNumber: true },
          },
        },
      });
    });

    ApiResponse.success(
      res,
      newDevice,
      'Perangkat baru berhasil didaftarkan dan diinisialisasi',
      201,
    );
  },

  listDevices: async (_req: Request, res: Response): Promise<void> => {
    const devices = await prisma.device.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        farmer: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
            email: true,
            status: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            fullName: true,
          },
        },
        setting: true,
        actuators: {
          orderBy: { channel: 'asc' },
        },
        _count: {
          select: {
            sensorReadings: true,
            controlLogs: true,
            schedules: true,
          },
        },
      },
    });

    ApiResponse.success(res, devices);
  },

  getDeviceById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id }, { serialNumber: id }],
      },
      include: {
        farmer: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            fullName: true,
          },
        },
        setting: true,
        actuators: {
          orderBy: { channel: 'asc' },
        },
        sensorReadings: {
          take: 10,
          orderBy: { recordedAt: 'desc' },
        },
        controlLogs: {
          take: 10,
          orderBy: { requestedAt: 'desc' },
        },
        schedules: true,
      },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    ApiResponse.success(res, device);
  },

  updateDevice: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const parsed = updateDeviceSchema.parse(req.body);

    const device = await prisma.device.findUnique({
      where: { id },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    const updated = await prisma.device.update({
      where: { id },
      data: {
        name: parsed.name ?? device.name,
        status: (parsed.status as DeviceStatus) ?? device.status,
        hardwareVersion: parsed.hardwareVersion ?? device.hardwareVersion,
        firmwareVersion: parsed.firmwareVersion ?? device.firmwareVersion,
        ownershipType:
          (parsed.ownershipType as OwnershipType) ?? device.ownershipType,
      },
      include: {
        setting: true,
        actuators: true,
      },
    });

    ApiResponse.success(res, updated, 'Data perangkat berhasil diperbarui');
  },

  deleteDevice: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const device = await prisma.device.findUnique({
      where: { id },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    await prisma.device.delete({
      where: { id },
    });

    ApiResponse.success(res, null, 'Perangkat berhasil dihapus');
  },

  // ==========================================
  // ADMIN MANAGEMENT (TECHNICIAN)
  // ==========================================

  createAdmin: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = createAdminSchema.parse(req.body);

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

    const newAdmin = await prisma.user.create({
      data: {
        fullName: parsed.fullName,
        phoneNumber: parsed.phoneNumber,
        email: parsed.email ?? null,
        passwordHash,
        role: 'ADMIN',
        status: 'ACTIVE',
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
        createdAt: true,
      },
    });

    ApiResponse.success(
      res,
      {
        admin: newAdmin,
        temporaryPassword: parsed.defaultPassword,
      },
      'Akun Admin berhasil dibuat. Berikan password sementara kepada Admin.',
      201,
    );
  },

  listAdmins: async (_req: Request, res: Response): Promise<void> => {
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
        profileCompleted: true,
        mustChangePassword: true,
        lastLoginAt: true,
        createdAt: true,
        _count: {
          select: {
            createdUsers: true,
            createdDevices: true,
          },
        },
      },
    });

    ApiResponse.success(res, admins);
  },

  updateAdminStatus: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const parsed = updateAdminStatusSchema.parse(req.body);

    const admin = await prisma.user.findFirst({
      where: { id, role: 'ADMIN' },
    });

    if (!admin) {
      throw new NotFoundError('Akun admin tidak ditemukan');
    }

    const updated = await prisma.user.update({
      where: { id },
      data: { status: parsed.status as UserStatus },
      select: {
        id: true,
        fullName: true,
        role: true,
        status: true,
      },
    });

    ApiResponse.success(res, updated, 'Status admin berhasil diperbarui');
  },
};
