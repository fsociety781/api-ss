import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../utils/errors';
import {
  ActuatorState,
  ActuatorType,
  DeviceStatus,
  OwnershipType,
} from '../../src/generated/prisma/client';

const activateDeviceSchema = z.object({
  deviceId: z.string().min(1, 'Device ID / Serial Number wajib diisi'),
  name: z.string().optional(),
  activationCode: z.string().optional(),
});

const createDeviceSchema = z.object({
  deviceId: z.string().optional(),
  serialNumber: z.string().optional(),
  name: z.string().optional(),
  hardwareVersion: z.string().default('1.0'),
  firmwareVersion: z.string().default('1.0.0'),
});

const telemetryIngestSchema = z.object({
  serialNumber: z.string().min(1, 'Serial number wajib diisi'),
  activationCode: z.string().min(1, 'Activation code wajib diisi'),
  temperature: z.coerce.number(),
  humidity: z.coerce.number(),
  actuatorStates: z
    .record(z.string(), z.enum(['ON', 'OFF', 'UNKNOWN']))
    .optional(),
});

function formatDevice(device: any) {
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  const isOnline = device.lastSeenAt
    ? new Date(device.lastSeenAt) >= tenMinutesAgo
    : false;

  const pumpActuator = device.actuators?.find(
    (a: any) => a.type === 'PUMP' || a.name?.toLowerCase().includes('pump'),
  );
  const fanActuator = device.actuators?.find(
    (a: any) =>
      a.type === 'MISTING' ||
      a.type === 'FLOOR_WATERING' ||
      a.name?.toLowerCase().includes('fan'),
  );

  return {
    id: device.id,
    deviceId: device.serialNumber,
    name: device.name ?? device.serialNumber,
    userId: device.farmerId,
    activatedAt: device.activatedAt,
    hardwareVersion: device.hardwareVersion ?? '1.0',
    firmwareVersion: device.firmwareVersion ?? '1.0.0',
    isOnline,
    signalStrength: isOnline ? 'Good' : 'Unknown',
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

    const where: any = {};
    if (userId && !isAdmin) {
      where.farmerId = userId;
    }

    const devices = await prisma.device.findMany({
      where,
      include: {
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
    const identifier = parsed.deviceId;

    let device = await prisma.device.findFirst({
      where: {
        OR: [
          { serialNumber: identifier },
          { id: identifier },
          ...(parsed.activationCode
            ? [{ activationCode: parsed.activationCode }]
            : []),
        ],
      },
      include: {
        setting: true,
        actuators: true,
      },
    });

    if (!device) {
      // Auto-provision if not found yet (matches api-shroomsync ensureDevice behavior)
      device = await prisma.$transaction(async (tx) => {
        const d = await tx.device.create({
          data: {
            serialNumber: identifier,
            activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
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
    }

    if (device && device.farmerId && device.farmerId !== req.user.id) {
      throw new ConflictError(
        'Perangkat ini sudah diaktivasi oleh akun petani lain. Hubungi admin.',
      );
    }

    const updated = await prisma.device.update({
      where: { id: device!.id },
      data: {
        farmerId: req.user.id,
        status: DeviceStatus.ACTIVE,
        name: parsed.name ?? device!.name,
        activatedAt: device!.activatedAt ?? new Date(),
      },
      include: {
        setting: true,
        actuators: true,
      },
    });

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

    const { deviceId } = req.params;
    const isAdmin =
      req.user.role === 'ADMIN' || req.user.role === 'TECHNICIAN';

    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceId }, { serialNumber: deviceId }],
        ...(isAdmin ? {} : { farmerId: req.user.id }),
      },
    });

    if (!device) {
      throw new NotFoundError(
        'Perangkat tidak ditemukan atau Anda tidak memiliki akses',
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

    ApiResponse.success(
      res,
      formatDevice(updated),
      'Perangkat berhasil dilepas dari akun Anda',
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
      `SS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const existing = await prisma.device.findUnique({
      where: { serialNumber: sn },
    });

    if (existing) {
      throw new ConflictError(`Device "${sn}" already exists`);
    }

    const device = await prisma.device.create({
      data: {
        serialNumber: sn,
        activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        name: parsed.name ?? `Kumbung ${sn}`,
        model: 'SS-ESP32-V1',
        hardwareVersion: parsed.hardwareVersion,
        firmwareVersion: parsed.firmwareVersion,
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

    ApiResponse.success(
      res,
      formatDevice(device),
      'Device created successfully',
      201,
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

    const nextStatus =
      device.status === DeviceStatus.OFFLINE && device.farmerId
        ? DeviceStatus.ACTIVE
        : device.status;

    await prisma.device.update({
      where: { id: device.id },
      data: {
        lastSeenAt: now,
        status: nextStatus,
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

    await prisma.device.update({
      where: { id: device.id },
      data: { lastSeenAt: new Date() },
    });

    ApiResponse.success(res, { online: true, serverTime: new Date() });
  },
};
