"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryController = void 0;
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
async function findDevice(deviceId) {
    const device = await prismaConfig_1.prisma.device.findFirst({
        where: {
            OR: [{ id: deviceId }, { serialNumber: deviceId }],
        },
        include: {
            setting: true,
            actuators: true,
        },
    });
    if (!device) {
        throw new errors_1.NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
    }
    return device;
}
exports.TelemetryController = {
    /**
     * GET /api/v1/devices/:deviceId/telemetry/sensor
     * Pagination support: limit, offset, from, to
     */
    querySensor: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const limit = Math.min(parseInt(req.query.limit || '50', 10), 500);
        const offset = parseInt(req.query.offset || '0', 10);
        const fromStr = req.query.from;
        const toStr = req.query.to;
        const where = { deviceId: device.id };
        if (fromStr || toStr) {
            const dateFilter = {};
            if (fromStr)
                dateFilter.gte = new Date(fromStr);
            if (toStr)
                dateFilter.lte = new Date(toStr);
            where.recordedAt = dateFilter;
        }
        const [total, readings] = await Promise.all([
            prismaConfig_1.prisma.sensorReading.count({ where }),
            prismaConfig_1.prisma.sensorReading.findMany({
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
        api_response_1.ApiResponse.success(res, { total, offset, limit, records }, 'Data telemetri sensor berhasil dimuat');
    },
    /**
     * GET /api/v1/devices/:deviceId/telemetry/sensor/latest
     */
    getLatestSensor: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const reading = await prismaConfig_1.prisma.sensorReading.findFirst({
            where: { deviceId: device.id },
            orderBy: { recordedAt: 'desc' },
        });
        if (!reading) {
            api_response_1.ApiResponse.success(res, null, 'Belum ada data sensor');
            return;
        }
        api_response_1.ApiResponse.success(res, {
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
    queryHistory: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const limit = Math.min(parseInt(req.query.limit || '50', 10), 100);
        const offset = parseInt(req.query.offset || '0', 10);
        const [total, readings] = await Promise.all([
            prismaConfig_1.prisma.sensorReading.count({ where: { deviceId: device.id } }),
            prismaConfig_1.prisma.sensorReading.findMany({
                where: { deviceId: device.id },
                orderBy: { recordedAt: 'desc' },
                take: limit,
                skip: offset,
            }),
        ]);
        const pumpActuator = device.actuators.find((a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'));
        const fanActuator = device.actuators.find((a) => a.type === 'MISTING' ||
            a.type === 'FLOOR_WATERING' ||
            a.name.toLowerCase().includes('fan'));
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
        api_response_1.ApiResponse.success(res, { total, offset, limit, records });
    },
    /**
     * GET /api/v1/devices/:deviceId/telemetry/history/latest
     */
    getLatestHistory: async (req, res) => {
        const { deviceId } = req.params;
        const device = await findDevice(deviceId);
        const reading = await prismaConfig_1.prisma.sensorReading.findFirst({
            where: { deviceId: device.id },
            orderBy: { recordedAt: 'desc' },
        });
        const pumpActuator = device.actuators.find((a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'));
        const fanActuator = device.actuators.find((a) => a.type === 'MISTING' ||
            a.type === 'FLOOR_WATERING' ||
            a.name.toLowerCase().includes('fan'));
        api_response_1.ApiResponse.success(res, {
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
//# sourceMappingURL=index.js.map