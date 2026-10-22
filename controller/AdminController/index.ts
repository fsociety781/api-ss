import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { mqttService } from '../../services/mqtt.service';
import { ApiResponse } from '../../utils/api-response';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../utils/errors';
import { DeviceStatus, UserStatus } from '../../src/generated/prisma/client';

const createFarmerSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap petani minimal 2 karakter').optional().or(z.literal('')),
  phoneNumber: z.string().min(8, 'Nomor HP tidak valid'),
  email: z
    .string()
    .email('Format email tidak valid')
    .optional()
    .nullable()
    .or(z.literal('')),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter').optional(),
  defaultPassword: z.string().min(6).optional(),
  status: z
    .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] as const)
    .optional(),
  farmName: z.string().optional().nullable().or(z.literal('')),
  farmAddress: z.string().optional().nullable().or(z.literal('')),
});

const updateFarmerSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap tidak valid').optional(),
  phoneNumber: z.string().min(8, 'Nomor HP tidak valid').optional(),
  email: z
    .string()
    .email('Format email tidak valid')
    .optional()
    .nullable()
    .or(z.literal('')),
  status: z
    .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] as const)
    .optional(),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter').optional(),
  farmName: z.string().optional().nullable().or(z.literal('')),
  farmAddress: z.string().optional().nullable().or(z.literal('')),
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
    const phoneNumber = parsed.phoneNumber.trim();
    const cleanEmail = parsed.email?.trim() ? parsed.email.trim() : null;
    const rawPassword = parsed.password || parsed.defaultPassword || 'PasswordDefault123!';

    const existingPhone = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (existingPhone) {
      throw new ConflictError('Nomor HP sudah terdaftar pada akun lain');
    }

    if (cleanEmail) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: cleanEmail },
      });
      if (existingEmail) {
        throw new ConflictError('Email sudah terdaftar pada akun lain');
      }
    }

    const passwordHash = await bcrypt.hash(rawPassword, 12);
    const initialStatus = (parsed.status as UserStatus) || 'INVITED';

    const newFarmer = await prisma.user.create({
      data: {
        fullName: parsed.fullName?.trim() || 'Petani Mitra',
        phoneNumber,
        email: cleanEmail,
        passwordHash,
        role: 'FARMER',
        status: initialStatus,
        profileCompleted: false,
        mustChangePassword: true,
        farmName: parsed.farmName?.trim() || null,
        farmAddress: parsed.farmAddress?.trim() || null,
        createdById: req.user.id,
        activatedAt: null,
      },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        role: true,
        status: true,
        farmName: true,
        farmAddress: true,
        mustChangePassword: true,
        profileCompleted: true,
        createdAt: true,
      },
    });

    ApiResponse.success(
      res,
      {
        ...newFarmer,
        temporaryPassword: rawPassword,
      },
      'Akun Petani berhasil didaftarkan.',
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
        farmName: true,
        farmAddress: true,
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
        farmName: true,
        farmAddress: true,
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

    const cleanEmail =
      parsed.email !== undefined
        ? parsed.email?.trim()
          ? parsed.email.trim()
          : null
        : undefined;

    if (cleanEmail && cleanEmail !== farmer.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: cleanEmail },
      });
      if (emailExists) {
        throw new ConflictError('Email sudah terdaftar pada akun lain');
      }
    }

    if (parsed.phoneNumber && parsed.phoneNumber.trim() !== farmer.phoneNumber) {
      const phoneExists = await prisma.user.findUnique({
        where: { phoneNumber: parsed.phoneNumber.trim() },
      });
      if (phoneExists) {
        throw new ConflictError('Nomor HP sudah terdaftar pada akun lain');
      }
    }

    let passwordHash: string | undefined;
    if (parsed.password && parsed.password.trim().length >= 6) {
      passwordHash = await bcrypt.hash(parsed.password.trim(), 12);
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        ...(parsed.fullName !== undefined && { fullName: parsed.fullName.trim() }),
        ...(parsed.phoneNumber !== undefined && { phoneNumber: parsed.phoneNumber.trim() }),
        ...(cleanEmail !== undefined && { email: cleanEmail }),
        ...(parsed.status !== undefined && { status: parsed.status as UserStatus }),
        ...(parsed.farmName !== undefined && { farmName: parsed.farmName?.trim() ? parsed.farmName.trim() : null }),
        ...(parsed.farmAddress !== undefined && { farmAddress: parsed.farmAddress?.trim() ? parsed.farmAddress.trim() : null }),
        ...(passwordHash !== undefined && { passwordHash }),
      },
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
        email: true,
        status: true,
        farmName: true,
        farmAddress: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    ApiResponse.success(res, updated, 'Data petani berhasil diperbarui');
  },

  deleteFarmer: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const farmer = await prisma.user.findFirst({
      where: { id, role: 'FARMER' },
    });

    if (!farmer) {
      throw new NotFoundError('Data petani tidak ditemukan');
    }

    // 1. Ambil daftar perangkat milik petani ini sebelum dilepas tautannya
    const farmerDevices = await prisma.device.findMany({
      where: { farmerId: id },
      select: { serialNumber: true },
    });

    // Lepaskan tautan seluruh perangkat milik petani ini kembali ke status READY
    await prisma.device.updateMany({
      where: { farmerId: id },
      data: {
        farmerId: null,
        status: DeviceStatus.READY,
      },
    });

    // Kirim sinyal nonaktif ke setiap fisik perangkat via MQTT
    for (const d of farmerDevices) {
      mqttService.publishActivationStatus(
        d.serialNumber,
        false,
        '',
        'Akun petani pemilik dihapus',
      );
    }

    // 2. Hapus jadwal yang dibuat oleh petani ini jika ada
    await prisma.schedule.deleteMany({
      where: { createdById: id },
    });

    // 3. Hapus akun pengguna petani
    await prisma.user.delete({
      where: { id },
    });

    ApiResponse.success(
      res,
      null,
      `Akun petani ${farmer.fullName || farmer.phoneNumber} berhasil dihapus beserta pelepasan unit perangkatnya`,
    );
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

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: parsed.deviceId }, { serialNumber: parsed.deviceId }],
      },
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
      where: { id: device.id },
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

    // Kirim sinyal aktivasi langsung ke fisik perangkat via MQTT
    mqttService.publishActivationStatus(
      device.serialNumber,
      true,
      farmer.fullName || farmer.phoneNumber || 'Petani',
      `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`,
    );

    ApiResponse.success(
      res,
      updatedDevice,
      `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`,
    );
  },

  unassignDevice: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
      },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    const updated = await prisma.device.update({
      where: { id: device.id },
      data: {
        farmerId: null,
        status: DeviceStatus.READY,
      },
    });

    // Kirim sinyal pelepasan aktivasi ke fisik perangkat via MQTT
    mqttService.publishActivationStatus(
      device.serialNumber,
      false,
      '',
      `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`,
    );

    ApiResponse.success(
      res,
      updated,
      `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`,
    );
  },
};
