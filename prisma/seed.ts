import bcrypt from 'bcrypt';
import { prisma } from '../bin/prismaConfig';
import {
  UserRole,
  UserStatus,
  DeviceStatus,
  ControlMode,
  OwnershipType,
  ActuatorType,
  ActuatorState,
} from '../src/generated/prisma/client';
import { logger } from '../utils/logger';

async function main(): Promise<void> {
  logger.info('🌱 Memulai proses seeding database ShroomSync...');

  const defaultPassword = await bcrypt.hash('Password123!', 10);

  // 1. Seed Default Technician
  const technician = await prisma.user.upsert({
    where: { phoneNumber: '08111111111' },
    update: {},
    create: {
      fullName: 'Head Technician ShroomSync',
      phoneNumber: '08111111111',
      email: 'tech@shroomsync.id',
      passwordHash: defaultPassword,
      role: UserRole.TECHNICIAN,
      status: UserStatus.ACTIVE,
      profileCompleted: true,
      mustChangePassword: false,
      activatedAt: new Date(),
    },
  });
  logger.info(`✅ Technician ready: ${technician.email} (${technician.phoneNumber})`);

  // 2. Seed Default Admin
  const admin = await prisma.user.upsert({
    where: { phoneNumber: '08222222222' },
    update: {},
    create: {
      fullName: 'Super Admin ShroomSync',
      phoneNumber: '08222222222',
      email: 'admin@shroomsync.id',
      passwordHash: defaultPassword,
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      profileCompleted: true,
      mustChangePassword: false,
      activatedAt: new Date(),
      createdById: technician.id,
    },
  });
  logger.info(`✅ Admin ready: ${admin.email} (${admin.phoneNumber})`);

  // 3. Seed Demo Farmer
  const farmer = await prisma.user.upsert({
    where: { phoneNumber: '08333333333' },
    update: {},
    create: {
      fullName: 'Budi Santoso (Petani Demo)',
      phoneNumber: '08333333333',
      email: 'farmer@shroomsync.id',
      passwordHash: defaultPassword,
      role: UserRole.FARMER,
      status: UserStatus.ACTIVE,
      profileCompleted: true,
      mustChangePassword: false,
      activatedAt: new Date(),
      createdById: admin.id,
    },
  });
  logger.info(`✅ Demo Farmer ready: ${farmer.email} (${farmer.phoneNumber})`);

  // 4. Seed Demo IoT Device
  const demoDevice = await prisma.device.upsert({
    where: { serialNumber: 'SS-0426-001' },
    update: {
      farmerId: farmer.id,
      status: DeviceStatus.ACTIVE,
    },
    create: {
      serialNumber: 'SS-0426-001',
      activationCode: 'SCM-DEMO-2026',
      name: 'Kumbung Barat - Tiram Putih',
      model: 'ShroomSync Smart Node v2',
      hardwareVersion: '2.0',
      firmwareVersion: '2.1.0',
      status: DeviceStatus.ACTIVE,
      ownershipType: OwnershipType.OWNED,
      controlMode: ControlMode.AUTO,
      farmerId: farmer.id,
      createdById: technician.id,
      activatedAt: new Date(),
      lastSeenAt: new Date(),
    },
  });
  logger.info(`✅ Demo Device ready: ${demoDevice.name} [${demoDevice.serialNumber}]`);

  // 5. Seed Device Settings
  await prisma.deviceSetting.upsert({
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
  await prisma.actuator.upsert({
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
      type: ActuatorType.PUMP,
      state: ActuatorState.OFF,
      isEnabled: true,
    },
  });

  await prisma.actuator.upsert({
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
      type: ActuatorType.FLOOR,
      state: ActuatorState.OFF,
      isEnabled: true,
    },
  });

  // 7. Seed Initial Cultivation Cycle & Sample Harvest
  let cycle = await prisma.cultivationCycle.findFirst({
    where: { deviceId: demoDevice.id, status: 'active' },
  });

  if (!cycle) {
    const startedAt = new Date();
    startedAt.setDate(startedAt.getDate() - 25); // 25 days ago

    cycle = await prisma.cultivationCycle.create({
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
    await prisma.harvestRecord.create({
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
    await prisma.harvestRecord.create({
      data: {
        cycleId: cycle.id,
        harvestedAt: harvest2Date,
        weightKg: 22.0,
        pricePerKg: 18000,
        grade: 'A',
        notes: 'Panen flush kedua - ukuran mekar seragam',
      },
    });

    logger.info(`✅ Sample Cultivation Cycle & Harvests created for ${demoDevice.name}`);
  }

  logger.info('🎉 Database seeding berhasil diselesaikan dengan sempurna!');
}

main()
  .catch((e) => {
    logger.error('Error saat menjalankan database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

