"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfflineDeviceMonitor = startOfflineDeviceMonitor;
exports.bootstrapApp = bootstrapApp;
const prismaConfig_1 = require("../bin/prismaConfig");
const ensure_default_technician_1 = require("./ensure-default-technician");
const mqtt_service_1 = require("../services/mqtt.service");
const firebase_service_1 = require("../services/firebase.service");
const client_1 = require("../src/generated/prisma/client");
const logger_1 = require("../utils/logger");
function startOfflineDeviceMonitor(intervalMs = 30000, offlineThresholdMs = 120000) {
    const check = async () => {
        try {
            const thresholdDate = new Date(Date.now() - offlineThresholdMs);
            // Ambil perangkat yang akan beralih ke OFFLINE untuk dikirimkan notifikasi
            const devicesGoingOffline = await prismaConfig_1.prisma.device.findMany({
                where: {
                    status: client_1.DeviceStatus.ACTIVE,
                    farmerId: { not: null },
                    OR: [
                        { lastSeenAt: { lt: thresholdDate } },
                        { lastSeenAt: null },
                    ],
                },
                select: {
                    id: true,
                    serialNumber: true,
                    name: true,
                    farmerId: true,
                },
            });
            const result = await prismaConfig_1.prisma.device.updateMany({
                where: {
                    status: client_1.DeviceStatus.ACTIVE,
                    OR: [
                        { lastSeenAt: { lt: thresholdDate } },
                        { lastSeenAt: null },
                    ],
                },
                data: {
                    status: client_1.DeviceStatus.OFFLINE,
                },
            });
            if (result.count > 0) {
                logger_1.logger.info(`[DeviceMonitor] ${result.count} perangkat diubah ke status OFFLINE (inaktif > 2 menit)`);
                for (const dev of devicesGoingOffline) {
                    void firebase_service_1.firebaseService.notifyDeviceOffline(dev);
                }
            }
        }
        catch (err) {
            logger_1.logger.error('[DeviceMonitor] Gagal memeriksa status perangkat offline:', err);
        }
    };
    void check();
    const timer = setInterval(() => {
        void check();
    }, intervalMs);
    timer.unref();
    return timer;
}
async function bootstrapApp() {
    await prismaConfig_1.prisma.$connect();
    await (0, ensure_default_technician_1.ensureDefaultTechnician)();
    mqtt_service_1.mqttService.initialize();
    startOfflineDeviceMonitor();
}
//# sourceMappingURL=bootstrap-app.js.map