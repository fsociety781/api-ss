"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const mqtt_service_1 = require("../../services/mqtt.service");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const device_identity_1 = require("../../utils/device-identity");
const activateDeviceSchema = zod_1.z.object({
    deviceId: zod_1.z.string().min(1, 'Device ID / Serial Number wajib diisi'),
    name: zod_1.z.string().optional(),
    activationCode: zod_1.z.string().optional(),
    macAddress: zod_1.z.string().optional(),
});
const createDeviceSchema = zod_1.z.object({
    deviceId: zod_1.z.string().optional(),
    serialNumber: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    hardwareVersion: zod_1.z.string().default('1.0'),
    firmwareVersion: zod_1.z.string().default('1.1.0'),
    macAddress: zod_1.z.string().optional(),
});
const telemetryIngestSchema = zod_1.z.object({
    serialNumber: zod_1.z.string().min(1, 'Serial number wajib diisi'),
    activationCode: zod_1.z.string().min(1, 'Activation code wajib diisi'),
    temperature: zod_1.z.coerce.number(),
    humidity: zod_1.z.coerce.number(),
    rssi: zod_1.z.coerce.number().optional(),
    rssiDbm: zod_1.z.coerce.number().optional(),
    rssi_dbm: zod_1.z.coerce.number().optional(),
    uptime: zod_1.z.coerce.number().optional(),
    uptimeMs: zod_1.z.coerce.number().optional(),
    uptime_ms: zod_1.z.coerce.number().optional(),
    actuatorStates: zod_1.z
        .record(zod_1.z.string(), zod_1.z.enum(['ON', 'OFF', 'UNKNOWN']))
        .optional(),
});
function formatDevice(device) {
    // Batas toleransi offline: 2 menit (120 detik) tanpa data
    const TWO_MINUTES_MS = 2 * 60 * 1000;
    const twoMinutesAgo = new Date(Date.now() - TWO_MINUTES_MS);
    const isOnline = Boolean(device.status !== 'SUSPENDED' &&
        device.lastSeenAt &&
        new Date(device.lastSeenAt) >= twoMinutesAgo);
    const computedStatus = !isOnline && (device.status === 'ACTIVE' || !device.status)
        ? 'OFFLINE'
        : device.status;
    const pumpActuator = device.actuators?.find((a) => a.type === 'PUMP' || a.name?.toLowerCase().includes('pump'));
    const fanActuator = device.actuators?.find((a) => a.type === 'MISTING' ||
        a.type === 'FLOOR_WATERING' ||
        a.name?.toLowerCase().includes('fan'));
    return {
        id: device.id,
        deviceId: device.serialNumber,
        name: device.name ?? device.serialNumber,
        userId: device.farmerId,
        farmerId: device.farmerId,
        farmer: device.farmer ?? null,
        assignedFarmer: device.farmer?.fullName ?? null,
        ownerName: device.farmer?.fullName ?? null,
        farmerName: device.farmer?.fullName ?? null,
        status: computedStatus,
        activatedAt: device.activatedAt,
        hardwareVersion: device.hardwareVersion ?? '1.0',
        firmwareVersion: device.firmwareVersion ?? '1.0.0',
        isOnline,
        signalStrength: isOnline
            ? (device.rssiDbm != null ? (device.rssiDbm >= -70 ? 'Good' : 'Fair') : 'Good')
            : 'Offline',
        rssiDbm: device.rssiDbm != null ? device.rssiDbm : (isOnline ? -65 : null),
        uptimeMs: device.uptimeMs != null ? Number(device.uptimeMs) : (isOnline ? 3600000 : null),
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
                farmer: {
                    select: {
                        id: true,
                        fullName: true,
                        phoneNumber: true,
                        email: true,
                    },
                },
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
        const identifier = parsed.deviceId.trim();
        const cleanActivationCode = parsed.activationCode?.trim().toUpperCase();
        // 1. Cari perangkat berdasarkan serialNumber atau ID
        let device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [
                    { serialNumber: identifier },
                    { id: identifier },
                ],
            },
            include: {
                setting: true,
                actuators: true,
            },
        });
        // 2. Jika perangkat belum ada di DB: Auto-provision (gunakan activationCode yang diinput user atau generate baru)
        if (!device) {
            const activationCodeToUse = cleanActivationCode ||
                `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
            device = await prismaConfig_1.prisma.$transaction(async (tx) => {
                const d = await tx.device.create({
                    data: {
                        serialNumber: identifier,
                        activationCode: activationCodeToUse,
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
            mqtt_service_1.mqttService.publishActivationStatus(device.serialNumber, true, req.user.fullName || req.user.phoneNumber || 'Petani', 'Perangkat baru berhasil didaftarkan dan diaktivasi');
            api_response_1.ApiResponse.success(res, formatDevice(device), 'Perangkat baru berhasil didaftarkan dan diaktivasi ke akun Anda', 200);
            return;
        }
        // 3. Jika perangkat sudah terdaftar: Cek kepemilikan
        if (device.farmerId && device.farmerId !== req.user.id) {
            throw new errors_1.ConflictError('Perangkat ini sudah diaktivasi oleh akun petani lain. Hubungi administrator.');
        }
        // 4. Validasi Kode Aktivasi jika perangkat memiliki activationCode terdaftar
        if (device.activationCode) {
            if (!cleanActivationCode) {
                // Jika perangkat belum pernah diaktifkan (masih READY) dan mewajibkan kode aktivasi
                if (device.status === client_1.DeviceStatus.READY || !device.farmerId) {
                    throw new errors_1.BadRequestError('Kode aktivasi wajib diisi untuk perangkat ini (silakan lihat pada stiker fisik alat).');
                }
            }
            else if (cleanActivationCode !== device.activationCode.trim().toUpperCase()) {
                throw new errors_1.BadRequestError('Kode aktivasi tidak valid atau tidak cocok dengan stiker perangkat ini.');
            }
        }
        // 5. Update data perangkat dan hubungkan ke petani
        const inputMac = (parsed.macAddress || req.body.mac_address || req.body.macAddress || '')?.trim() || null;
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: req.user.id,
                status: client_1.DeviceStatus.ACTIVE,
                name: parsed.name ?? device.name,
                activatedAt: device.activatedAt ?? new Date(),
                ...(inputMac && (!device.macAddress || device.macAddress !== inputMac) ? { macAddress: inputMac } : {}),
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
                setting: true,
                actuators: true,
            },
        });
        mqtt_service_1.mqttService.publishActivationStatus(updated.serialNumber, true, req.user.fullName || req.user.phoneNumber || 'Petani', 'Perangkat berhasil diaktivasi dan ditautkan ke akun Anda');
        api_response_1.ApiResponse.success(res, formatDevice(updated), 'Perangkat berhasil diaktivasi dan ditautkan ke akun Anda', 200);
    },
    /**
     * POST /api/v1/devices/unpair/:deviceId
     */
    unpairDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        // Hanya Admin atau Teknisi yang diizinkan melepas tautan (unpair) dari petani
        if (req.user.role !== 'ADMIN' && req.user.role !== 'TECHNICIAN') {
            throw new errors_1.ForbiddenError('Hanya Administrator yang memiliki wewenang untuk melepas tautan (unpair) perangkat dari petani');
        }
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
            include: { setting: true, actuators: true },
        });
        mqtt_service_1.mqttService.publishActivationStatus(updated.serialNumber, false, '', 'Perangkat berhasil dilepas dari penugasan petani');
        api_response_1.ApiResponse.success(res, formatDevice(updated), 'Perangkat berhasil dilepas dari penugasan petani');
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
                farmer: {
                    select: {
                        id: true,
                        fullName: true,
                        phoneNumber: true,
                        email: true,
                    },
                },
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
        // Ownership check if user is a farmer
        if (req.user &&
            req.user.role !== 'ADMIN' &&
            req.user.role !== 'TECHNICIAN' &&
            device.farmerId !== req.user.id) {
            throw new errors_1.ForbiddenError('Anda tidak memiliki akses ke perangkat ini');
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
            (await (0, device_identity_1.getNextSerialNumber)());
        const existing = await prismaConfig_1.prisma.device.findUnique({
            where: { serialNumber: sn },
        });
        if (existing) {
            throw new errors_1.ConflictError(`Device "${sn}" already exists`);
        }
        const macAddress = parsed.macAddress?.trim() || null;
        const device = await prismaConfig_1.prisma.device.create({
            data: {
                serialNumber: sn,
                activationCode: `ACT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                name: parsed.name ?? `Kumbung ${sn}`,
                model: 'SS-ESP32-V1',
                hardwareVersion: parsed.hardwareVersion,
                firmwareVersion: parsed.firmwareVersion,
                macAddress,
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
        // Generate identity JSON for firmware injection
        const deviceIdentity = (0, device_identity_1.buildDeviceIdentity)({
            serialNumber: device.serialNumber,
            hardwareVersion: device.hardwareVersion,
            firmwareVersion: device.firmwareVersion,
            macAddress: device.macAddress,
            createdAt: device.createdAt,
        });
        (0, device_identity_1.saveDeviceIdentityFile)(deviceIdentity);
        api_response_1.ApiResponse.success(res, {
            ...formatDevice(device),
            deviceIdentity,
            identityFile: `${device.serialNumber}.json`,
        }, 'Device created successfully', 201);
    },
    getDeviceIdentity: async (req, res) => {
        const { deviceId } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                OR: [{ id: deviceId }, { serialNumber: deviceId }],
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError(`Device "${deviceId}" not found`);
        }
        const identity = (0, device_identity_1.buildDeviceIdentity)({
            serialNumber: device.serialNumber,
            hardwareVersion: device.hardwareVersion,
            firmwareVersion: device.firmwareVersion,
            macAddress: device.macAddress,
            createdAt: device.createdAt,
        });
        (0, device_identity_1.saveDeviceIdentityFile)(identity);
        const shouldDownload = req.query.download === 'true' || req.query.download === '1';
        if (shouldDownload) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Disposition', `attachment; filename="${device.serialNumber}.json"`);
            res.send(JSON.stringify(identity, null, 2));
            return;
        }
        api_response_1.ApiResponse.success(res, identity, 'Identitas perangkat berhasil dimuat');
    },
    getNextSerial: async (_req, res) => {
        const nextSerialNumber = await (0, device_identity_1.getNextSerialNumber)();
        const info = (0, device_identity_1.parseSerialNumber)(nextSerialNumber);
        api_response_1.ApiResponse.success(res, {
            nextSerialNumber,
            format: 'SS-MMYY-NNN',
            description: info?.description ?? 'Format serial number produksi bermakna',
            batch: info?.batch,
        }, 'Rekomendasi serial number berhasil dimuat');
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
        // Only Admin or Technician can delete devices
        if (req.user &&
            req.user.role !== 'ADMIN' &&
            req.user.role !== 'TECHNICIAN') {
            throw new errors_1.ForbiddenError('Hanya admin atau teknisi yang dapat menghapus perangkat');
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
        const rawRssi = parsed.rssi ?? parsed.rssiDbm ?? parsed.rssi_dbm;
        const rawUptime = parsed.uptime ?? parsed.uptimeMs ?? parsed.uptime_ms;
        const rssi = rawRssi != null && !isNaN(Number(rawRssi)) ? Math.round(Number(rawRssi)) : null;
        const uptime = rawUptime != null && !isNaN(Number(rawUptime)) ? BigInt(Math.round(Number(rawUptime))) : null;
        const nextStatus = (device.status === client_1.DeviceStatus.OFFLINE || device.status === client_1.DeviceStatus.READY) && device.farmerId
            ? client_1.DeviceStatus.ACTIVE
            : device.status;
        await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                lastSeenAt: now,
                status: nextStatus,
                ...(rssi != null ? { rssiDbm: rssi } : {}),
                ...(uptime != null ? { uptimeMs: uptime } : {}),
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
        const now = new Date();
        const rawRssi = req.body.rssi ?? req.body.rssi_dbm ?? req.body.rssiDbm;
        const rawUptime = req.body.uptime ?? req.body.uptime_ms ?? req.body.uptimeMs;
        const rssi = rawRssi != null && !isNaN(Number(rawRssi)) ? Math.round(Number(rawRssi)) : null;
        const uptime = rawUptime != null && !isNaN(Number(rawUptime)) ? BigInt(Math.round(Number(rawUptime))) : null;
        const fw = req.body.firmwareVersion ?? req.body.firmware_version;
        const hw = req.body.hardwareVersion ?? req.body.hardware_version;
        const mac = (req.body.macAddress ?? req.body.mac_address)?.trim() || null;
        const nextStatus = (device.status === client_1.DeviceStatus.OFFLINE || device.status === client_1.DeviceStatus.READY) && device.farmerId
            ? client_1.DeviceStatus.ACTIVE
            : device.status;
        await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                lastSeenAt: now,
                status: nextStatus,
                ...(mac && (!device.macAddress || device.macAddress !== mac) ? { macAddress: mac } : {}),
                ...(rssi != null ? { rssiDbm: rssi } : {}),
                ...(uptime != null ? { uptimeMs: uptime } : {}),
                ...(fw ? { firmwareVersion: String(fw) } : {}),
                ...(hw ? { hardwareVersion: String(hw) } : {}),
            },
        });
        api_response_1.ApiResponse.success(res, { online: true, serverTime: now });
    },
};
//# sourceMappingURL=index.js.map