import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import { BadRequestError, NotFoundError } from '../../utils/errors';
import { mqttService } from '../../services/mqtt.service';
import { logger } from '../../utils/logger';
import { resolveServerBaseUrl } from '../../utils/network';

/**
 * Parsing semver v1.2.3 -> [1, 2, 3]
 */
function parseSemVer(v: string): number[] {
  return v
    .trim()
    .replace(/^firmware\s*/i, '')
    .replace(/^v/i, '')
    .split(/[\.-]/)
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n));
}

/**
 * Komparasi semver dua versi firmware:
 * Mengembalikan:
 *   1  jika v1 > v2 (Upgrade)
 *  -1  jika v1 < v2 (Downgrade)
 *   0  jika v1 === v2 (Versi sama / Re-flash)
 */
function compareVersions(v1: string, v2: string): number {
  const p1 = parseSemVer(v1);
  const p2 = parseSemVer(v2);
  const len = Math.max(p1.length, p2.length);
  for (let i = 0; i < len; i++) {
    const num1 = p1[i] || 0;
    const num2 = p2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

const triggerOtaSchema = z.object({
  deviceId: z.string().optional(),
  serialNumber: z.string().optional(),
  firmwareId: z.string().optional(),
  firmwareUrl: z.string().url('URL firmware harus valid').optional().or(z.literal('')),
  firmwareVersion: z.string().optional().or(z.literal('')),
  hardwareVersion: z.string().default('1.0'),
  checksumSha256: z.string().optional().or(z.literal('')),
  changelog: z.string().optional(),
  force: z.coerce.boolean().default(false),
  actionType: z.enum(['AUTO', 'UPGRADE', 'DOWNGRADE', 'REFLASH']).default('AUTO'),
});

const broadcastOtaSchema = z.object({
  firmwareId: z.string().optional(),
  firmwareUrl: z.string().url('URL firmware harus valid').optional().or(z.literal('')),
  firmwareVersion: z.string().optional().or(z.literal('')),
  hardwareVersion: z.string().default('1.0'),
  checksumSha256: z.string().optional().or(z.literal('')),
  changelog: z.string().optional(),
  force: z.coerce.boolean().default(false),
  actionType: z.enum(['AUTO', 'UPGRADE', 'DOWNGRADE', 'REFLASH']).default('AUTO'),
});

export const OtaController = {
  /**
   * POST /api/v1/technician/ota/trigger (atau /api/v1/ota/trigger/:deviceId)
   * Kirim instruksi flashing OTA (Upgrade / Downgrade / Reflash) ke satu perangkat SupaKu via MQTT
   */
  triggerOta: async (req: Request, res: Response): Promise<void> => {
    const parsed = triggerOtaSchema.parse(req.body);
    const targetIdentifier = req.params.deviceId || parsed.deviceId || parsed.serialNumber;

    if (!targetIdentifier) {
      throw new BadRequestError('ID atau Serial Number perangkat target wajib disertakan');
    }

    // Cari perangkat target
    const device = await prisma.device.findFirst({
      where: {
        OR: [{ id: targetIdentifier }, { serialNumber: targetIdentifier }],
      },
    });

    if (!device) {
      throw new NotFoundError(`Perangkat "${targetIdentifier}" tidak ditemukan`);
    }

    let finalFirmwareUrl = parsed.firmwareUrl;
    let finalVersion = parsed.firmwareVersion;
    let finalChecksum = parsed.checksumSha256;
    let finalHardwareVersion = parsed.hardwareVersion || device.hardwareVersion || '1.0';
    let firmwareRecord = null;

    // Jika firmwareId disertakan, ambil data terverifikasi dari database
    if (parsed.firmwareId) {
      firmwareRecord = await prisma.firmware.findUnique({
        where: { id: parsed.firmwareId },
      });

      if (!firmwareRecord) {
        throw new NotFoundError('File firmware yang dipilih tidak ditemukan');
      }

      finalVersion = firmwareRecord.version;
      finalChecksum = firmwareRecord.checksumSha256;
      finalHardwareVersion = firmwareRecord.hardwareVersion || finalHardwareVersion;

      const baseUrl = resolveServerBaseUrl(req);
      finalFirmwareUrl = `${baseUrl}/api/v1/firmwares/download/${firmwareRecord.filename}`;
    }

    if (!finalFirmwareUrl || !finalVersion) {
      throw new BadRequestError('URL dan versi firmware wajib diisi atau pilih dari daftar firmware');
    }

    // Mikrokontroler ESP32 wajib menggunakan HTTP port 80 untuk download biner firmware
    // (WiFiClient tidak mendukung TLS/SSL port 443; port 80 di Nginx sudah dikonfigurasi khusus tanpa HTTPS redirect)
    finalFirmwareUrl = finalFirmwareUrl.replace(/^https:\/\//i, 'http://');

    // Bandingkan versi hardware saat ini vs versi target
    const currentVersion = device.firmwareVersion || '';
    let operationType: 'UPGRADE' | 'DOWNGRADE' | 'REFLASH' = 'UPGRADE';

    if (currentVersion && finalVersion) {
      const cmp = compareVersions(finalVersion, currentVersion);
      if (cmp < 0) {
        operationType = 'DOWNGRADE';
      } else if (cmp === 0) {
        operationType = 'REFLASH';
      } else {
        operationType = 'UPGRADE';
      }
    }

    if (parsed.actionType && parsed.actionType !== 'AUTO') {
      operationType = parsed.actionType;
    }

    // Jika downgrade, otomatis aktifkan mode force agar hardware ESP32 tidak menolak instalasi versi lebih lama
    const shouldForce = Boolean(parsed.force || operationType === 'DOWNGRADE');

    const otaPayload = {
      action: operationType === 'DOWNGRADE' ? 'downgrade' : 'update',
      type: operationType,
      hardware_version: finalHardwareVersion,
      firmware_version: finalVersion,
      current_version: currentVersion,
      url: finalFirmwareUrl,
      checksum_sha256: finalChecksum || '',
      force: shouldForce,
    };

    // Kirim command via MQTT ke perangkat (shroomsync/ota/:serial/trigger, :serial/cmd/ota, dan :serial/legacy/ota/trigger)
    const published = mqttService.publishOtaTrigger(device.serialNumber, otaPayload);
    logger.info(`Instruksi OTA [${operationType}] dikirim ke perangkat ${device.serialNumber}:`, {
      serialNumber: device.serialNumber,
      operationType,
      firmwareVersion: finalVersion,
      currentVersion,
      force: shouldForce,
      downloadUrl: finalFirmwareUrl,
      published,
    });

    const notePrefix = `[${operationType}] ${device.serialNumber}: ${currentVersion ? `v${currentVersion}` : 'awal'} → v${finalVersion}`;
    const logNotes = parsed.changelog ? `${notePrefix} | ${parsed.changelog}` : notePrefix;

    const otaLog = await prisma.otaLog.create({
      data: {
        deviceId: device.id,
        deviceSerialNumber: device.serialNumber,
        firmwareId: firmwareRecord ? firmwareRecord.id : null,
        firmwareVersion: finalVersion,
        firmwareUrl: finalFirmwareUrl,
        checksumSha256: finalChecksum || null,
        isBroadcast: false,
        status: published ? 'SENT' : 'PENDING',
        triggeredById: req.user?.id || null,
        notes: logNotes,
      },
      include: {
        device: {
          select: {
            id: true,
            serialNumber: true,
            name: true,
          },
        },
        firmware: {
          select: {
            id: true,
            version: true,
            originalName: true,
          },
        },
      },
    });

    const actionTextIndo =
      operationType === 'DOWNGRADE'
        ? 'downgrade (rollback)'
        : operationType === 'REFLASH'
          ? 're-flash (instal ulang)'
          : 'update (upgrade)';

    ApiResponse.success(
      res,
      {
        ...otaLog,
        operationType,
        mqttPublished: published,
        downloadUrl: finalFirmwareUrl,
      },
      `Perintah ${actionTextIndo} firmware ke v${finalVersion} berhasil dikirim ke perangkat ${device.serialNumber}`,
      201,
    );
  },

  /**
   * POST /api/v1/technician/ota/broadcast (atau /api/v1/ota/broadcast)
   * Kirim instruksi flashing OTA ke SELURUH armada perangkat via topic broadcast/cmd/ota
   */
  broadcastOta: async (req: Request, res: Response): Promise<void> => {
    const parsed = broadcastOtaSchema.parse(req.body);

    let finalFirmwareUrl = parsed.firmwareUrl;
    let finalVersion = parsed.firmwareVersion;
    let finalChecksum = parsed.checksumSha256;
    let finalHardwareVersion = parsed.hardwareVersion;
    let firmwareRecord = null;

    if (parsed.firmwareId) {
      firmwareRecord = await prisma.firmware.findUnique({
        where: { id: parsed.firmwareId },
      });

      if (!firmwareRecord) {
        throw new NotFoundError('File firmware yang dipilih tidak ditemukan');
      }

      finalVersion = firmwareRecord.version;
      finalChecksum = firmwareRecord.checksumSha256;
      finalHardwareVersion = firmwareRecord.hardwareVersion || finalHardwareVersion;

      const baseUrl = resolveServerBaseUrl(req);
      finalFirmwareUrl = `${baseUrl}/api/v1/firmwares/download/${firmwareRecord.filename}`;
    }

    if (!finalFirmwareUrl || !finalVersion) {
      throw new BadRequestError('URL dan versi firmware wajib diisi atau pilih dari daftar firmware');
    }

    // Mikrokontroler ESP32 wajib menggunakan HTTP port 80 untuk download biner firmware
    // (WiFiClient tidak mendukung TLS/SSL port 443; port 80 di Nginx sudah dikonfigurasi khusus tanpa HTTPS redirect)
    finalFirmwareUrl = finalFirmwareUrl.replace(/^https:\/\//i, 'http://');

    const isDowngradeOrForce = Boolean(parsed.force || parsed.actionType === 'DOWNGRADE');
    const operationType = parsed.actionType !== 'AUTO' ? parsed.actionType : (isDowngradeOrForce ? 'DOWNGRADE' : 'UPDATE');

    const otaPayload = {
      action: isDowngradeOrForce ? 'downgrade' : 'update',
      type: operationType,
      hardware_version: finalHardwareVersion,
      firmware_version: finalVersion,
      url: finalFirmwareUrl,
      checksum_sha256: finalChecksum || '',
      force: isDowngradeOrForce,
    };

    // Kirim command via MQTT ke broadcast (shroomsync/ota/broadcast dan broadcast/cmd/ota)
    const published = mqttService.publishOtaBroadcast(otaPayload);
    mqttService.publish('broadcast/cmd/ota', otaPayload, { qos: 1 });
    logger.info(`Instruksi OTA broadcast [${operationType}] dikirim:`, {
      firmwareVersion: finalVersion,
      force: isDowngradeOrForce,
      downloadUrl: finalFirmwareUrl,
      published,
    });

    const notePrefix = `[BROADCAST ${operationType}] Seluruh Armada → v${finalVersion}`;
    const logNotes = parsed.changelog ? `${notePrefix} | ${parsed.changelog}` : notePrefix;

    const otaLog = await prisma.otaLog.create({
      data: {
        firmwareId: firmwareRecord ? firmwareRecord.id : null,
        firmwareVersion: finalVersion,
        firmwareUrl: finalFirmwareUrl,
        checksumSha256: finalChecksum || null,
        isBroadcast: true,
        status: published ? 'SENT' : 'PENDING',
        triggeredById: req.user?.id || null,
        notes: logNotes,
      },
      include: {
        firmware: {
          select: {
            id: true,
            version: true,
            originalName: true,
          },
        },
      },
    });

    ApiResponse.success(
      res,
      {
        ...otaLog,
        operationType,
        mqttPublished: published,
        downloadUrl: finalFirmwareUrl,
      },
      `Perintah broadcast ${isDowngradeOrForce ? 'downgrade/force' : 'update'} OTA v${finalVersion} berhasil disiarkan ke seluruh armada SupaKu`,
      201,
    );
  },

  /**
   * GET /api/v1/technician/ota/logs (atau /api/v1/ota/logs/:deviceId)
   * Riwayat eksekusi deployment OTA
   */
  getOtaLogs: async (req: Request, res: Response): Promise<void> => {
    const targetIdentifier = req.params.deviceId || (req.query.deviceId as string) || (req.query.serialNumber as string);
    const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
    const offset = Math.max(Number(req.query.offset) || 0, 0);

    const where: any = {};
    if (targetIdentifier && targetIdentifier !== 'ALL') {
      where.OR = [
        { deviceId: targetIdentifier },
        { deviceSerialNumber: targetIdentifier },
      ];
    }

    const [total, logs] = await Promise.all([
      prisma.otaLog.count({ where }),
      prisma.otaLog.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          device: {
            select: {
              id: true,
              serialNumber: true,
              name: true,
              model: true,
              hardwareVersion: true,
              firmwareVersion: true,
            },
          },
          firmware: {
            select: {
              id: true,
              version: true,
              originalName: true,
              fileSize: true,
              hardwareVersion: true,
            },
          },
        },
      }),
    ]);

    ApiResponse.success(
      res,
      {
        total,
        limit,
        offset,
        records: logs,
      },
      'Riwayat log OTA berhasil dimuat',
    );
  },
};
