import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import {
  BadRequestError,
  NotFoundError,
} from '../../utils/errors';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const createCycleSchema = z.object({
  name: z.string().optional(),
  mushroomType: z.string().default('Jamur Tiram'),
  strain: z.string().optional(),
  baglogCount: z.number().int().positive().optional(),
  startedAt: z.coerce.date().default(() => new Date()),
  expectedEndedAt: z.coerce.date().optional(),
  notes: z.string().optional(),
});

const updateCycleSchema = z.object({
  name: z.string().optional(),
  mushroomType: z.string().optional(),
  strain: z.string().optional(),
  baglogCount: z.number().int().positive().optional(),
  expectedEndedAt: z.coerce.date().optional(),
  status: z.enum(['active', 'completed', 'cancelled']).optional(),
  notes: z.string().optional(),
});

const completeCycleSchema = z.object({
  endedAt: z.coerce.date().default(() => new Date()),
  notes: z.string().optional(),
});

const createHarvestSchema = z.object({
  harvestedAt: z.coerce.date().default(() => new Date()),
  weightKg: z.number().positive('Bobot panen (kg) harus lebih besar dari 0'),
  pricePerKg: z.number().min(0).optional(),
  grade: z.string().optional(),
  notes: z.string().optional(),
});

const updateHarvestSchema = z.object({
  harvestedAt: z.coerce.date().optional(),
  weightKg: z.number().positive().optional(),
  pricePerKg: z.number().min(0).optional(),
  grade: z.string().optional(),
  notes: z.string().optional(),
});

async function findDevice(deviceId: string) {
  const device = await prisma.device.findFirst({
    where: {
      OR: [{ id: deviceId }, { serialNumber: deviceId }],
    },
  });

  if (!device) {
    throw new NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
  }

  return device;
}

export const CycleController = {
  // ==========================================
  // CULTIVATION CYCLES
  // ==========================================

  listCycles: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const status = req.query.status as string | undefined;
    const limit = Math.min(
      parseInt((req.query.limit as string) || '50', 10),
      100,
    );
    const offset = parseInt((req.query.offset as string) || '0', 10);

    const where: any = {
      deviceId: device.id,
      ...(status && { status }),
    };

    const [total, cycles] = await Promise.all([
      prisma.cultivationCycle.count({ where }),
      prisma.cultivationCycle.findMany({
        where,
        orderBy: { startedAt: 'desc' },
        take: limit,
        skip: offset,
        include: {
          _count: {
            select: { harvests: true },
          },
        },
      }),
    ]);

    ApiResponse.success(
      res,
      { total, offset, limit, records: cycles },
      'Daftar siklus budidaya berhasil dimuat',
    );
  },

  createCycle: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);
    const parsed = createCycleSchema.parse(req.body);

    if (parsed.expectedEndedAt && parsed.expectedEndedAt < parsed.startedAt) {
      throw new BadRequestError(
        'Tanggal perkiraan selesai (expectedEndedAt) harus setelah tanggal mulai',
      );
    }

    const cycle = await prisma.cultivationCycle.create({
      data: {
        deviceId: device.id,
        name: parsed.name ?? `Siklus ${parsed.mushroomType} - ${new Date().toLocaleDateString('id-ID')}`,
        mushroomType: parsed.mushroomType,
        strain: parsed.strain ?? null,
        baglogCount: parsed.baglogCount ?? null,
        startedAt: parsed.startedAt,
        expectedEndedAt: parsed.expectedEndedAt ?? null,
        notes: parsed.notes ?? null,
        status: 'active',
      },
    });

    ApiResponse.success(res, cycle, 'Siklus budidaya berhasil dibuat', 201);
  },

  getCycle: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);

    const cycle = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
      include: {
        harvests: {
          orderBy: { harvestedAt: 'desc' },
        },
      },
    });

    if (!cycle) {
      throw new NotFoundError(
        `Siklus "${cycleId}" tidak ditemukan untuk perangkat "${deviceId}"`,
      );
    }

    ApiResponse.success(res, cycle);
  },

  updateCycle: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);
    const parsed = updateCycleSchema.parse(req.body);

    const existing = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
    });

    if (!existing) {
      throw new NotFoundError('Siklus budidaya tidak ditemukan');
    }

    const updated = await prisma.cultivationCycle.update({
      where: { id: cycleId },
      data: {
        ...(parsed.name !== undefined && { name: parsed.name }),
        ...(parsed.mushroomType !== undefined && {
          mushroomType: parsed.mushroomType,
        }),
        ...(parsed.strain !== undefined && { strain: parsed.strain }),
        ...(parsed.baglogCount !== undefined && {
          baglogCount: parsed.baglogCount,
        }),
        ...(parsed.expectedEndedAt !== undefined && {
          expectedEndedAt: parsed.expectedEndedAt,
        }),
        ...(parsed.status !== undefined && { status: parsed.status }),
        ...(parsed.notes !== undefined && { notes: parsed.notes }),
      },
    });

    ApiResponse.success(res, updated, 'Siklus budidaya berhasil diperbarui');
  },

  completeCycle: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);
    const parsed = completeCycleSchema.parse(req.body);

    const existing = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
    });

    if (!existing) {
      throw new NotFoundError('Siklus budidaya tidak ditemukan');
    }

    const updated = await prisma.cultivationCycle.update({
      where: { id: cycleId },
      data: {
        status: 'completed',
        endedAt: parsed.endedAt,
        ...(parsed.notes && {
          notes: existing.notes
            ? `${existing.notes}\n[Selesai]: ${parsed.notes}`
            : parsed.notes,
        }),
      },
    });

    ApiResponse.success(
      res,
      updated,
      'Siklus budidaya berhasil ditandai selesai',
    );
  },

  deleteCycle: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);

    const existing = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
    });

    if (!existing) {
      throw new NotFoundError('Siklus budidaya tidak ditemukan');
    }

    await prisma.cultivationCycle.delete({
      where: { id: cycleId },
    });

    ApiResponse.success(res, null, 'Siklus budidaya berhasil dihapus');
  },

  // ==========================================
  // HARVEST ANALYTICS & SUMMARY
  // ==========================================

  getCycleSummary: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);

    const cycle = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
      include: {
        harvests: {
          orderBy: { harvestedAt: 'asc' },
        },
      },
    });

    if (!cycle) {
      throw new NotFoundError('Siklus tidak ditemukan');
    }

    const endDate = cycle.endedAt ?? new Date();
    const daysRunning = Math.max(
      1,
      Math.ceil((endDate.getTime() - cycle.startedAt.getTime()) / MS_PER_DAY),
    );

    const harvests = cycle.harvests;
    const dailyMap = new Map<string, number>();

    let totalWeight = 0;
    let totalRevenue = 0;

    for (const h of harvests) {
      const w = Number(h.weightKg);
      totalWeight += w;

      if (h.pricePerKg) {
        totalRevenue += w * Number(h.pricePerKg);
      }

      const dayStr = new Date(h.harvestedAt).toISOString().split('T')[0];
      dailyMap.set(dayStr, (dailyMap.get(dayStr) || 0) + w);
    }

    let peakDay: { date: string; weightKg: number } | null = null;
    for (const [day, weight] of dailyMap.entries()) {
      if (!peakDay || weight > peakDay.weightKg) {
        peakDay = { date: day, weightKg: +weight.toFixed(2) };
      }
    }

    const harvestDaysCount = dailyMap.size;
    const avgDailyWeightKg = +(totalWeight / daysRunning).toFixed(3);
    const avgHarvestWeightKg =
      harvests.length > 0 ? +(totalWeight / harvests.length).toFixed(3) : 0;
    const avgHarvestDayWeightKg =
      harvestDaysCount > 0 ? +(totalWeight / harvestDaysCount).toFixed(3) : 0;
    const baglogProductivity =
      cycle.baglogCount && cycle.baglogCount > 0
        ? +(totalWeight / cycle.baglogCount).toFixed(3)
        : null;

    const firstHarvest = harvests.length > 0 ? harvests[0] : null;
    const latestHarvest =
      harvests.length > 0 ? harvests[harvests.length - 1] : null;

    ApiResponse.success(res, {
      cycle: {
        id: cycle.id,
        deviceId: device.serialNumber,
        name: cycle.name,
        mushroomType: cycle.mushroomType,
        strain: cycle.strain,
        baglogCount: cycle.baglogCount,
        startedAt: cycle.startedAt,
        endedAt: cycle.endedAt,
        status: cycle.status,
        _count: {
          harvests: harvests.length,
        },
      },
      summary: {
        totalHarvests: harvests.length,
        totalWeightKg: +totalWeight.toFixed(2),
        totalRevenue: Math.round(totalRevenue),
        cycleAgeDays: daysRunning,
        harvestDays: harvestDaysCount,
        averageWeightPerHarvestKg: avgHarvestWeightKg,
        averageWeightPerCycleDayKg: avgDailyWeightKg,
        averageWeightPerHarvestDayKg: avgHarvestDayWeightKg,
        yieldPerBaglogKg: baglogProductivity,
        firstHarvestAt: firstHarvest?.harvestedAt ?? null,
        latestHarvestAt: latestHarvest?.harvestedAt ?? null,
        peakHarvestDay: peakDay,
      },
      // Backward-compatible flat aliases
      cycleId: cycle.id,
      name: cycle.name,
      mushroomType: cycle.mushroomType,
      status: cycle.status,
      startedAt: cycle.startedAt,
      endedAt: cycle.endedAt,
      daysRunning,
      baglogCount: cycle.baglogCount,
      totalHarvests: harvests.length,
      totalWeightKg: +totalWeight.toFixed(2),
      avgDailyWeightKg,
      totalRevenue: Math.round(totalRevenue),
      baglogProductivityKg: baglogProductivity,
    });
  },

  // ==========================================
  // HARVEST RECORDS
  // ==========================================

  listHarvests: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);

    const cycle = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
    });

    if (!cycle) {
      throw new NotFoundError('Siklus tidak ditemukan');
    }

    const harvests = await prisma.harvestRecord.findMany({
      where: { cycleId },
      orderBy: { harvestedAt: 'desc' },
    });

    ApiResponse.success(
      res,
      harvests.map((h) => ({
        ...h,
        weightKg: Number(h.weightKg),
        pricePerKg: h.pricePerKg ? Number(h.pricePerKg) : null,
      })),
    );
  },

  addHarvest: async (req: Request, res: Response): Promise<void> => {
    const { deviceId, cycleId } = req.params;
    const device = await findDevice(deviceId);
    const parsed = createHarvestSchema.parse(req.body);

    const cycle = await prisma.cultivationCycle.findFirst({
      where: { id: cycleId, deviceId: device.id },
    });

    if (!cycle) {
      throw new NotFoundError('Siklus tidak ditemukan');
    }

    const harvest = await prisma.harvestRecord.create({
      data: {
        cycleId,
        harvestedAt: parsed.harvestedAt,
        weightKg: parsed.weightKg,
        pricePerKg: parsed.pricePerKg ?? null,
        grade: parsed.grade ?? null,
        notes: parsed.notes ?? null,
      },
    });

    ApiResponse.success(
      res,
      {
        ...harvest,
        weightKg: Number(harvest.weightKg),
        pricePerKg: harvest.pricePerKg ? Number(harvest.pricePerKg) : null,
      },
      'Catatan panen berhasil ditambahkan',
      201,
    );
  },

  updateHarvest: async (req: Request, res: Response): Promise<void> => {
    const { cycleId, harvestId } = req.params;
    const parsed = updateHarvestSchema.parse(req.body);

    const existing = await prisma.harvestRecord.findFirst({
      where: { id: harvestId, cycleId },
    });

    if (!existing) {
      throw new NotFoundError('Catatan panen tidak ditemukan');
    }

    const updated = await prisma.harvestRecord.update({
      where: { id: harvestId },
      data: {
        ...(parsed.harvestedAt !== undefined && {
          harvestedAt: parsed.harvestedAt,
        }),
        ...(parsed.weightKg !== undefined && { weightKg: parsed.weightKg }),
        ...(parsed.pricePerKg !== undefined && {
          pricePerKg: parsed.pricePerKg,
        }),
        ...(parsed.grade !== undefined && { grade: parsed.grade }),
        ...(parsed.notes !== undefined && { notes: parsed.notes }),
      },
    });

    ApiResponse.success(
      res,
      {
        ...updated,
        weightKg: Number(updated.weightKg),
        pricePerKg: updated.pricePerKg ? Number(updated.pricePerKg) : null,
      },
      'Catatan panen berhasil diperbarui',
    );
  },

  deleteHarvest: async (req: Request, res: Response): Promise<void> => {
    const { cycleId, harvestId } = req.params;

    const existing = await prisma.harvestRecord.findFirst({
      where: { id: harvestId, cycleId },
    });

    if (!existing) {
      throw new NotFoundError('Catatan panen tidak ditemukan');
    }

    await prisma.harvestRecord.delete({
      where: { id: harvestId },
    });

    ApiResponse.success(res, null, 'Catatan panen berhasil dihapus');
  },
};
