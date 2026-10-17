import { prisma } from '../bin/prismaConfig';
import { ensureDefaultTechnician } from './ensure-default-technician';
import { mqttService } from '../services/mqtt.service';
import { firebaseService } from '../services/firebase.service';
import { DeviceStatus } from '../src/generated/prisma/client';
import { logger } from '../utils/logger';

export function startOfflineDeviceMonitor(intervalMs = 30000, offlineThresholdMs = 120000): NodeJS.Timeout {
  const check = async () => {
    try {
      const thresholdDate = new Date(Date.now() - offlineThresholdMs);
      
      // Ambil perangkat yang akan beralih ke OFFLINE untuk dikirimkan notifikasi
      const devicesGoingOffline = await prisma.device.findMany({
        where: {
          status: DeviceStatus.ACTIVE,
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

      const result = await prisma.device.updateMany({
        where: {
          status: DeviceStatus.ACTIVE,
          OR: [
            { lastSeenAt: { lt: thresholdDate } },
            { lastSeenAt: null },
          ],
        },
        data: {
          status: DeviceStatus.OFFLINE,
        },
      });

      if (result.count > 0) {
        logger.info(`[DeviceMonitor] ${result.count} perangkat diubah ke status OFFLINE (inaktif > 2 menit)`);
        for (const dev of devicesGoingOffline) {
          void firebaseService.notifyDeviceOffline(dev);
        }
      }
    } catch (err) {
      logger.error('[DeviceMonitor] Gagal memeriksa status perangkat offline:', err);
    }
  };

  void check();
  const timer = setInterval(() => {
    void check();
  }, intervalMs);
  timer.unref();
  return timer;
}

export async function bootstrapApp(): Promise<void> {
  await prisma.$connect();

  await ensureDefaultTechnician();

  mqttService.initialize();

  startOfflineDeviceMonitor();
}