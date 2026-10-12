"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaConfig_1 = require("../bin/prismaConfig");
const client_1 = require("../src/generated/prisma/client");
const logger_1 = require("../utils/logger");
async function main() {
    logger_1.logger.info('🌱 Memulai proses seeding database ShroomSync...');
    const defaultPassword = await bcrypt_1.default.hash('Password123!', 10);
    // 1. Seed Default Technician
    const technician = await prismaConfig_1.prisma.user.upsert({
        where: { phoneNumber: '08111111111' },
        update: {},
        create: {
            fullName: 'Head Technician ShroomSync',
            phoneNumber: '08111111111',
            email: 'tech@shroomsync.id',
            passwordHash: defaultPassword,
            role: client_1.UserRole.TECHNICIAN,
            status: client_1.UserStatus.ACTIVE,
            profileCompleted: true,
            mustChangePassword: false,
            activatedAt: new Date(),
        },
    });
    logger_1.logger.info(`✅ Technician ready: ${technician.email} (${technician.phoneNumber})`);
    // 2. Seed Default Admin
    const admin = await prismaConfig_1.prisma.user.upsert({
        where: { phoneNumber: '08222222222' },
        update: {},
        create: {
            fullName: 'Super Admin ShroomSync',
            phoneNumber: '08222222222',
            email: 'admin@shroomsync.id',
            passwordHash: defaultPassword,
            role: client_1.UserRole.ADMIN,
            status: client_1.UserStatus.ACTIVE,
            profileCompleted: true,
            mustChangePassword: false,
            activatedAt: new Date(),
            createdById: technician.id,
        },
    });
    logger_1.logger.info(`✅ Admin ready: ${admin.email} (${admin.phoneNumber})`);
    // 3. Seed Demo Farmer
    const farmer = await prismaConfig_1.prisma.user.upsert({
        where: { phoneNumber: '08333333333' },
        update: {},
        create: {
            fullName: 'Budi Santoso (Petani Demo)',
            phoneNumber: '08333333333',
            email: 'farmer@shroomsync.id',
            passwordHash: defaultPassword,
            role: client_1.UserRole.FARMER,
            status: client_1.UserStatus.ACTIVE,
            profileCompleted: true,
            mustChangePassword: false,
            activatedAt: new Date(),
            createdById: admin.id,
        },
    });
    logger_1.logger.info(`✅ Demo Farmer ready: ${farmer.email} (${farmer.phoneNumber})`);
    // 4. Seed Demo IoT Device
    const demoDevice = await prismaConfig_1.prisma.device.upsert({
        where: { serialNumber: 'SS-0426-001' },
        update: {
            farmerId: farmer.id,
            status: client_1.DeviceStatus.ACTIVE,
        },
        create: {
            serialNumber: 'SS-0426-001',
            activationCode: 'SCM-DEMO-2026',
            name: 'Kumbung Barat - Tiram Putih',
            model: 'ShroomSync Smart Node v2',
            hardwareVersion: '2.0',
            firmwareVersion: '2.1.0',
            status: client_1.DeviceStatus.ACTIVE,
            ownershipType: client_1.OwnershipType.OWNED,
            controlMode: client_1.ControlMode.AUTO,
            farmerId: farmer.id,
            createdById: technician.id,
            activatedAt: new Date(),
            lastSeenAt: new Date(),
        },
    });
    logger_1.logger.info(`✅ Demo Device ready: ${demoDevice.name} [${demoDevice.serialNumber}]`);
    // 5. Seed Device Settings
    await prismaConfig_1.prisma.deviceSetting.upsert({
        where: { deviceId: demoDevice.id },
        update: {},
        create: {
            deviceId: demoDevice.id,
            minTemperature: 22.0,
            maxTemperature: 28.0,
            minHumidity: 80.0,
            maxHumidity: 92.0,
            timerDurationSeconds: 150,
            telemetryIntervalSec: 60,
        },
    });
    // 6. Seed Actuators (Pompa Kabut & Sirkulasi Lantai)
    await prismaConfig_1.prisma.actuator.upsert({
        where: {
            deviceId_channel: {
                deviceId: demoDevice.id,
                channel: 1,
            },
        },
        update: {},
        create: {
            deviceId: demoDevice.id,
            channel: 1,
            name: 'Pompa Pengkabutan Atas',
            type: client_1.ActuatorType.PUMP,
            state: client_1.ActuatorState.OFF,
            isEnabled: true,
        },
    });
    await prismaConfig_1.prisma.actuator.upsert({
        where: {
            deviceId_channel: {
                deviceId: demoDevice.id,
                channel: 2,
            },
        },
        update: {},
        create: {
            deviceId: demoDevice.id,
            channel: 2,
            name: 'Pompa Lantai / Humidifikasi Bawah',
            type: client_1.ActuatorType.FLOOR,
            state: client_1.ActuatorState.OFF,
            isEnabled: true,
        },
    });
    // 7. Seed Initial Cultivation Cycle & Sample Harvest
    let cycle = await prismaConfig_1.prisma.cultivationCycle.findFirst({
        where: { deviceId: demoDevice.id, status: 'active' },
    });
    if (!cycle) {
        const startedAt = new Date();
        startedAt.setDate(startedAt.getDate() - 25); // 25 days ago
        cycle = await prismaConfig_1.prisma.cultivationCycle.create({
            data: {
                deviceId: demoDevice.id,
                name: 'Siklus Mei 2026 - Kumbung Barat',
                mushroomType: 'Jamur Tiram',
                strain: 'Tiram Putih Florida',
                baglogCount: 1200,
                startedAt,
                status: 'active',
                notes: 'Bibit F2 unggul kultur jaringan',
            },
        });
        // Sample Harvests
        const harvest1Date = new Date();
        harvest1Date.setDate(harvest1Date.getDate() - 10);
        await prismaConfig_1.prisma.harvestRecord.create({
            data: {
                cycleId: cycle.id,
                harvestedAt: harvest1Date,
                weightKg: 18.5,
                pricePerKg: 18000,
                grade: 'A',
                notes: 'Panen flush pertama',
            },
        });
        const harvest2Date = new Date();
        harvest2Date.setDate(harvest2Date.getDate() - 3);
        await prismaConfig_1.prisma.harvestRecord.create({
            data: {
                cycleId: cycle.id,
                harvestedAt: harvest2Date,
                weightKg: 22.0,
                pricePerKg: 18000,
                grade: 'A',
                notes: 'Panen flush kedua - ukuran mekar seragam',
            },
        });
        logger_1.logger.info(`✅ Sample Cultivation Cycle & Harvests created for ${demoDevice.name}`);
    }
    logger_1.logger.info('🎉 Database seeding berhasil diselesaikan dengan sempurna!');
}
main()
    .catch((e) => {
    logger_1.logger.error('Error saat menjalankan database seed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prismaConfig_1.prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map