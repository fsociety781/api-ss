"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const activateDeviceSchema = zod_1.z.object({
    deviceId: zod_1.z.string().min(1, 'Device ID / Serial Number wajib diisi'),
    name: zod_1.z.string().optional(),
    activationCode: zod_1.z.string().optional(),
});
const createDeviceSchema = zod_1.z.object({
    deviceId: zod_1.z.string().optional(),
    serialNumber: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    hardwareVersion: zod_1.z.string().default('1.0'),
    firmwareVersion: zod_1.z.string().default('1.0.0'),
});
const telemetryIngestSchema = zod_1.z.object({
    serialNumber: zod_1.z.string().min(1, 'Serial number wajib diisi'),
    activationCode: zod_1.z.string().min(1, 'Activation code wajib diisi'),
    temperature: zod_1.z.coerce.number(),
    humidity: zod_1.z.coerce.number(),
    actuatorStates: zod_1.z
        .record(zod_1.z.string(), zod_1.z.enum(['ON', 'OFF', 'UNKNOWN']))
        .optional(),
});
function formatDevice(device) {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const isOnline = device.lastSeenAt
        ? new Date(device.lastSeenAt) >= tenMinutesAgo
        : false;
    const pumpActuator = device.actuators?.find((a) => a.type === 'PUMP' || a.name?.toLowerCase().includes('pump'));
    const fanActuator = device.actuators?.find((a) => a.type === 'MISTING' ||
        a.type === 'FLOOR_WATERING' ||
        a.name?.toLowerCase().includes('fan'));
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
                controlMode: device.controlMode === 'MANUAL'
                    ? 1
                    : device.controlMode === 'AUTO'
                        ? 2
                        : 3,
                minS: Number(device.setting.minTemperature ?? 0),
                midS: Number(device.setting.maxTemperature ?? 0),
                minK: Number(device.setting.minHumidity ?? 0),
                midK: Number(device.setting.maxHumidity ?? 0),
                timerMinute: Math.floor((device.setting.timerDurationSeconds ?? 0) / 60),
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
exports.DeviceController = {
    /**
     * GET /api/v1/devices
     */
    listDevices: async (req, res) => {
        const userId = req.user ? req.user.id : null;
        const isAdmin = req.user?.role === 'ADMIN' || req.user?.role === 'TECHNICIAN';
        const where = {};
        if (userId && !isAdmin) {
            where.farmerId = userId;
        }
        const devices = await prismaConfig_1.prisma.device.findMany({
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
        api_response_1.ApiResponse.success(res, devices.map(formatDevice));
    },
    /**
     * POST /api/v1/devices/activate
     */
    activateDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = activateDeviceSchema.parse(req.body);
        const identifier = parsed.deviceId;
        let device = await prismaConfig_1.prisma.device.findFirst({
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
            device = await prismaConfig_1.prisma.$transaction(async (tx) => {
                const d = await tx.device.create({
                    data: {
                        serialNumber: identifier,
                        activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                        name: parsed.name ?? `Kumbung ${identifier}`,
                        model: 'SS-ESP32-V1',
                        hardwareVersion: '1.0',
                        firmwareVersion: '1.0.0',
                        ownershipType: client_1.OwnershipType.OWNED,
                        status: client_1.DeviceStatus.ACTIVE,
                        farmerId: req.user.id,
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
                            type: client_1.ActuatorType.FLOOR_WATERING,
                            channel: 1,
                        },
                        {
                            deviceId: d.id,
                            name: 'Pengabutan',
                            type: client_1.ActuatorType.MISTING,
                            channel: 2,
                        },
                        {
                            deviceId: d.id,
                            name: 'Pompa Utama',
                            type: client_1.ActuatorType.PUMP,
                            channel: 3,
                        },
                        {
                            deviceId: d.id,
                            name: 'Lampu Kumbung',
                            type: client_1.ActuatorType.LIGHT,
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
            throw new errors_1.ConflictError('Perangkat ini sudah diaktivasi oleh akun petani lain. Hubungi admin.');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: req.user.id,
                status: client_1.DeviceStatus.ACTIVE,
                name: parsed.name ?? device.name,
                activatedAt: device.activatedAt ?? new Date(),
            },
            include: {
                setting: true,
                actuators: true,
            },
        });
        api_response_1.ApiResponse.success(res, formatDevice(updated), 'Perangkat berhasil diaktivasi dan ditautkan ke akun Anda', 200);
    },
    /**
     * POST /api/v1/devices/unpair/:deviceId
     */
    unpairDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { deviceId } = req.params;
        const isAdmin = req.user.role === 'ADMIN' || req.user.role === 'TECHNICIAN';
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [{ id: deviceId }, { serialNumber: deviceId }],
                ...(isAdmin ? {} : { farmerId: req.user.id }),
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan atau Anda tidak memiliki akses');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: null,
                status: client_1.DeviceStatus.READY,
            },
            include: { setting: true, actuators: true },
        });
        api_response_1.ApiResponse.success(res, formatDevice(updated), 'Perangkat berhasil dilepas dari akun Anda');
    },
    /**
     * GET /api/v1/devices/:deviceId
     */
    getDevice: async (req, res) => {
        const { deviceId } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
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
            throw new errors_1.NotFoundError(`Device "${deviceId}" not found`);
        }
        api_response_1.ApiResponse.success(res, formatDevice(device));
    },
    /**
     * POST /api/v1/devices
     */
    createDevice: async (req, res) => {
        const parsed = createDeviceSchema.parse(req.body);
        const sn = parsed.serialNumber ||
            parsed.deviceId ||
            `SS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const existing = await prismaConfig_1.prisma.device.findUnique({
            where: { serialNumber: sn },
        });
        if (existing) {
            throw new errors_1.ConflictError(`Device "${sn}" already exists`);
        }
        const device = await prismaConfig_1.prisma.device.create({
            data: {
                serialNumber: sn,
                activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                name: parsed.name ?? `Kumbung ${sn}`,
                model: 'SS-ESP32-V1',
                hardwareVersion: parsed.hardwareVersion,
                firmwareVersion: parsed.firmwareVersion,
                status: client_1.DeviceStatus.READY,
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
        api_response_1.ApiResponse.success(res, formatDevice(device), 'Device created successfully', 201);
    },
    /**
     * DELETE /api/v1/devices/:deviceId
     */
    deleteDevice: async (req, res) => {
        const { deviceId } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [{ id: deviceId }, { serialNumber: deviceId }],
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Device tidak ditemukan');
        }
        await prismaConfig_1.prisma.device.delete({
            where: { id: device.id },
        });
        api_response_1.ApiResponse.success(res, null, 'Device deleted');
    },
    /**
     * ESP32 Telemetry Push
     */
    ingestTelemetry: async (req, res) => {
        const parsed = telemetryIngestSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
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
            throw new errors_1.UnauthorizedError('Perangkat tidak dikenali atau kredensial aktivasi salah');
        }
        const now = new Date();
        const reading = await prismaConfig_1.prisma.sensorReading.create({
            data: {
                deviceId: device.id,
                temperature: parsed.temperature,
                humidity: parsed.humidity,
                recordedAt: now,
            },
        });
        const nextStatus = device.status === client_1.DeviceStatus.OFFLINE && device.farmerId
            ? client_1.DeviceStatus.ACTIVE
            : device.status;
        await prismaConfig_1.prisma.device.update({
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
                    await prismaConfig_1.prisma.actuator.updateMany({
                        where: {
                            deviceId: device.id,
                            channel: channelNum,
                        },
                        data: {
                            state: stateVal,
                            lastChangedAt: now,
                        },
                    });
                }
            }
        }
        api_response_1.ApiResponse.success(res, {
            received: true,
            readingId: reading.id.toString(),
            controlMode: device.controlMode,
            setting: device.setting,
        }, 'Telemetri berhasil disimpan', 201);
    },
    /**
     * ESP32 Heartbeat
     */
    heartbeat: async (req, res) => {
        const { serialNumber, activationCode } = req.body;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                serialNumber,
                activationCode,
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: { lastSeenAt: new Date() },
        });
        api_response_1.ApiResponse.success(res, { online: true, serverTime: new Date() });
    },
};
//# sourceMappingURL=index.js.map