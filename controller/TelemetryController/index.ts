import { Request, Response } from 'express';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import { NotFoundError } from '../../utils/errors';

async function findDevice(deviceId: string) {
  const device = await prisma.device.findFirst({
    where: {
      OR: [{ id: deviceId }, { serialNumber: deviceId }],
    },
    include: {
      setting: true,
      actuators: true,
    },
  });

  if (!device) {
    throw new NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
  }

  return device;
}

export const TelemetryController = {
  /**
   * GET /api/v1/devices/:deviceId/telemetry/sensor
   * Pagination support: limit, offset, from, to
   */
  querySensor: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const limit = Math.min(
      parseInt((req.query.limit as string) || '50', 10),
      500,
    );
    const offset = parseInt((req.query.offset as string) || '0', 10);
    const fromStr = req.query.from as string | undefined;
    const toStr = req.query.to as string | undefined;

    const where: Record<string, unknown> = { deviceId: device.id };

    if (fromStr || toStr) {
      const dateFilter: Record<string, Date> = {};
      if (fromStr) dateFilter.gte = new Date(fromStr);
      if (toStr) dateFilter.lte = new Date(toStr);
      where.recordedAt = dateFilter;
    }

    const [total, readings] = await Promise.all([
      prisma.sensorReading.count({ where }),
      prisma.sensorReading.findMany({
        where,
        orderBy: { recordedAt: 'desc' },
        take: limit,
        skip: offset,
      }),
    ]);

    const records = readings.map((r) => ({
      id: r.id.toString(),
      deviceId: device.serialNumber,
      temperature: Number(r.temperature),
      humidity: Number(r.humidity),
      recordedAt: r.recordedAt.toISOString(),
      createdAt: r.recordedAt.toISOString(),
    }));

    ApiResponse.success(
      res,
      { total, offset, limit, records },
      'Data telemetri sensor berhasil dimuat',
    );
  },

  /**
   * GET /api/v1/devices/:deviceId/telemetry/sensor/latest
   */
  getLatestSensor: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const reading = await prisma.sensorReading.findFirst({
      where: { deviceId: device.id },
      orderBy: { recordedAt: 'desc' },
    });

    if (!reading) {
      ApiResponse.success(res, null, 'Belum ada data sensor');
      return;
    }

    ApiResponse.success(res, {
      id: reading.id.toString(),
      deviceId: device.serialNumber,
      temperature: Number(reading.temperature),
      humidity: Number(reading.humidity),
      recordedAt: reading.recordedAt.toISOString(),
      createdAt: reading.recordedAt.toISOString(),
    });
  },

  /**
   * GET /api/v1/devices/:deviceId/telemetry/history
   */
  queryHistory: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const limit = Math.min(
      parseInt((req.query.limit as string) || '50', 10),
      100,
    );
    const offset = parseInt((req.query.offset as string) || '0', 10);

    const [total, readings] = await Promise.all([
      prisma.sensorReading.count({ where: { deviceId: device.id } }),
      prisma.sensorReading.findMany({
        where: { deviceId: device.id },
        orderBy: { recordedAt: 'desc' },
        take: limit,
        skip: offset,
      }),
    ]);

    const pumpActuator = device.actuators.find(
      (a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'),
    );
    const fanActuator = device.actuators.find(
      (a) =>
        a.type === 'MISTING' ||
        a.type === 'FLOOR_WATERING' ||
        a.name.toLowerCase().includes('fan'),
    );

    const records = readings.map((r) => ({
      id: r.id.toString(),
      deviceId: device.serialNumber,
      temperature: Number(r.temperature),
      humidity: Number(r.humidity),
      mode: device.controlMode,
      pumpStatus: pumpActuator ? pumpActuator.state : 'OFF',
      floorPumpStatus: fanActuator ? fanActuator.state : 'OFF',
      recordedAt: r.recordedAt.toISOString(),
      createdAt: r.recordedAt.toISOString(),
    }));

    ApiResponse.success(res, { total, offset, limit, records });
  },

  /**
   * GET /api/v1/devices/:deviceId/telemetry/history/latest
   */
  getLatestHistory: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const reading = await prisma.sensorReading.findFirst({
      where: { deviceId: device.id },
      orderBy: { recordedAt: 'desc' },
    });

    const pumpActuator = device.actuators.find(
      (a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'),
    );
    const fanActuator = device.actuators.find(
      (a) =>
        a.type === 'MISTING' ||
        a.type === 'FLOOR_WATERING' ||
        a.name.toLowerCase().includes('fan'),
    );

    ApiResponse.success(res, {
      id: reading ? reading.id.toString() : null,
      deviceId: device.serialNumber,
      temperature: reading ? Number(reading.temperature) : null,
      humidity: reading ? Number(reading.humidity) : null,
      mode: device.controlMode,
      pumpStatus: pumpActuator ? pumpActuator.state : 'OFF',
      floorPumpStatus: fanActuator ? fanActuator.state : 'OFF',
      recordedAt: reading ? reading.recordedAt.toISOString() : null,
      createdAt: reading ? reading.recordedAt.toISOString() : null,
    });
  },
};
