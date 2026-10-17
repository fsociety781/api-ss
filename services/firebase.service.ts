import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import path from 'path';
import fs from 'fs';
import { prisma } from '../bin/prismaConfig';
import { logger } from '../utils/logger';

class FirebaseService {
  private isInitialized = false;
  // Cooldown map to avoid spamming user with repeated alert notifications (key -> timestamp)
  private alertCooldowns = new Map<string, number>();

  constructor() {
    this.initFirebase();
  }

  private initFirebase() {
    try {
      if (getApps().length > 0) {
        this.isInitialized = true;
        return;
      }

      // Check for service account JSON file in config/ or root
      const possibleKeyPaths = [
        path.resolve(process.cwd(), 'firebase-service-account.json'),
        path.resolve(process.cwd(), 'config/firebase-service-account.json'),
        path.resolve(process.cwd(), 'storage/firebase-service-account.json'),
      ];

      let keyPath: string | null = null;
      for (const p of possibleKeyPaths) {
        if (fs.existsSync(p)) {
          keyPath = p;
          break;
        }
      }

      if (keyPath) {
        const serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
        initializeApp({
          credential: cert(serviceAccount),
        });
        this.isInitialized = true;
        logger.info(`[Firebase] Initialized with service account from: ${keyPath}`);
      } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
        initializeApp({
          credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          }),
        });
        this.isInitialized = true;
        logger.info('[Firebase] Initialized with environment variables');
      } else {
        logger.warn(
          '[Firebase] Firebase credentials not found. Push notifications will be logged in console until firebase-service-account.json is provided.',
        );
      }
    } catch (err: unknown) {
      logger.error('[Firebase] Failed to initialize Firebase Admin SDK:', err);
    }
  }

  /**
   * Send push notification directly to an FCM Device Token
   */
  async sendToToken(
    token: string,
    title: string,
    body: string,
    data: Record<string, string> = {},
  ): Promise<boolean> {
    if (!token || typeof token !== 'string') return false;

    if (!this.isInitialized) {
      logger.info(`[Firebase Mock Push] To Token [${token.substring(0, 15)}...]: "${title}" - "${body}"`);
      return true;
    }

    try {
      await getMessaging().send({
        token,
        notification: {
          title,
          body,
        },
        data: {
          ...data,
          click_action: 'FLUTTER_NOTIFICATION_CLICK',
        },
        android: {
          priority: 'high',
          notification: {
            channelId: 'shroomsync_alerts',
            sound: 'default',
            priority: 'high',
          },
        },
      });
      logger.info(`[Firebase] Push notification sent successfully to token: ${token.substring(0, 15)}...`);
      return true;
    } catch (err: any) {
      logger.error('[Firebase] Error sending push notification:', err?.message || err);

      // Clean up dead/unregistered tokens
      if (
        err?.code === 'messaging/registration-token-not-registered' ||
        err?.code === 'messaging/invalid-registration-token'
      ) {
        logger.warn(`[Firebase] Removing unregistered token from database: ${token.substring(0, 15)}...`);
        await prisma.user.updateMany({
          where: { fcmToken: token },
          data: { fcmToken: null },
        });
      }
      return false;
    }
  }

  /**
   * Send notification to a specific user by ID
   */
  async sendToUser(
    userId: string,
    title: string,
    body: string,
    data: Record<string, string> = {},
  ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, fcmToken: true, fullName: true },
    });

    if (!user || !user.fcmToken) {
      return false;
    }

    return this.sendToToken(user.fcmToken, title, body, data);
  }

  /**
   * Send notification to the farmer who owns the device
   */
  async sendToDeviceOwner(
    deviceIdOrSerial: string,
    title: string,
    body: string,
    data: Record<string, string> = {},
  ): Promise<boolean> {
    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: deviceIdOrSerial }, { serialNumber: deviceIdOrSerial }],
      },
      include: {
        farmer: {
          select: { id: true, fcmToken: true },
        },
      },
    });

    if (!device?.farmer?.fcmToken) {
      return false;
    }

    return this.sendToToken(device.farmer.fcmToken, title, body, {
      ...data,
      deviceId: device.id,
      serialNumber: device.serialNumber,
    });
  }

  /**
   * Check if alert is in cooldown (default cooldown: 15 minutes)
   */
  checkCooldown(key: string, cooldownMs = 15 * 60 * 1000): boolean {
    const now = Date.now();
    const lastSent = this.alertCooldowns.get(key) || 0;
    if (now - lastSent < cooldownMs) {
      return true; // Still in cooldown
    }
    this.alertCooldowns.set(key, now);
    return false; // Can send
  }

  /**
   * Send Alert for Offline Device with cooldown
   */
  async notifyDeviceOffline(device: { id: string; serialNumber: string; name?: string | null; farmerId?: string | null }) {
    if (!device.farmerId) return;
    const cooldownKey = `offline_${device.serialNumber}`;
    if (this.checkCooldown(cooldownKey, 30 * 60 * 1000)) return; // 30 min cooldown

    const deviceName = device.name || `SupaKu (${device.serialNumber})`;
    await this.sendToUser(
      device.farmerId,
      '⚠️ Perangkat Offline',
      `Unit ${deviceName} terputus dari jaringan dan tidak mengirimkan data selama lebih dari 2 menit.`,
      {
        type: 'DEVICE_OFFLINE',
        serialNumber: device.serialNumber,
      },
    );
  }

  /**
   * Send Alert for Critical Temperature / Humidity
   */
  async notifyTelemetryAlert(
    farmerId: string,
    device: { serialNumber: string; name?: string | null },
    metric: 'temperature' | 'humidity',
    value: number,
    limit: number,
    isHigh: boolean,
  ) {
    const cooldownKey = `telemetry_${device.serialNumber}_${metric}_${isHigh ? 'high' : 'low'}`;
    if (this.checkCooldown(cooldownKey, 15 * 60 * 1000)) return; // 15 min cooldown

    const deviceName = device.name || `SupaKu (${device.serialNumber})`;
    const title = metric === 'temperature' ? '🌡️ Peringatan Suhu Kumbung' : '💧 Peringatan Kelembaban Kumbung';
    const detail = metric === 'temperature'
      ? `Suhu di ${deviceName} ${isHigh ? 'terlalu tinggi' : 'terlalu rendah'}: ${value.toFixed(1)}°C (Batas: ${limit.toFixed(1)}°C).`
      : `Kelembaban di ${deviceName} ${isHigh ? 'terlalu tinggi' : 'terlalu rendah'}: ${value.toFixed(1)}% (Batas: ${limit.toFixed(1)}%).`;

    await this.sendToUser(farmerId, title, detail, {
      type: 'TELEMETRY_ALERT',
      serialNumber: device.serialNumber,
      metric,
      value: String(value),
    });
  }
}

export const firebaseService = new FirebaseService();
