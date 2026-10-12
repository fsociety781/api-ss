"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleController = void 0;
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const createCycleSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    mushroomType: zod_1.z.string().default('Jamur Tiram'),
    strain: zod_1.z.string().optional(),
    baglogCount: zod_1.z.number().int().positive().optional(),
    startedAt: zod_1.z.coerce.date().default(() => new Date()),
    expectedEndedAt: zod_1.z.coerce.date().optional(),
    notes: zod_1.z.string().optional(),
});
const updateCycleSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    mushroomType: zod_1.z.string().optional(),
    strain: zod_1.z.string().optional(),
    baglogCount: zod_1.z.number().int().positive().optional(),
    expectedEndedAt: zod_1.z.coerce.date().optional(),
    status: zod_1.z.enum(['active', 'completed', 'cancelled']).optional(),
    notes: zod_1.z.string().optional(),
});
const completeCycleSchema = zod_1.z.object({
    endedAt: zod_1.z.coerce.date().default(() => new Date()),
    notes: zod_1.z.string().optional(),
});
const createHarvestSchema = zod_1.z.object({
    harvestedAt: zod_1.z.coerce.date().default(() => new Date()),
    weightKg: zod_1.z.number().positive('Bobot panen (kg) harus lebih besar dari 0'),
    pricePerKg: zod_1.z.number().min(0).optional(),
    grade: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
});
const updateHarvestSchema = zod_1.z.object({
    harvestedAt: zod_1.z.coerce.date().optional(),
    weightKg: zod_1.z.number().positive().optional(),
    pricePerKg: zod_1.z.number().min(0).optional(),
    grade: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
});
async function findDevice(deviceId) {
    const device = await prismaConfig_1.prisma.device.findFirst({
        where: {
            OR: [{ id: deviceId }, { serialNumber: deviceId }],
        },
    });
    if (!device) {
        throw new errors_1.NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
    }
    return device;
}
exports.CycleController = {
    // ==========================================
    // CULTIVATION CYCLES
    // ==========================================
    listCycles: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const status = req.query.status;
        const limit = Math.min(parseInt(req.query.limit || '50', 10), 100);
        const offset = parseInt(req.query.offset || '0', 10);
        const where = {
            deviceId: device.id,
            ...(status && { status }),
        };
        const [total, cycles] = await Promise.all([
            prismaConfig_1.prisma.cultivationCycle.count({ where }),
            prismaConfig_1.prisma.cultivationCycle.findMany({
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
        api_response_1.ApiResponse.success(res, { total, offset, limit, records: cycles }, 'Daftar siklus budidaya berhasil dimuat');
    },
    createCycle: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const parsed = createCycleSchema.parse(req.body);
        if (parsed.expectedEndedAt && parsed.expectedEndedAt < parsed.startedAt) {
            throw new errors_1.BadRequestError('Tanggal perkiraan selesai (expectedEndedAt) harus setelah tanggal mulai');
        }
        const cycle = await prismaConfig_1.prisma.cultivationCycle.create({
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
        api_response_1.ApiResponse.success(res, cycle, 'Siklus budidaya berhasil dibuat', 201);
    },
    getCycle: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const cycle = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
            include: {
                harvests: {
                    orderBy: { harvestedAt: 'desc' },
                },
            },
        });
        if (!cycle) {
            throw new errors_1.NotFoundError(`Siklus "${cycleId}" tidak ditemukan untuk perangkat "${deviceId}"`);
        }
        api_response_1.ApiResponse.success(res, cycle);
    },
    updateCycle: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const parsed = updateCycleSchema.parse(req.body);
        const existing = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
        });
        if (!existing) {
            throw new errors_1.NotFoundError('Siklus budidaya tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.cultivationCycle.update({
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
        api_response_1.ApiResponse.success(res, updated, 'Siklus budidaya berhasil diperbarui');
    },
    completeCycle: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const parsed = completeCycleSchema.parse(req.body);
        const existing = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
        });
        if (!existing) {
            throw new errors_1.NotFoundError('Siklus budidaya tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.cultivationCycle.update({
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
        api_response_1.ApiResponse.success(res, updated, 'Siklus budidaya berhasil ditandai selesai');
    },
    deleteCycle: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const existing = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
        });
        if (!existing) {
            throw new errors_1.NotFoundError('Siklus budidaya tidak ditemukan');
        }
        await prismaConfig_1.prisma.cultivationCycle.delete({
            where: { id: cycleId },
        });
        api_response_1.ApiResponse.success(res, null, 'Siklus budidaya berhasil dihapus');
    },
    // ==========================================
    // HARVEST ANALYTICS & SUMMARY
    // ==========================================
    getCycleSummary: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const cycle = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
            include: {
                harvests: {
                    orderBy: { harvestedAt: 'asc' },
                },
            },
        });
        if (!cycle) {
            throw new errors_1.NotFoundError('Siklus tidak ditemukan');
        }
        const endDate = cycle.endedAt ?? new Date();
        const daysRunning = Math.max(1, Math.ceil((endDate.getTime() - cycle.startedAt.getTime()) / MS_PER_DAY));
        const harvests = cycle.harvests;
        const dailyMap = new Map();
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
        let peakDay = null;
        for (const [day, weight] of dailyMap.entries()) {
            if (!peakDay || weight > peakDay.weightKg) {
                peakDay = { date: day, weightKg: +weight.toFixed(2) };
            }
        }
        const harvestDaysCount = dailyMap.size;
        const avgDailyWeightKg = +(totalWeight / daysRunning).toFixed(3);
        const avgHarvestWeightKg = harvests.length > 0 ? +(totalWeight / harvests.length).toFixed(3) : 0;
        const avgHarvestDayWeightKg = harvestDaysCount > 0 ? +(totalWeight / harvestDaysCount).toFixed(3) : 0;
        const baglogProductivity = cycle.baglogCount && cycle.baglogCount > 0
            ? +(totalWeight / cycle.baglogCount).toFixed(3)
            : null;
        const firstHarvest = harvests.length > 0 ? harvests[0] : null;
        const latestHarvest = harvests.length > 0 ? harvests[harvests.length - 1] : null;
        api_response_1.ApiResponse.success(res, {
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
    listHarvests: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const cycle = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
        });
        if (!cycle) {
            throw new errors_1.NotFoundError('Siklus tidak ditemukan');
        }
        const harvests = await prismaConfig_1.prisma.harvestRecord.findMany({
            where: { cycleId },
            orderBy: { harvestedAt: 'desc' },
        });
        api_response_1.ApiResponse.success(res, harvests.map((h) => ({
            ...h,
            weightKg: Number(h.weightKg),
            pricePerKg: h.pricePerKg ? Number(h.pricePerKg) : null,
        })));
    },
    addHarvest: async (req, res) => {
        const { deviceId, cycleId } = req.params;
        const device = await findDevice(deviceId);
        const parsed = createHarvestSchema.parse(req.body);
        const cycle = await prismaConfig_1.prisma.cultivationCycle.findFirst({
            where: { id: cycleId, deviceId: device.id },
        });
        if (!cycle) {
            throw new errors_1.NotFoundError('Siklus tidak ditemukan');
        }
        const harvest = await prismaConfig_1.prisma.harvestRecord.create({
            data: {
                cycleId,
                harvestedAt: parsed.harvestedAt,
                weightKg: parsed.weightKg,
                pricePerKg: parsed.pricePerKg ?? null,
                grade: parsed.grade ?? null,
                notes: parsed.notes ?? null,
            },
        });
        api_response_1.ApiResponse.success(res, {
            ...harvest,
            weightKg: Number(harvest.weightKg),
            pricePerKg: harvest.pricePerKg ? Number(harvest.pricePerKg) : null,
        }, 'Catatan panen berhasil ditambahkan', 201);
    },
    updateHarvest: async (req, res) => {
        const { cycleId, harvestId } = req.params;
        const parsed = updateHarvestSchema.parse(req.body);
        const existing = await prismaConfig_1.prisma.harvestRecord.findFirst({
            where: { id: harvestId, cycleId },
        });
        if (!existing) {
            throw new errors_1.NotFoundError('Catatan panen tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.harvestRecord.update({
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
        api_response_1.ApiResponse.success(res, {
            ...updated,
            weightKg: Number(updated.weightKg),
            pricePerKg: updated.pricePerKg ? Number(updated.pricePerKg) : null,
        }, 'Catatan panen berhasil diperbarui');
    },
    deleteHarvest: async (req, res) => {
        const { cycleId, harvestId } = req.params;
        const existing = await prismaConfig_1.prisma.harvestRecord.findFirst({
            where: { id: harvestId, cycleId },
        });
        if (!existing) {
            throw new errors_1.NotFoundError('Catatan panen tidak ditemukan');
        }
        await prismaConfig_1.prisma.harvestRecord.delete({
            where: { id: harvestId },
        });
        api_response_1.ApiResponse.success(res, null, 'Catatan panen berhasil dihapus');
    },
};
//# sourceMappingURL=index.js.map