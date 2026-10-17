"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const mqtt_service_1 = require("../../services/mqtt.service");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const createFarmerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Nama lengkap petani wajib diisi'),
    phoneNumber: zod_1.z.string().min(8, 'Nomor HP tidak valid'),
    email: zod_1.z
        .string()
        .email('Format email tidak valid')
        .optional()
        .nullable()
        .or(zod_1.z.literal('')),
    password: zod_1.z.string().min(6, 'Kata sandi minimal 6 karakter').optional(),
    defaultPassword: zod_1.z.string().min(6).optional(),
    status: zod_1.z
        .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'])
        .optional(),
    farmName: zod_1.z.string().optional().nullable().or(zod_1.z.literal('')),
    farmAddress: zod_1.z.string().optional().nullable().or(zod_1.z.literal('')),
});
const updateFarmerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Nama lengkap tidak valid').optional(),
    phoneNumber: zod_1.z.string().min(8, 'Nomor HP tidak valid').optional(),
    email: zod_1.z
        .string()
        .email('Format email tidak valid')
        .optional()
        .nullable()
        .or(zod_1.z.literal('')),
    status: zod_1.z
        .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'])
        .optional(),
    password: zod_1.z.string().min(6, 'Kata sandi minimal 6 karakter').optional(),
    farmName: zod_1.z.string().optional().nullable().or(zod_1.z.literal('')),
    farmAddress: zod_1.z.string().optional().nullable().or(zod_1.z.literal('')),
});
const assignDeviceSchema = zod_1.z.object({
    deviceId: zod_1.z.string().min(1, 'Device ID wajib diisi'),
    farmerId: zod_1.z.string().min(1, 'Farmer ID wajib diisi'),
});
exports.AdminController = {
    // ==========================================
    // ADMIN DASHBOARD
    // ==========================================
    getDashboard: async (_req, res) => {
        const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
        const [totalFarmers, activeFarmers, invitedFarmers, totalDevices, activeDevices, readyDevices, offlineDevices,] = await Promise.all([
            prismaConfig_1.prisma.user.count({ where: { role: 'FARMER' } }),
            prismaConfig_1.prisma.user.count({ where: { role: 'FARMER', status: 'ACTIVE' } }),
            prismaConfig_1.prisma.user.count({ where: { role: 'FARMER', status: 'INVITED' } }),
            prismaConfig_1.prisma.device.count(),
            prismaConfig_1.prisma.device.count({ where: { status: 'ACTIVE' } }),
            prismaConfig_1.prisma.device.count({ where: { status: 'READY' } }),
            prismaConfig_1.prisma.device.count({
                where: {
                    status: 'ACTIVE',
                    OR: [{ lastSeenAt: null }, { lastSeenAt: { lt: thirtyMinutesAgo } }],
                },
            }),
        ]);
        const recentFarmers = await prismaConfig_1.prisma.user.findMany({
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
        api_response_1.ApiResponse.success(res, {
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
    createFarmer: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = createFarmerSchema.parse(req.body);
        const phoneNumber = parsed.phoneNumber.trim();
        const cleanEmail = parsed.email?.trim() ? parsed.email.trim() : null;
        const rawPassword = parsed.password || parsed.defaultPassword || 'PasswordDefault123!';
        const existingPhone = await prismaConfig_1.prisma.user.findUnique({
            where: { phoneNumber },
        });
        if (existingPhone) {
            throw new errors_1.ConflictError('Nomor HP sudah terdaftar pada akun lain');
        }
        if (cleanEmail) {
            const existingEmail = await prismaConfig_1.prisma.user.findUnique({
                where: { email: cleanEmail },
            });
            if (existingEmail) {
                throw new errors_1.ConflictError('Email sudah terdaftar pada akun lain');
            }
        }
        const passwordHash = await bcrypt_1.default.hash(rawPassword, 12);
        const initialStatus = parsed.status || 'ACTIVE';
        const newFarmer = await prismaConfig_1.prisma.user.create({
            data: {
                fullName: parsed.fullName.trim(),
                phoneNumber,
                email: cleanEmail,
                passwordHash,
                role: 'FARMER',
                status: initialStatus,
                profileCompleted: true,
                mustChangePassword: false,
                createdById: req.user.id,
                activatedAt: new Date(),
            },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                mustChangePassword: true,
                profileCompleted: true,
                createdAt: true,
            },
        });
        api_response_1.ApiResponse.success(res, {
            ...newFarmer,
            temporaryPassword: rawPassword,
        }, 'Akun Petani berhasil didaftarkan.', 201);
    },
    listFarmers: async (_req, res) => {
        const farmers = await prismaConfig_1.prisma.user.findMany({
            where: { role: 'FARMER' },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                status: true,
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
        api_response_1.ApiResponse.success(res, farmers);
    },
    getFarmerById: async (req, res) => {
        const { id } = req.params;
        const farmer = await prismaConfig_1.prisma.user.findFirst({
            where: { id, role: 'FARMER' },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                status: true,
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
            throw new errors_1.NotFoundError('Data petani tidak ditemukan');
        }
        api_response_1.ApiResponse.success(res, farmer);
    },
    updateFarmer: async (req, res) => {
        const { id } = req.params;
        const parsed = updateFarmerSchema.parse(req.body);
        const farmer = await prismaConfig_1.prisma.user.findFirst({
            where: { id, role: 'FARMER' },
        });
        if (!farmer) {
            throw new errors_1.NotFoundError('Data petani tidak ditemukan');
        }
        const cleanEmail = parsed.email !== undefined
            ? parsed.email?.trim()
                ? parsed.email.trim()
                : null
            : undefined;
        if (cleanEmail && cleanEmail !== farmer.email) {
            const emailExists = await prismaConfig_1.prisma.user.findUnique({
                where: { email: cleanEmail },
            });
            if (emailExists) {
                throw new errors_1.ConflictError('Email sudah terdaftar pada akun lain');
            }
        }
        if (parsed.phoneNumber && parsed.phoneNumber.trim() !== farmer.phoneNumber) {
            const phoneExists = await prismaConfig_1.prisma.user.findUnique({
                where: { phoneNumber: parsed.phoneNumber.trim() },
            });
            if (phoneExists) {
                throw new errors_1.ConflictError('Nomor HP sudah terdaftar pada akun lain');
            }
        }
        let passwordHash;
        if (parsed.password && parsed.password.trim().length >= 6) {
            passwordHash = await bcrypt_1.default.hash(parsed.password.trim(), 12);
        }
        const updated = await prismaConfig_1.prisma.user.update({
            where: { id },
            data: {
                ...(parsed.fullName !== undefined && { fullName: parsed.fullName.trim() }),
                ...(parsed.phoneNumber !== undefined && { phoneNumber: parsed.phoneNumber.trim() }),
                ...(cleanEmail !== undefined && { email: cleanEmail }),
                ...(parsed.status !== undefined && { status: parsed.status }),
                ...(passwordHash !== undefined && { passwordHash }),
            },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                status: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        api_response_1.ApiResponse.success(res, updated, 'Data petani berhasil diperbarui');
    },
    deleteFarmer: async (req, res) => {
        const { id } = req.params;
        const farmer = await prismaConfig_1.prisma.user.findFirst({
            where: { id, role: 'FARMER' },
        });
        if (!farmer) {
            throw new errors_1.NotFoundError('Data petani tidak ditemukan');
        }
        // 1. Ambil daftar perangkat milik petani ini sebelum dilepas tautannya
        const farmerDevices = await prismaConfig_1.prisma.device.findMany({
            where: { farmerId: id },
            select: { serialNumber: true },
        });
        // Lepaskan tautan seluruh perangkat milik petani ini kembali ke status READY
        await prismaConfig_1.prisma.device.updateMany({
            where: { farmerId: id },
            data: {
                farmerId: null,
                status: client_1.DeviceStatus.READY,
            },
        });
        // Kirim sinyal nonaktif ke setiap fisik perangkat via MQTT
        for (const d of farmerDevices) {
            mqtt_service_1.mqttService.publishActivationStatus(d.serialNumber, false, '', 'Akun petani pemilik dihapus');
        }
        // 2. Hapus jadwal yang dibuat oleh petani ini jika ada
        await prismaConfig_1.prisma.schedule.deleteMany({
            where: { createdById: id },
        });
        // 3. Hapus akun pengguna petani
        await prismaConfig_1.prisma.user.delete({
            where: { id },
        });
        api_response_1.ApiResponse.success(res, null, `Akun petani ${farmer.fullName || farmer.phoneNumber} berhasil dihapus beserta pelepasan unit perangkatnya`);
    },
    // ==========================================
    // DEVICE ASSIGNMENT
    // ==========================================
    listDevices: async (_req, res) => {
        const devices = await prismaConfig_1.prisma.device.findMany({
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
        api_response_1.ApiResponse.success(res, devices);
    },
    assignDevice: async (req, res) => {
        const parsed = assignDeviceSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [{ id: parsed.deviceId }, { serialNumber: parsed.deviceId }],
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const farmer = await prismaConfig_1.prisma.user.findFirst({
            where: { id: parsed.farmerId, role: 'FARMER' },
        });
        if (!farmer) {
            throw new errors_1.NotFoundError('Petani tidak ditemukan');
        }
        const updatedDevice = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: parsed.farmerId,
                status: client_1.DeviceStatus.ACTIVE,
                activatedAt: device.activatedAt ?? new Date(),
            },
            include: {
                farmer: {
                    select: { id: true, fullName: true, phoneNumber: true },
                },
            },
        });
        // Kirim sinyal aktivasi langsung ke fisik perangkat via MQTT
        mqtt_service_1.mqttService.publishActivationStatus(device.serialNumber, true, farmer.fullName || farmer.phoneNumber || 'Petani', `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`);
        api_response_1.ApiResponse.success(res, updatedDevice, `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`);
    },
    unassignDevice: async (req, res) => {
        const { deviceId } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [{ id: deviceId }, { serialNumber: deviceId }],
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: null,
                status: client_1.DeviceStatus.READY,
            },
        });
        // Kirim sinyal pelepasan aktivasi ke fisik perangkat via MQTT
        mqtt_service_1.mqttService.publishActivationStatus(device.serialNumber, false, '', `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`);
        api_response_1.ApiResponse.success(res, updated, `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`);
    },
};
//# sourceMappingURL=index.js.map