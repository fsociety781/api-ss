"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const token_1 = require("../../utils/token");
const validation_1 = require("../../utils/validation");
const loginSchema = zod_1.z.object({
    identifier: zod_1.z.string().min(1, 'Nomor HP atau email wajib diisi'),
    password: validation_1.loginPasswordSchema,
});
const onboardingSchema = zod_1.z.object({
    currentPassword: zod_1.z.string().min(1, 'Password lama/default wajib diisi'),
    newPassword: validation_1.passwordSchema,
    fullName: zod_1.z.string().min(2, 'Nama lengkap wajib diisi').optional(),
    email: zod_1.z.string().email('Format email tidak valid').optional(),
});
const changePasswordSchema = zod_1.z.object({
    oldPassword: zod_1.z.string().min(1, 'Password lama wajib diisi'),
    newPassword: validation_1.passwordSchema,
});
exports.AuthController = {
    login: async (req, res) => {
        const rawBody = req.body;
        const identifier = (rawBody.identifier ||
            rawBody.phoneNumber ||
            rawBody.email ||
            rawBody.username);
        const parsed = loginSchema.parse({
            identifier: identifier?.trim() || '',
            password: typeof rawBody.password === 'string' ? rawBody.password : '',
        });
        const user = await prismaConfig_1.prisma.user.findFirst({
            where: {
                OR: [
                    { phoneNumber: parsed.identifier },
                    { email: { equals: parsed.identifier, mode: 'insensitive' } },
                ],
            },
        });
        if (!user || !user.passwordHash) {
            throw new errors_1.UnauthorizedError('Nomor HP/email atau password salah');
        }
        if (user.status === 'SUSPENDED') {
            throw new errors_1.UnauthorizedError('Akun Anda sedang ditangguhkan. Silakan hubungi admin.');
        }
        if (user.status === 'INACTIVE') {
            throw new errors_1.UnauthorizedError('Akun Anda tidak aktif.');
        }
        const isMatch = await bcrypt_1.default.compare(parsed.password, user.passwordHash);
        if (!isMatch) {
            throw new errors_1.UnauthorizedError('Nomor HP/email atau password salah');
        }
        await prismaConfig_1.prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        });
        const token = (0, token_1.signToken)({
            userId: user.id,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.role,
            status: user.status,
        });
        const isFarmer = user.role === 'FARMER';
        const mustSetupProfile = isFarmer && (user.mustChangePassword || !user.profileCompleted);
        const nextStep = mustSetupProfile ? 'complete_profile' : 'dashboard';
        api_response_1.ApiResponse.success(res, {
            token,
            user: {
                id: user.id,
                fullName: user.fullName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                role: user.role,
                status: user.status,
                profileCompleted: isFarmer ? user.profileCompleted : true,
                mustChangePassword: isFarmer ? user.mustChangePassword : false,
            },
            mustChangePassword: isFarmer ? user.mustChangePassword : false,
            profileCompleted: isFarmer ? user.profileCompleted : true,
            mustSetupProfile,
            nextStep,
        }, mustSetupProfile
            ? 'Login berhasil. Silakan lengkapi data dan ubah password awal Anda.'
            : 'Login berhasil. Selamat datang kembali.');
    },
    completeOnboarding: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = onboardingSchema.parse(req.body);
        const user = await prismaConfig_1.prisma.user.findUnique({
            where: { id: req.user.id },
        });
        if (!user || !user.passwordHash) {
            throw new errors_1.NotFoundError('Pengguna tidak ditemukan');
        }
        const isCurrentMatch = await bcrypt_1.default.compare(parsed.currentPassword, user.passwordHash);
        if (!isCurrentMatch) {
            throw new errors_1.BadRequestError('Password lama/default tidak cocok');
        }
        if (parsed.email && parsed.email !== user.email) {
            const emailExists = await prismaConfig_1.prisma.user.findUnique({
                where: { email: parsed.email },
            });
            if (emailExists && emailExists.id !== user.id) {
                throw new errors_1.ConflictError('Email sudah digunakan oleh akun lain');
            }
        }
        const newPasswordHash = await bcrypt_1.default.hash(parsed.newPassword, 12);
        const updatedUser = await prismaConfig_1.prisma.user.update({
            where: { id: user.id },
            data: {
                passwordHash: newPasswordHash,
                fullName: parsed.fullName ?? user.fullName,
                email: parsed.email ?? user.email,
                mustChangePassword: false,
                profileCompleted: true,
                status: user.status === 'INVITED' ? 'ACTIVE' : user.status,
                activatedAt: user.activatedAt ?? new Date(),
            },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                profileCompleted: true,
                mustChangePassword: true,
            },
        });
        const refreshedToken = (0, token_1.signToken)({
            userId: updatedUser.id,
            phoneNumber: updatedUser.phoneNumber,
            email: updatedUser.email,
            role: updatedUser.role,
            status: updatedUser.status,
        });
        api_response_1.ApiResponse.success(res, {
            token: refreshedToken,
            user: updatedUser,
            nextStep: 'dashboard',
        }, 'Profil berhasil diperbarui dan password berhasil diganti.');
    },
    changePassword: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = changePasswordSchema.parse(req.body);
        const user = await prismaConfig_1.prisma.user.findUnique({
            where: { id: req.user.id },
        });
        if (!user || !user.passwordHash) {
            throw new errors_1.NotFoundError('Pengguna tidak ditemukan');
        }
        const isOldMatch = await bcrypt_1.default.compare(parsed.oldPassword, user.passwordHash);
        if (!isOldMatch) {
            throw new errors_1.BadRequestError('Password lama tidak sesuai');
        }
        const newHash = await bcrypt_1.default.hash(parsed.newPassword, 12);
        await prismaConfig_1.prisma.user.update({
            where: { id: user.id },
            data: {
                passwordHash: newHash,
                mustChangePassword: false,
            },
        });
        api_response_1.ApiResponse.success(res, null, 'Password berhasil diubah.');
    },
    getMe: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const user = await prismaConfig_1.prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                profileCompleted: true,
                mustChangePassword: true,
                activatedAt: true,
                lastLoginAt: true,
                createdAt: true,
                _count: {
                    select: {
                        devices: true,
                        createdUsers: true,
                        createdDevices: true,
                    },
                },
            },
        });
        if (!user) {
            throw new errors_1.NotFoundError('Pengguna tidak ditemukan');
        }
        const isFarmer = user.role === 'FARMER';
        const mustSetupProfile = isFarmer && (user.mustChangePassword || !user.profileCompleted);
        api_response_1.ApiResponse.success(res, {
            ...user,
            profileCompleted: isFarmer ? user.profileCompleted : true,
            mustChangePassword: isFarmer ? user.mustChangePassword : false,
            mustSetupProfile,
            nextStep: mustSetupProfile ? 'complete_profile' : 'dashboard',
        });
    },
    updateProfile: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const updateProfileSchema = zod_1.z.object({
            fullName: zod_1.z.string().min(2, 'Nama lengkap minimal 2 karakter').optional(),
            email: zod_1.z.string().email('Format email tidak valid').optional(),
            phoneNumber: zod_1.z.string().min(8, 'Nomor HP minimal 8 digit').optional(),
        });
        const parsed = updateProfileSchema.parse(req.body);
        if (parsed.email && parsed.email !== req.user.email) {
            const emailExists = await prismaConfig_1.prisma.user.findUnique({
                where: { email: parsed.email },
            });
            if (emailExists && emailExists.id !== req.user.id) {
                throw new errors_1.ConflictError('Email sudah terdaftar pada akun lain');
            }
        }
        if (parsed.phoneNumber && parsed.phoneNumber !== req.user.phoneNumber) {
            const phoneExists = await prismaConfig_1.prisma.user.findUnique({
                where: { phoneNumber: parsed.phoneNumber },
            });
            if (phoneExists && phoneExists.id !== req.user.id) {
                throw new errors_1.ConflictError('Nomor HP sudah terdaftar pada akun lain');
            }
        }
        const updated = await prismaConfig_1.prisma.user.update({
            where: { id: req.user.id },
            data: {
                ...(parsed.fullName !== undefined && { fullName: parsed.fullName }),
                ...(parsed.email !== undefined && { email: parsed.email }),
                ...(parsed.phoneNumber !== undefined && { phoneNumber: parsed.phoneNumber }),
            },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                profileCompleted: true,
            },
        });
        api_response_1.ApiResponse.success(res, updated, 'Profil berhasil diperbarui');
    },
    updateFcmToken: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { fcmToken, token } = req.body;
        const finalToken = (fcmToken || token)?.trim();
        if (!finalToken) {
            throw new errors_1.BadRequestError('Token FCM wajib disertakan');
        }
        await prismaConfig_1.prisma.user.update({
            where: { id: req.user.id },
            data: {
                fcmToken: finalToken,
                lastFcmTokenAt: new Date(),
            },
        });
        api_response_1.ApiResponse.success(res, { success: true }, 'FCM token berhasil didaftarkan');
    },
};
//# sourceMappingURL=index.js.map