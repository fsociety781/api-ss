"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const createFarmerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Nama lengkap petani wajib diisi'),
    phoneNumber: zod_1.z.string().min(8, 'Nomor HP tidak valid'),
    email: zod_1.z.string().email('Format email tidak valid').optional(),
    defaultPassword: zod_1.z
        .string()
        .min(8, 'Password default minimal 8 karakter')
        .default('PetaniJamur123!'),
});
const updateFarmerSchema = zod_1.z.object({
    fullName: zod_1.z.string().optional(),
    email: zod_1.z.string().email('Format email tidak valid').optional(),
    status: zod_1.z
        .enum(['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'])
        .optional(),
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
        const newFarmer = await prismaConfig_1.prisma.user.create({
            data: {
                fullName: parsed.fullName,
                phoneNumber: parsed.phoneNumber,
                email: parsed.email ?? null,
                passwordHash,
                role: 'FARMER',
                status: 'INVITED',
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
                profileCompleted: true,
                createdAt: true,
            },
        });
        api_response_1.ApiResponse.success(res, {
            farmer: newFarmer,
            temporaryPassword: parsed.defaultPassword,
        }, 'Akun Petani berhasil dibuat dengan status INVITED. Berikan password default ke petani.', 201);
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
        if (parsed.email && parsed.email !== farmer.email) {
            const emailExists = await prismaConfig_1.prisma.user.findUnique({
                where: { email: parsed.email },
            });
            if (emailExists) {
                throw new errors_1.ConflictError('Email sudah terdaftar pada akun lain');
            }
        }
        const updated = await prismaConfig_1.prisma.user.update({
            where: { id },
            data: {
                fullName: parsed.fullName ?? farmer.fullName,
                email: parsed.email ?? farmer.email,
                status: parsed.status ?? farmer.status,
            },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                status: true,
            },
        });
        api_response_1.ApiResponse.success(res, updated, 'Data petani berhasil diperbarui');
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
        const device = await prismaConfig_1.prisma.device.findUnique({
            where: { id: parsed.deviceId },
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
            where: { id: parsed.deviceId },
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
        api_response_1.ApiResponse.success(res, updatedDevice, `Perangkat ${device.serialNumber} berhasil ditugaskan ke petani ${farmer.fullName}`);
    },
    unassignDevice: async (req, res) => {
        const { deviceId } = req.params;
        const device = await prismaConfig_1.prisma.device.findUnique({
            where: { id: deviceId },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id: deviceId },
            data: {
                farmerId: null,
                status: client_1.DeviceStatus.READY,
            },
        });
        api_response_1.ApiResponse.success(res, updated, `Perangkat ${device.serialNumber} berhasil dilepas dari penugasan`);
    },
};
//# sourceMappingURL=index.js.map