import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { mqttService } from '../../services/mqtt.service';
import { ApiResponse } from '../../utils/api-response';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
} from '../../utils/errors';
import {
  Actuator,
  ActuatorState,
  ActuatorType,
  Device,
  DeviceSetting,
  DeviceStatus,
  OwnershipType,
  Prisma,
  SensorReading,
} from '../../src/generated/prisma/client';
import {
  buildDeviceIdentity,
  saveDeviceIdentityFile,
  getNextSerialNumber,
  parseSerialNumber,
} from '../../utils/device-identity';

const activateDeviceSchema = z.object({
  deviceId: z.string().min(1, 'Device ID / Serial Number wajib diisi'),
  name: z.string().optional(),
  activationCode: z.string().optional(),
  macAddress: z.string().optional(),
});

const createDeviceSchema = z.object({
  deviceId: z.string().optional(),
  serialNumber: z.string().optional(),
  name: z.string().optional(),
  hardwareVersion: z.string().default('1.0'),
  firmwareVersion: z.string().default('1.1.0'),
  macAddress: z.string().optional(),
});

const telemetryIngestSchema = z.object({
  serialNumber: z.string().min(1, 'Serial number wajib diisi'),
  activationCode: z.string().min(1, 'Activation code wajib diisi'),
  temperature: z.coerce.number(),
  humidity: z.coerce.number(),
  rssi: z.coerce.number().optional(),
  rssiDbm: z.coerce.number().optional(),
  rssi_dbm: z.coerce.number().optional(),
  uptime: z.coerce.number().optional(),
  uptimeMs: z.coerce.number().optional(),
  uptime_ms: z.coerce.number().optional(),
  actuatorStates: z
    .record(z.string(), z.enum(['ON', 'OFF', 'UNKNOWN']))
    .optional(),
});

type DevicePayload = Device & {
  farmer?: {
    id: string;
    fullName: string | null;
    phoneNumber: string;
    email: string | null;
  } | null;
  setting?: DeviceSetting | null;
  actuators?: Actuator[];
  sensorReadings?: SensorReading[];
};

function formatDevice(device: DevicePayload) {
  // Batas toleransi offline: 2 menit (120 detik) tanpa data
  const TWO_MINUTES_MS = 2 * 60 * 1000;
  const twoMinutesAgo = new Date(Date.now() - TWO_MINUTES_MS);
  const isOnline = Boolean(
    device.status !== 'SUSPENDED' &&
    device.lastSeenAt &&
    new Date(device.lastSeenAt) >= twoMinutesAgo
  );
  const computedStatus = !isOnline && (device.status === 'ACTIVE' || !device.status)
    ? 'OFFLINE'
    : device.status;

  const pumpActuator = device.actuators?.find(
    (a) => a.type === 'PUMP' || a.name?.toLowerCase().includes('pump'),
  );
  const fanActuator = device.actuators?.find(
    (a) =>
      a.type === 'MISTING' ||
      a.type === 'FLOOR_WATERING' ||
      a.name?.toLowerCase().includes('fan'),
  );

  return {
    id: device.id,
    deviceId: device.serialNumber,
    name: device.name ?? device.serialNumber,
    userId: device.farmerId,
    farmerId: device.farmerId,
    farmer: device.farmer ?? null,
    assignedFarmer: device.farmer?.fullName ?? null,
    ownerName: device.farmer?.fullName ?? null,
    farmerName: device.farmer?.fullName ?? null,
    status: computedStatus,
    activatedAt: device.activatedAt,
    hardwareVersion: device.hardwareVersion ?? '1.0',
    firmwareVersion: device.firmwareVersion ?? '1.0.0',
    isOnline,
    signalStrength: isOnline
      ? (device.rssiDbm != null ? (device.rssiDbm >= -70 ? 'Good' : 'Fair') : 'Good')
      : 'Offline',
    rssiDbm: device.rssiDbm != null ? device.rssiDbm : (isOnline ? -65 : null),
    uptimeMs: device.uptimeMs != null ? Number(device.uptimeMs) : (isOnline ? 3600000 : null),
    controlMode: device.controlMode,
    pumpStatus: pumpActuator ? pumpActuator.state : 'OFF',
    floorPumpStatus: fanActuator ? fanActuator.state : 'OFF',
    lastSeenAt: device.lastSeenAt,
    createdAt: device.createdAt,
    updatedAt: device.updatedAt,
    config: device.setting
      ? {
          controlMode:
            device.controlMode === 'MANUAL'
              ? 1
              : device.controlMode === 'AUTO'
                ? 2
                : 3,
          minS: Number(device.setting.minTemperature ?? 0),
          midS: Number(device.setting.maxTemperature ?? 0),
          minK: Number(device.setting.minHumidity ?? 0),
          midK: Number(device.setting.maxHumidity ?? 0),
          timerMinute: Math.floor(
            (device.setting.timerDurationSeconds ?? 0) / 60,
          ),
          timerSecond: (device.setting.timerDurationSeconds ?? 0) % 60,
          telemetryIntervalSec: device.setting.telemetryIntervalSec,
        }
      : null,
    actuators: device.actuators ?? [],
    latestReading: device.sensorReadings?.[0]
      ? {
          temperature: Number(device.sensorReadings[0].temperature),
          humidity: Number(device.sensorReadings[0].humidity),
          recordedAt: device.sensorReadings[0].recordedAt,
        }
      : null,
  };
}

export const DeviceController = {
  /**
   * GET /api/v1/devices
   */
  listDevices: async (req: Request, res: Response): Promise<void> => {
    const userId = req.user ? req.user.id : null;
    const isAdmin =
      req.user?.role === 'ADMIN' || req.user?.role === 'TECHNICIAN';

    const where: Prisma.DeviceWhereInput = {};
    if (userId && !isAdmin) {
      where.farmerId = userId;
    }

    const devices = await prisma.device.findMany({
      where,
      include: {
        farmer: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
            email: true,
          },
        },
        setting: true,
        actuators: { orderBy: { channel: 'asc' } },
        sensorReadings: {
          take: 1,
          orderBy: { recordedAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    ApiResponse.success(res, devices.map(formatDevice));
  },

  /**
   * POST /api/v1/devices/activate
   */
  activateDevice: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    const parsed = activateDeviceSchema.parse(req.body);
    const identifier = parsed.deviceId.trim();
    const cleanActivationCode = parsed.activationCode?.trim().toUpperCase();

    // 1. Cari perangkat berdasarkan serialNumber atau ID
    let device = await prisma.device.findFirst({
      where: {
        OR: [
          { serialNumber: identifier },
          { id: identifier },
        ],
      },
      include: {
        setting: true,
        actuators: true,
      },
    });

    // 2. Jika perangkat belum ada di DB: Auto-provision (gunakan activationCode yang diinput user atau generate baru)
    if (!device) {
      const activationCodeToUse =
        cleanActivationCode ||
        `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

      device = await prisma.$transaction(async (tx) => {
        const d = await tx.device.create({
          data: {
            serialNumber: identifier,
            activationCode: activationCodeToUse,
            name: parsed.name ?? `Kumbung ${identifier}`,
            model: 'SS-ESP32-V1',
            hardwareVersion: '1.0',
            firmwareVersion: '1.0.0',
            ownershipType: OwnershipType.OWNED,
            status: DeviceStatus.ACTIVE,
            farmerId: req.user!.id,
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
          include: { setting: true },
        });

        await tx.actuator.createMany({
          data: [
            {
              deviceId: d.id,
              name: 'Siram Lantai',
              type: ActuatorType.FLOOR_WATERING,
              channel: 1,
            },
            {
              deviceId: d.id,
              name: 'Pengabutan',
              type: ActuatorType.MISTING,
              channel: 2,
            },
            {
              deviceId: d.id,
              name: 'Pompa Utama',
              type: ActuatorType.PUMP,
              channel: 3,
            },
            {
              deviceId: d.id,
              name: 'Lampu Kumbung',
              type: ActuatorType.LIGHT,
              channel: 4,
            },
          ],
        });

        return tx.device.findUnique({
          where: { id: d.id },
          include: { setting: true, actuators: true },
        });
      });

      mqttService.publishActivationStatus(
        device!.serialNumber,
        true,
        req.user.fullName || req.user.phoneNumber || 'Petani',
        'Perangkat baru berhasil didaftarkan dan diaktivasi',
      );

      ApiResponse.success(
        res,
        formatDevice(device!),
        'Perangkat baru berhasil didaftarkan dan diaktivasi ke akun Anda',
        200,
      );
      return;
    }

    // 3. Jika perangkat sudah terdaftar: Cek kepemilikan
    if (device.farmerId && device.farmerId !== req.user.id) {
      throw new ConflictError(
        'Perangkat ini sudah diaktivasi oleh akun petani lain. Hubungi administrator.',
      );
    }

    // 4. Validasi Kode Aktivasi jika perangkat memiliki activationCode terdaftar
    if (device.activationCode) {
      if (!cleanActivationCode) {
        // Jika perangkat belum pernah diaktifkan (masih READY) dan mewajibkan kode aktivasi
        if (device.status === DeviceStatus.READY || !device.farmerId) {
          throw new BadRequestError(
            'Kode aktivasi wajib diisi untuk perangkat ini (silakan lihat pada stiker fisik alat).',
          );
        }
      } else if (cleanActivationCode !== device.activationCode.trim().toUpperCase()) {
        throw new BadRequestError(
          'Kode aktivasi tidak valid atau tidak cocok dengan stiker perangkat ini.',
        );
      }
    }

    // 5. Update data perangkat dan hubungkan ke petani
    const inputMac = (parsed.macAddress || req.body.mac_address || req.body.macAddress || '')?.trim() || null;

    const updated = await prisma.device.update({
      where: { id: device.id },
      data: {
        farmerId: req.user.id,
        status: DeviceStatus.ACTIVE,
        name: parsed.name ?? device.name,
        activatedAt: device.activatedAt ?? new Date(),
        ...(inputMac && (!device.macAddress || device.macAddress !== inputMac) ? { macAddress: inputMac } : {}),
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
        setting: true,
        actuators: true,
      },
    });

    mqttService.publishActivationStatus(
      updated.serialNumber,
      true,
      req.user.fullName || req.user.phoneNumber || 'Petani',
      'Perangkat berhasil diaktivasi dan ditautkan ke akun Anda',
    );

    ApiResponse.success(
      res,
      formatDevice(updated),
      'Perangkat berhasil diaktivasi dan ditautkan ke akun Anda',
      200,
    );
  },

  /**
   * POST /api/v1/devices/unpair/:deviceId
   */
  unpairDevice: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    // Hanya Admin atau Teknisi yang diizinkan melepas tautan (unpair) dari petani
    if (req.user.role !== 'ADMIN' && req.user.role !== 'TECHNICIAN') {
      throw new ForbiddenError(
        'Hanya Administrator yang memiliki wewenang untuk melepas tautan (unpair) perangkat dari petani',
      );
    }

    const { deviceId } = req.params;

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
      },
    });

    if (!device) {
      throw new NotFoundError(
        'Perangkat tidak ditemukan',
      );
    }

    const updated = await prisma.device.update({
      where: { id: device.id },
      data: {
        farmerId: null,
        status: DeviceStatus.READY,
      },
      include: { setting: true, actuators: true },
    });

    mqttService.publishActivationStatus(
      updated.serialNumber,
      false,
      '',
      'Perangkat berhasil dilepas dari penugasan petani',
    );

    ApiResponse.success(
      res,
      formatDevice(updated),
      'Perangkat berhasil dilepas dari penugasan petani',
    );
  },

  /**
   * GET /api/v1/devices/:deviceId
   */
  getDevice: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
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
        setting: true,
        actuators: true,
        sensorReadings: {
          take: 1,
          orderBy: { recordedAt: 'desc' },
        },
      },
    });

    if (!device) {
      throw new NotFoundError(`Device "${deviceId}" not found`);
    }

    // Ownership check if user is a farmer
    if (
      req.user &&
      req.user.role !== 'ADMIN' &&
      req.user.role !== 'TECHNICIAN' &&
      device.farmerId !== req.user.id
    ) {
      throw new ForbiddenError('Anda tidak memiliki akses ke perangkat ini');
    }

    ApiResponse.success(res, formatDevice(device));
  },

  /**
   * POST /api/v1/devices
   */
  createDevice: async (req: Request, res: Response): Promise<void> => {
    const parsed = createDeviceSchema.parse(req.body);
    const sn =
      parsed.serialNumber ||
      parsed.deviceId ||
      (await getNextSerialNumber());

    const existing = await prisma.device.findUnique({
      where: { serialNumber: sn },
    });

    if (existing) {
      throw new ConflictError(`Device "${sn}" already exists`);
    }

    const macAddress = parsed.macAddress?.trim() || null;

    const device = await prisma.device.create({
      data: {
        serialNumber: sn,
        activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        name: parsed.name ?? `Kumbung ${sn}`,
        model: 'SS-ESP32-V1',
        hardwareVersion: parsed.hardwareVersion,
        firmwareVersion: parsed.firmwareVersion,
        macAddress,
        status: DeviceStatus.READY,
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
      include: { setting: true, actuators: true },
    });

    // Generate identity JSON for firmware injection
    const deviceIdentity = buildDeviceIdentity({
      serialNumber: device.serialNumber,
      hardwareVersion: device.hardwareVersion,
      firmwareVersion: device.firmwareVersion,
      macAddress: device.macAddress,
      createdAt: device.createdAt,
    });
    saveDeviceIdentityFile(deviceIdentity);

    ApiResponse.success(
      res,
      {
        ...formatDevice(device),
        deviceIdentity,
        identityFile: `${device.serialNumber}.json`,
      },
      'Device created successfully',
      201,
    );
  },

  getDeviceIdentity: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
      },
    });

    if (!device) {
      throw new NotFoundError(`Device "${deviceId}" not found`);
    }

    const identity = buildDeviceIdentity({
      serialNumber: device.serialNumber,
      hardwareVersion: device.hardwareVersion,
      firmwareVersion: device.firmwareVersion,
      macAddress: device.macAddress,
      createdAt: device.createdAt,
    });

    saveDeviceIdentityFile(identity);

    const shouldDownload = req.query.download === 'true' || req.query.download === '1';
    if (shouldDownload) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${device.serialNumber}.json"`,
      );
      res.send(JSON.stringify(identity, null, 2));
      return;
    }

    ApiResponse.success(res, identity, 'Identitas perangkat berhasil dimuat');
  },

  getNextSerial: async (_req: Request, res: Response): Promise<void> => {
    const nextSerialNumber = await getNextSerialNumber();
    const info = parseSerialNumber(nextSerialNumber);
    ApiResponse.success(
      res,
      {
        nextSerialNumber,
        format: 'SS-MMYY-NNN',
        description: info?.description ?? 'Format serial number produksi bermakna',
        batch: info?.batch,
      },
      'Rekomendasi serial number berhasil dimuat',
    );
  },

  /**
   * DELETE /api/v1/devices/:deviceId
   */
  deleteDevice: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
      },
    });

    if (!device) {
      throw new NotFoundError('Device tidak ditemukan');
    }

    // Only Admin or Technician can delete devices
    if (
      req.user &&
      req.user.role !== 'ADMIN' &&
      req.user.role !== 'TECHNICIAN'
    ) {
      throw new ForbiddenError(
        'Hanya admin atau teknisi yang dapat menghapus perangkat',
      );
    }

    await prisma.device.delete({
      where: { id: device.id },
    });

    ApiResponse.success(res, null, 'Device deleted');
  },

  /**
   * ESP32 Telemetry Push
   */
  ingestTelemetry: async (req: Request, res: Response): Promise<void> => {
    const parsed = telemetryIngestSchema.parse(req.body);

    const device = await prisma.device.findFirst({
      where: {
        serialNumber: parsed.serialNumber,
        activationCode: parsed.activationCode,
      },
      include: {
        setting: true,
        actuators: true,
      },
    });

    if (!device) {
      throw new UnauthorizedError(
        'Perangkat tidak dikenali atau kredensial aktivasi salah',
      );
    }

    const now = new Date();

    const reading = await prisma.sensorReading.create({
      data: {
        deviceId: device.id,
        temperature: parsed.temperature,
        humidity: parsed.humidity,
        recordedAt: now,
      },
    });

    const rawRssi = parsed.rssi ?? parsed.rssiDbm ?? parsed.rssi_dbm;
    const rawUptime = parsed.uptime ?? parsed.uptimeMs ?? parsed.uptime_ms;
    const rssi = rawRssi != null && !isNaN(Number(rawRssi)) ? Math.round(Number(rawRssi)) : null;
    const uptime = rawUptime != null && !isNaN(Number(rawUptime)) ? BigInt(Math.round(Number(rawUptime))) : null;

    const nextStatus =
      (device.status === DeviceStatus.OFFLINE || device.status === DeviceStatus.READY) && device.farmerId
        ? DeviceStatus.ACTIVE
        : device.status;

    await prisma.device.update({
      where: { id: device.id },
      data: {
        lastSeenAt: now,
        status: nextStatus,
        ...(rssi != null ? { rssiDbm: rssi } : {}),
        ...(uptime != null ? { uptimeMs: uptime } : {}),
      },
    });

    if (parsed.actuatorStates) {
      for (const [chStr, stateVal] of Object.entries(parsed.actuatorStates)) {
        const channelNum = parseInt(chStr, 10);
        if (!isNaN(channelNum)) {
          await prisma.actuator.updateMany({
            where: {
              deviceId: device.id,
              channel: channelNum,
            },
            data: {
              state: stateVal as ActuatorState,
              lastChangedAt: now,
            },
          });
        }
      }
    }

    ApiResponse.success(
      res,
      {
        received: true,
        readingId: reading.id.toString(),
        controlMode: device.controlMode,
        setting: device.setting,
      },
      'Telemetri berhasil disimpan',
      201,
    );
  },

  /**
   * ESP32 Heartbeat
   */
  heartbeat: async (req: Request, res: Response): Promise<void> => {
    const { serialNumber, activationCode } = req.body;

    const device = await prisma.device.findFirst({
      where: {
        serialNumber,
        activationCode,
      },
    });

    if (!device) {
      throw new NotFoundError('Perangkat tidak ditemukan');
    }

    const now = new Date();
    const rawRssi = req.body.rssi ?? req.body.rssi_dbm ?? req.body.rssiDbm;
    const rawUptime = req.body.uptime ?? req.body.uptime_ms ?? req.body.uptimeMs;
    const rssi = rawRssi != null && !isNaN(Number(rawRssi)) ? Math.round(Number(rawRssi)) : null;
    const uptime = rawUptime != null && !isNaN(Number(rawUptime)) ? BigInt(Math.round(Number(rawUptime))) : null;

    const fw = req.body.firmwareVersion ?? req.body.firmware_version;
    const hw = req.body.hardwareVersion ?? req.body.hardware_version;
    const mac = (req.body.macAddress ?? req.body.mac_address)?.trim() || null;

    const nextStatus =
      (device.status === DeviceStatus.OFFLINE || device.status === DeviceStatus.READY) && device.farmerId
        ? DeviceStatus.ACTIVE
        : device.status;

    await prisma.device.update({
      where: { id: device.id },
      data: {
        lastSeenAt: now,
        status: nextStatus,
        ...(mac && (!device.macAddress || device.macAddress !== mac) ? { macAddress: mac } : {}),
        ...(rssi != null ? { rssiDbm: rssi } : {}),
        ...(uptime != null ? { uptimeMs: uptime } : {}),
        ...(fw ? { firmwareVersion: String(fw) } : {}),
        ...(hw ? { hardwareVersion: String(hw) } : {}),
      },
    });

    ApiResponse.success(res, { online: true, serverTime: now });
  },
};
