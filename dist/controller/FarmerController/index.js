"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmerController = void 0;
const zod_1 = require("zod");
const prismaConfig_1 = require("../../bin/prismaConfig");
const api_response_1 = require("../../utils/api-response");
const errors_1 = require("../../utils/errors");
const client_1 = require("../../src/generated/prisma/client");
const mushroom_presets_1 = require("../../utils/mushroom-presets");
const claimDeviceSchema = zod_1.z.object({
    serialNumber: zod_1.z.string().min(1, 'Serial number perangkat wajib diisi'),
    activationCode: zod_1.z.string().min(1, 'Kode aktivasi wajib diisi'),
    name: zod_1.z.string().optional(),
});
const setControlModeSchema = zod_1.z.object({
    mode: zod_1.z.enum(['MANUAL', 'AUTO', 'HYBRID', 'SCHEDULE']),
});
const toggleActuatorSchema = zod_1.z.object({
    action: zod_1.z.enum(['TURN_ON', 'TURN_OFF']),
});
const updateSettingsSchema = zod_1.z.object({
    minTemperature: zod_1.z.number().min(0).max(100).optional(),
    maxTemperature: zod_1.z.number().min(0).max(100).optional(),
    minHumidity: zod_1.z.number().min(0).max(100).optional(),
    maxHumidity: zod_1.z.number().min(0).max(100).optional(),
    timerDurationSeconds: zod_1.z.number().int().positive().optional(),
    telemetryIntervalSec: zod_1.z.number().int().min(10).max(3600).optional(),
});
const createScheduleSchema = zod_1.z.object({
    actuatorId: zod_1.z.string().min(1, 'Actuator ID wajib diisi'),
    name: zod_1.z.string().min(2, 'Nama jadwal wajib diisi'),
    action: zod_1.z.enum(['TURN_ON', 'TURN_OFF']).default('TURN_ON'),
    startMinute: zod_1.z.number().int().min(0).max(1439),
    durationSeconds: zod_1.z.number().int().positive().optional(),
    daysOfWeek: zod_1.z.array(zod_1.z.number().int().min(0).max(6)).min(1),
    isEnabled: zod_1.z.boolean().default(true),
});
const bulkToggleSchema = zod_1.z.object({
    actuatorType: zod_1.z.enum([
        'FLOOR',
        'PUMP',
        'MISTING',
        'FLOOR_WATERING',
        'LIGHT',
        'OTHER',
    ]),
    action: zod_1.z.enum(['TURN_ON', 'TURN_OFF']),
});
exports.FarmerController = {
    // ==========================================
    // DASHBOARD & OVERVIEW
    // ==========================================
    getDashboard: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        const devices = await prismaConfig_1.prisma.device.findMany({
            where: { farmerId: req.user.id },
            include: {
                setting: true,
                actuators: {
                    orderBy: { channel: 'asc' },
                },
                sensorReadings: {
                    take: 1,
                    orderBy: { recordedAt: 'desc' },
                },
            },
        });
        let totalOnline = 0;
        let totalAlerts = 0;
        const deviceSummaries = devices.map((d) => {
            const isOnline = d.lastSeenAt ? d.lastSeenAt >= tenMinutesAgo : false;
            if (isOnline)
                totalOnline++;
            const latestReading = d.sensorReadings[0] ?? null;
            const alerts = [];
            if (latestReading && d.setting) {
                const temp = Number(latestReading.temperature);
                const hum = Number(latestReading.humidity);
                if (d.setting.maxTemperature && temp > Number(d.setting.maxTemperature)) {
                    alerts.push('Suhu melebihi ambang batas maksimal');
                }
                else if (d.setting.minTemperature &&
                    temp < Number(d.setting.minTemperature)) {
                    alerts.push('Suhu di bawah ambang batas minimal');
                }
                if (d.setting.minHumidity && hum < Number(d.setting.minHumidity)) {
                    alerts.push('Kelembapan terlalu rendah');
                }
                else if (d.setting.maxHumidity &&
                    hum > Number(d.setting.maxHumidity)) {
                    alerts.push('Kelembapan melebihi ambang batas maksimal');
                }
            }
            if (alerts.length > 0)
                totalAlerts++;
            return {
                id: d.id,
                serialNumber: d.serialNumber,
                name: d.name,
                status: d.status,
                controlMode: d.controlMode,
                isOnline,
                lastSeenAt: d.lastSeenAt,
                latestReading: latestReading
                    ? {
                        temperature: Number(latestReading.temperature),
                        humidity: Number(latestReading.humidity),
                        recordedAt: latestReading.recordedAt,
                    }
                    : null,
                activeActuators: d.actuators.filter((a) => a.state === 'ON').length,
                totalActuators: d.actuators.length,
                alerts,
            };
        });
        // Recent 5 control logs
        const recentLogs = await prismaConfig_1.prisma.controlLog.findMany({
            where: {
                device: { farmerId: req.user.id },
            },
            orderBy: { requestedAt: 'desc' },
            take: 5,
            include: {
                actuator: { select: { name: true, type: true } },
                device: { select: { name: true, serialNumber: true } },
            },
        });
        api_response_1.ApiResponse.success(res, {
            totalDevices: devices.length,
            onlineDevices: totalOnline,
            offlineDevices: devices.length - totalOnline,
            devicesWithAlerts: totalAlerts,
            devices: deviceSummaries,
            recentActivity: recentLogs.map((log) => ({
                id: log.id.toString(),
                action: log.action,
                deviceName: log.device.name ?? log.device.serialNumber,
                actuatorName: log.actuator?.name ?? 'System',
                requestedAt: log.requestedAt,
                success: log.success,
            })),
        });
    },
    // ==========================================
    // MUSHROOM CULTIVATION PRESETS
    // ==========================================
    getPresets: async (_req, res) => {
        api_response_1.ApiResponse.success(res, Object.values(mushroom_presets_1.MUSHROOM_PRESETS));
    },
    applyPreset: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const { presetId } = req.body;
        if (!presetId || !mushroom_presets_1.MUSHROOM_PRESETS[presetId]) {
            throw new errors_1.BadRequestError(`Preset '${presetId}' tidak valid. Pilihan: ${Object.keys(mushroom_presets_1.MUSHROOM_PRESETS).join(', ')}`);
        }
        const preset = mushroom_presets_1.MUSHROOM_PRESETS[presetId];
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updatedSetting = await prismaConfig_1.prisma.deviceSetting.upsert({
            where: { deviceId: id },
            create: {
                deviceId: id,
                minTemperature: preset.minTemperature,
                maxTemperature: preset.maxTemperature,
                minHumidity: preset.minHumidity,
                maxHumidity: preset.maxHumidity,
                timerDurationSeconds: preset.timerDurationSeconds,
                telemetryIntervalSec: preset.telemetryIntervalSec,
            },
            update: {
                minTemperature: preset.minTemperature,
                maxTemperature: preset.maxTemperature,
                minHumidity: preset.minHumidity,
                maxHumidity: preset.maxHumidity,
                timerDurationSeconds: preset.timerDurationSeconds,
                telemetryIntervalSec: preset.telemetryIntervalSec,
            },
        });
        api_response_1.ApiResponse.success(res, { presetApplied: preset.name, setting: updatedSetting }, `Preset '${preset.name}' berhasil diterapkan ke ${device.name ?? device.serialNumber}`);
    },
    // ==========================================
    // BULK / EMERGENCY ACTUATOR CONTROL
    // ==========================================
    bulkToggleActuator: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = bulkToggleSchema.parse(req.body);
        const targetState = parsed.action === 'TURN_ON' ? client_1.ActuatorState.ON : client_1.ActuatorState.OFF;
        const userDevices = await prismaConfig_1.prisma.device.findMany({
            where: { farmerId: req.user.id },
            select: { id: true, controlMode: true },
        });
        const deviceIds = userDevices.map((d) => d.id);
        if (deviceIds.length === 0) {
            throw new errors_1.BadRequestError('Anda belum memiliki perangkat yang terdaftar');
        }
        const matchingActuators = await prismaConfig_1.prisma.actuator.findMany({
            where: {
                deviceId: { in: deviceIds },
                type: parsed.actuatorType,
            },
        });
        const now = new Date();
        await prismaConfig_1.prisma.$transaction(async (tx) => {
            await tx.actuator.updateMany({
                where: {
                    deviceId: { in: deviceIds },
                    type: parsed.actuatorType,
                },
                data: {
                    state: targetState,
                    lastChangedAt: now,
                },
            });
            for (const act of matchingActuators) {
                await tx.controlLog.create({
                    data: {
                        deviceId: act.deviceId,
                        actuatorId: act.id,
                        userId: req.user.id,
                        action: parsed.action,
                        source: client_1.ControlSource.MOBILE_APP,
                        mode: client_1.ControlMode.MANUAL,
                        success: true,
                        message: `[Bulk Control] ${act.name} diubah menjadi ${targetState}`,
                        executedAt: now,
                    },
                });
            }
        });
        api_response_1.ApiResponse.success(res, { affectedActuators: matchingActuators.length, targetState }, `Berhasil mengubah status ${matchingActuators.length} aktuator '${parsed.actuatorType}' menjadi ${targetState}`);
    },
    // ==========================================
    // STATISTICAL ANALYTICS
    // ==========================================
    getDeviceAnalytics: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const hours = parseInt(req.query.hours || '24', 10);
        const sinceDate = new Date(Date.now() - hours * 60 * 60 * 1000);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
            include: { setting: true },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const readings = await prismaConfig_1.prisma.sensorReading.findMany({
            where: {
                deviceId: id,
                recordedAt: { gte: sinceDate },
            },
            orderBy: { recordedAt: 'asc' },
        });
        if (readings.length === 0) {
            api_response_1.ApiResponse.success(res, {
                dataPoints: 0,
                message: 'Belum ada data sensor dalam periode ini',
            });
            return;
        }
        let minTemp = Infinity;
        let maxTemp = -Infinity;
        let sumTemp = 0;
        let minHum = Infinity;
        let maxHum = -Infinity;
        let sumHum = 0;
        let optimalCount = 0;
        for (const r of readings) {
            const temp = Number(r.temperature);
            const hum = Number(r.humidity);
            if (temp < minTemp)
                minTemp = temp;
            if (temp > maxTemp)
                maxTemp = temp;
            sumTemp += temp;
            if (hum < minHum)
                minHum = hum;
            if (hum > maxHum)
                maxHum = hum;
            sumHum += hum;
            const setting = device.setting;
            const isTempOptimal = !setting?.minTemperature ||
                !setting?.maxTemperature ||
                (temp >= Number(setting.minTemperature) &&
                    temp <= Number(setting.maxTemperature));
            const isHumOptimal = !setting?.minHumidity ||
                !setting?.maxHumidity ||
                (hum >= Number(setting.minHumidity) &&
                    hum <= Number(setting.maxHumidity));
            if (isTempOptimal && isHumOptimal) {
                optimalCount++;
            }
        }
        const count = readings.length;
        const avgTemp = +(sumTemp / count).toFixed(2);
        const avgHum = +(sumHum / count).toFixed(2);
        const optimalPercentage = +((optimalCount / count) * 100).toFixed(1);
        api_response_1.ApiResponse.success(res, {
            periodHours: hours,
            dataPoints: count,
            temperature: {
                current: Number(readings[readings.length - 1].temperature),
                avg: avgTemp,
                min: minTemp,
                max: maxTemp,
            },
            humidity: {
                current: Number(readings[readings.length - 1].humidity),
                avg: avgHum,
                min: minHum,
                max: maxHum,
            },
            optimalEnvironmentalHealthPercent: optimalPercentage,
            settings: device.setting,
        });
    },
    // ==========================================
    // DEVICE CLAIMING & LISTING
    // ==========================================
    claimDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const parsed = claimDeviceSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                serialNumber: parsed.serialNumber,
                activationCode: parsed.activationCode,
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan atau kode aktivasi salah');
        }
        if (device.farmerId && device.farmerId !== req.user.id) {
            throw new errors_1.ConflictError('Perangkat ini sudah diklaim oleh petani/akun lain');
        }
        const claimedDevice = await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: {
                farmerId: req.user.id,
                status: client_1.DeviceStatus.ACTIVE,
                name: parsed.name ?? device.name ?? `Kumbung ${device.serialNumber}`,
                activatedAt: device.activatedAt ?? new Date(),
            },
            include: {
                setting: true,
                actuators: {
                    orderBy: { channel: 'asc' },
                },
            },
        });
        api_response_1.ApiResponse.success(res, claimedDevice, 'Perangkat berhasil diklaim dan ditautkan ke akun Anda', 200);
    },
    listMyDevices: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const devices = await prismaConfig_1.prisma.device.findMany({
            where: { farmerId: req.user.id },
            orderBy: { createdAt: 'desc' },
            include: {
                setting: true,
                actuators: {
                    orderBy: { channel: 'asc' },
                },
                sensorReadings: {
                    take: 1,
                    orderBy: { recordedAt: 'desc' },
                },
            },
        });
        api_response_1.ApiResponse.success(res, devices);
    },
    getMyDeviceById: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: {
                id,
                farmerId: req.user.id,
            },
            include: {
                setting: true,
                actuators: {
                    orderBy: { channel: 'asc' },
                },
                sensorReadings: {
                    take: 20,
                    orderBy: { recordedAt: 'desc' },
                },
                controlLogs: {
                    take: 10,
                    orderBy: { requestedAt: 'desc' },
                },
                schedules: {
                    include: {
                        actuator: true,
                    },
                },
            },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan atau Anda tidak memiliki akses');
        }
        api_response_1.ApiResponse.success(res, device);
    },
    unclaimDevice: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        await prismaConfig_1.prisma.device.update({
            where: { id },
            data: {
                farmerId: null,
                status: client_1.DeviceStatus.READY,
            },
        });
        api_response_1.ApiResponse.success(res, null, 'Perangkat berhasil dilepas dari akun Anda');
    },
    // ==========================================
    // CONTROL & ACTUATORS
    // ==========================================
    setControlMode: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const parsed = setControlModeSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updated = await prismaConfig_1.prisma.device.update({
            where: { id },
            data: { controlMode: parsed.mode },
        });
        api_response_1.ApiResponse.success(res, updated, `Mode kontrol perangkat berhasil diubah menjadi ${parsed.mode}`);
    },
    toggleActuator: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id, actuatorId } = req.params;
        const parsed = toggleActuatorSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const actuator = await prismaConfig_1.prisma.actuator.findFirst({
            where: { id: actuatorId, deviceId: id },
        });
        if (!actuator) {
            throw new errors_1.NotFoundError('Aktuator tidak ditemukan pada perangkat ini');
        }
        const targetState = parsed.action === 'TURN_ON' ? client_1.ActuatorState.ON : client_1.ActuatorState.OFF;
        const [updatedActuator] = await prismaConfig_1.prisma.$transaction([
            prismaConfig_1.prisma.actuator.update({
                where: { id: actuatorId },
                data: {
                    state: targetState,
                    lastChangedAt: new Date(),
                },
            }),
            prismaConfig_1.prisma.controlLog.create({
                data: {
                    deviceId: id,
                    actuatorId,
                    userId: req.user.id,
                    action: parsed.action,
                    source: client_1.ControlSource.MOBILE_APP,
                    mode: device.controlMode,
                    success: true,
                    message: `Aktuator ${actuator.name} diubah menjadi ${targetState}`,
                    executedAt: new Date(),
                },
            }),
        ]);
        api_response_1.ApiResponse.success(res, updatedActuator, `Status aktuator ${actuator.name} berhasil diubah menjadi ${targetState}`);
    },
    updateSettings: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const parsed = updateSettingsSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
            include: { setting: true },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const updatedSetting = await prismaConfig_1.prisma.deviceSetting.upsert({
            where: { deviceId: id },
            create: {
                deviceId: id,
                minTemperature: parsed.minTemperature ?? 24.0,
                maxTemperature: parsed.maxTemperature ?? 28.0,
                minHumidity: parsed.minHumidity ?? 80.0,
                maxHumidity: parsed.maxHumidity ?? 95.0,
                timerDurationSeconds: parsed.timerDurationSeconds ?? 300,
                telemetryIntervalSec: parsed.telemetryIntervalSec ?? 60,
            },
            update: {
                ...(parsed.minTemperature !== undefined && {
                    minTemperature: parsed.minTemperature,
                }),
                ...(parsed.maxTemperature !== undefined && {
                    maxTemperature: parsed.maxTemperature,
                }),
                ...(parsed.minHumidity !== undefined && {
                    minHumidity: parsed.minHumidity,
                }),
                ...(parsed.maxHumidity !== undefined && {
                    maxHumidity: parsed.maxHumidity,
                }),
                ...(parsed.timerDurationSeconds !== undefined && {
                    timerDurationSeconds: parsed.timerDurationSeconds,
                }),
                ...(parsed.telemetryIntervalSec !== undefined && {
                    telemetryIntervalSec: parsed.telemetryIntervalSec,
                }),
            },
        });
        api_response_1.ApiResponse.success(res, updatedSetting, 'Pengaturan setpoint dan parameter berhasil diperbarui');
    },
    // ==========================================
    // TELEMETRY & LOGS
    // ==========================================
    getTelemetryHistory: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const limit = Math.min(parseInt(req.query.limit || '50', 10), 500);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const readings = await prismaConfig_1.prisma.sensorReading.findMany({
            where: { deviceId: id },
            orderBy: { recordedAt: 'desc' },
            take: limit,
        });
        readings.reverse();
        const serialized = readings.map((r) => ({
            ...r,
            id: r.id.toString(),
        }));
        api_response_1.ApiResponse.success(res, serialized);
    },
    getControlLogs: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const limit = Math.min(parseInt(req.query.limit || '20', 10), 100);
        const logs = await prismaConfig_1.prisma.controlLog.findMany({
            where: {
                deviceId: id,
                device: { farmerId: req.user.id },
            },
            orderBy: { requestedAt: 'desc' },
            take: limit,
            include: {
                actuator: { select: { id: true, name: true, type: true } },
                user: { select: { id: true, fullName: true } },
            },
        });
        const serialized = logs.map((l) => ({
            ...l,
            id: l.id.toString(),
        }));
        api_response_1.ApiResponse.success(res, serialized);
    },
    // ==========================================
    // SCHEDULES
    // ==========================================
    listSchedules: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const schedules = await prismaConfig_1.prisma.schedule.findMany({
            where: {
                deviceId: id,
                device: { farmerId: req.user.id },
            },
            include: {
                actuator: true,
            },
            orderBy: { startMinute: 'asc' },
        });
        api_response_1.ApiResponse.success(res, schedules);
    },
    createSchedule: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id } = req.params;
        const parsed = createScheduleSchema.parse(req.body);
        const device = await prismaConfig_1.prisma.device.findFirst({
            where: { id, farmerId: req.user.id },
        });
        if (!device) {
            throw new errors_1.NotFoundError('Perangkat tidak ditemukan');
        }
        const actuator = await prismaConfig_1.prisma.actuator.findFirst({
            where: { id: parsed.actuatorId, deviceId: id },
        });
        if (!actuator) {
            throw new errors_1.NotFoundError('Aktuator tidak valid untuk perangkat ini');
        }
        const schedule = await prismaConfig_1.prisma.schedule.create({
            data: {
                deviceId: id,
                actuatorId: parsed.actuatorId,
                createdById: req.user.id,
                name: parsed.name,
                action: parsed.action,
                startMinute: parsed.startMinute,
                durationSeconds: parsed.durationSeconds ?? null,
                daysOfWeek: parsed.daysOfWeek,
                isEnabled: parsed.isEnabled,
            },
            include: {
                actuator: true,
            },
        });
        api_response_1.ApiResponse.success(res, schedule, 'Jadwal otomatisasi berhasil ditambahkan', 201);
    },
    deleteSchedule: async (req, res) => {
        if (!req.user) {
            throw new errors_1.UnauthorizedError('Otentikasi diperlukan');
        }
        const { id, scheduleId } = req.params;
        const schedule = await prismaConfig_1.prisma.schedule.findFirst({
            where: {
                id: scheduleId,
                deviceId: id,
                device: { farmerId: req.user.id },
            },
        });
        if (!schedule) {
            throw new errors_1.NotFoundError('Jadwal tidak ditemukan');
        }
        await prismaConfig_1.prisma.schedule.delete({
            where: { id: scheduleId },
        });
        api_response_1.ApiResponse.success(res, null, 'Jadwal berhasil dihapus');
    },
};
//# sourceMappingURL=index.js.map