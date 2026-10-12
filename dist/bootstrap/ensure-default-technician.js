"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDefaultTechnician = ensureDefaultTechnician;
const bcrypt_1 = __importDefault(require("bcrypt"));
const env_1 = require("../bin/env");
const prismaConfig_1 = require("../bin/prismaConfig");
async function ensureDefaultTechnician() {
    const technicianExists = await prismaConfig_1.prisma.user.findFirst({
        where: {
            role: 'TECHNICIAN',
        },
        select: {
            id: true,
        },
    });
    if (technicianExists) {
        return;
    }
    const conflictingUser = await prismaConfig_1.prisma.user.findFirst({
        where: {
            OR: [
                {
                    phoneNumber: env_1.env.DEFAULT_TECHNICIAN_PHONE,
                },
                ...(env_1.env.DEFAULT_TECHNICIAN_EMAIL
                    ? [
                        {
                            email: env_1.env.DEFAULT_TECHNICIAN_EMAIL,
                        },
                    ]
                    : []),
            ],
        },
        select: {
            id: true,
            role: true,
        },
    });
    if (conflictingUser) {
        throw new Error('Nomor HP atau email teknisi awal sudah digunakan akun lain');
    }
    const passwordHash = await bcrypt_1.default.hash(env_1.env.DEFAULT_TECHNICIAN_PASSWORD, 12);
    await prismaConfig_1.prisma.user.create({
        data: {
            fullName: env_1.env.DEFAULT_TECHNICIAN_NAME,
            phoneNumber: env_1.env.DEFAULT_TECHNICIAN_PHONE,
            email: env_1.env.DEFAULT_TECHNICIAN_EMAIL ?? null,
            passwordHash,
            role: 'TECHNICIAN',
            status: 'ACTIVE',
            profileCompleted: true,
            activatedAt: new Date(),
        },
    });
    console.info('Akun teknisi awal berhasil dibuat');
}
//# sourceMappingURL=ensure-default-technician.js.map