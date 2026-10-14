"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const validation_1 = require("../../utils/validation");
const createDeviceSchema = zod_1.z.object({
    serialNumber: zod_1.z.string().min(3, 'Serial number minimal 3 karakter'),
    activationCode: zod_1.z
        .string()
        .min(6, 'Kode aktivasi minimal 6 karakter')
        .optional(),
    name: zod_1.z.string().optional(),
    model: zod_1.z.string().min(1, 'Model perangkat wajib diisi').default('SS-ESP32-V1'),
    hardwareVersion: zod_1.z.string().default('1.0'),
    firmwareVersion: zod_1.z.string().default('1.0.0'),
    ownershipType: zod_1.z
        .enum(['OWNED', 'RENTED', 'LEASED'])
        .default('RENTED'),
});
const updateDeviceSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    status: zod_1.z
        .enum([
        'READY',
        'ACTIVE',
        'OFFLINE',
        'SUSPENDED',
        'MAINTENANCE',
    ])
        .optional(),
    hardwareVersion: zod_1.z.string().optional(),
    firmwareVersion: zod_1.z.string().optional(),
    ownershipType: zod_1.z.enum(['OWNED', 'RENTED', 'LEASED']).optional(),
});
const createAdminSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Nama lengkap admin wajib diisi'),
    phoneNumber: zod_1.z.string().min(8, 'Nomor HP tidak valid'),
    email: zod_1.z.string().email('Format email tidak valid').optional(),
    defaultPassword: validation_1.passwordSchema.default('AdminShroomSync123!'),
});
const updateAdminStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE']),
});
exports.TechController = {
    // ==========================================
    // TECHNICIAN DASHBOARD & SYSTEM OVERVIEW
    // ==========================================
    getDashboard: async (_req, res) => {
        const [totalDevices, maintenanceDevices, totalAdmins, totalReadings, totalLogs, devices,] = await Promise.all([
            prismaConfig_1.prisma.device.count(),
            prismaConfig_1.prisma.device.count({ where: { status: 'MAINTENANCE' } }),
            prismaConfig_1.prisma.user.count({ where: { role: 'ADMIN' } }),
            prismaConfig_1.prisma.sensorReading.count(),
            prismaConfig_1.prisma.controlLog.count(),
            prismaConfig_1.prisma.device.findMany({
                select: {
                    model: true,
                    firmwareVersion: true,
                    hardwareVersion: true,
                },
            }),
        ]);
        const firmwareDist = {};
        const modelDist = {};
        for (const d of devices) {
            const fw = d.firmwareVersion ?? 'unknown';
            firmwareDist[fw] = (firmwareDist[fw] ?? 0) + 1;
            const model = d.model;
            modelDist[model] = (modelDist[model] ?? 0) + 1;
        }
        api_response_1.ApiResponse.success(res, {
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
    createDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = createDeviceSchema.parse(req.body);
        const existingSerial = await prismaConfig_1.prisma.device.findUnique({
            where: { serialNumber: parsed.serialNumber },
        });
        if (existingSerial) {
            throw new errors_1.ConflictError(`Perangkat dengan serial number "${parsed.serialNumber}" sudah terdaftar`);
        }
        const activationCode = parsed.activationCode ||
            `ACT-${crypto_1.default.randomBytes(4).toString('hex').toUpperCase()}`;
        const existingCode = await prismaConfig_1.prisma.device.findUnique({
            where: { activationCode },
        });
        if (existingCode) {
            throw new errors_1.ConflictError('Kode aktivasi sudah digunakan, coba kode lain');
        }
        const newDevice = await prismaConfig_1.prisma.$transaction(async (tx) => {
            const device = await tx.device.create({
                data: {
                    serialNumber: parsed.serialNumber,
                    activationCode,
                    name: parsed.name ?? `Kumbung ${parsed.serialNumber}`,
                    model: parsed.model,
                    hardwareVersion: parsed.hardwareVersion,
                    firmwareVersion: parsed.firmwareVersion,
                    ownershipType: parsed.ownershipType,
                    status: client_1.DeviceStatus.READY,
                    createdById: req.user.id,
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
                    type: client_1.ActuatorType.FLOOR_WATERING,
                    channel: 1,
                },
                {
                    deviceId: device.id,
                    name: 'Pengabutan (Misting)',
                    type: client_1.ActuatorType.MISTING,
                    channel: 2,
                },
                {
                    deviceId: device.id,
                    name: 'Pompa Utama (Pump)',
                    type: client_1.ActuatorType.PUMP,
                    channel: 3,
                },
                {
                    deviceId: device.id,
                    name: 'Lampu Kumbung',
                    type: client_1.ActuatorType.LIGHT,
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
        api_response_1.ApiResponse.success(res, newDevice, 'Perangkat baru berhasil didaftarkan dan diinisialisasi', 201);
    },
    listDevices: async (_req, res) => {
        const devices = await prismaConfig_1.prisma.device.findMany({
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
        api_response_1.ApiResponse.success(res, devices);
    },
    getDeviceById: async (req, res) => {
        const { id } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
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
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        api_response_1.ApiResponse.success(res, device);
    },
    updateDevice: async (req, res) => {
        const { id } = req.params;
        const parsed = updateDeviceSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findUnique({
            where: { id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id },
            data: {
                name: parsed.name ?? device.name,
                status: parsed.status ?? device.status,
                hardwareVersion: parsed.hardwareVersion ?? device.hardwareVersion,
                firmwareVersion: parsed.firmwareVersion ?? device.firmwareVersion,
                ownershipType: parsed.ownershipType ?? device.ownershipType,
            },
            include: {
                setting: true,
                actuators: true,
            },
        });
        api_response_1.ApiResponse.success(res, updated, 'Data perangkat berhasil diperbarui');
    },
    deleteDevice: async (req, res) => {
        const { id } = req.params;
        const device = await prismaConfig_1.prisma.device.findUnique({
            where: { id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        await prismaConfig_1.prisma.device.delete({
            where: { id },
        });
        api_response_1.ApiResponse.success(res, null, 'Perangkat berhasil dihapus');
    },
    // ==========================================
    // ADMIN MANAGEMENT (TECHNICIAN)
    // ==========================================
    createAdmin: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = createAdminSchema.parse(req.body);
        const existingPhone = await prismaConfig_1.prisma.user.findUnique({
            where: { phoneNumber: parsed.phoneNumber },
        });
        if (existingPhone) {
            throw new errors_1.ConflictError('Nomor HP sudah terdaftar pada akun lain');
        }
        if (parsed.email) {
            const existingEmail = await prismaConfig_1.prisma.user.findUnique({
                where: { email: parsed.email },
            });
            if (existingEmail) {
                throw new errors_1.ConflictError('Email sudah terdaftar pada akun lain');
            }
        }
        const passwordHash = await bcrypt_1.default.hash(parsed.defaultPassword, 12);
        const newAdmin = await prismaConfig_1.prisma.user.create({
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
        api_response_1.ApiResponse.success(res, {
            admin: newAdmin,
            temporaryPassword: parsed.defaultPassword,
        }, 'Akun Admin berhasil dibuat. Berikan password sementara kepada Admin.', 201);
    },
    listAdmins: async (_req, res) => {
        const admins = await prismaConfig_1.prisma.user.findMany({
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
        api_response_1.ApiResponse.success(res, admins);
    },
    updateAdminStatus: async (req, res) => {
        const { id } = req.params;
        const parsed = updateAdminStatusSchema.parse(req.body);
        const admin = await prismaConfig_1.prisma.user.findFirst({
            where: { id, role: 'ADMIN' },
        });
        if (!admin) {
            throw new errors_1.NotFoundError('Akun admin tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.user.update({
            where: { id },
            data: { status: parsed.status },
            select: {
                id: true,
                fullName: true,
                role: true,
                status: true,
            },
        });
        api_response_1.ApiResponse.success(res, updated, 'Status admin berhasil diperbarui');
    },
};
//# sourceMappingURL=index.js.map