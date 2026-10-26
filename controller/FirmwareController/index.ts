import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { prisma } from '../../bin/prismaConfig';
import { ApiResponse } from '../../utils/api-response';
import { BadRequestError, ConflictError, NotFoundError, UnauthorizedError } from '../../utils/errors';
import { calculateFileSha256 } from '../../middleware/firmwareUpload';
import { resolveServerBaseUrl } from '../../utils/network';

export const FirmwareController = {
  /**
   * POST /api/v1/technician/firmwares
   * Upload file firmware .bin dan simpan metadata
   */
  uploadFirmware: async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new UnauthorizedError('Otentikasi diperlukan');
    }

    if (!req.file) {
      throw new BadRequestError('File biner firmware (.bin) wajib diunggah');
    }

    const uploadSchema = z.object({
      version: z.string().min(1, 'Versi firmware wajib diisi').trim(),
      hardwareVersion: z.string().trim().default('1.0'),
      changelog: z.string().optional(),
      isLatest: z.preprocess((val) => {
        if (typeof val === 'string') return val.toLowerCase() === 'true' || val === '1';
        return Boolean(val);
      }, z.boolean()).default(false),
    });

    const parsed = uploadSchema.parse(req.body);
    const version = parsed.version
      .trim()
      .replace(/^firmware\s*/i, '')
      .replace(/^v/i, '')
      .trim();

    // Check unique version
    const existing = await prisma.firmware.findUnique({
      where: { version },
    });

    if (existing) {
      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      throw new ConflictError(`Firmware versi "${version}" sudah pernah diunggah sebelumnya.`);
    }

    // Compute SHA-256 hash
    const checksumSha256 = await calculateFileSha256(req.file.path);

    // If marked as latest, unmark previous latest firmwares for same hardware
    if (parsed.isLatest) {
      await prisma.firmware.updateMany({
        where: {
          hardwareVersion: parsed.hardwareVersion,
          isLatest: true,
        },
        data: {
          isLatest: false,
        },
      });
    }

    const firmware = await prisma.firmware.create({
      data: {
        version,
        filename: req.file.filename,
        originalName: req.file.originalname,
        filePath: req.file.path,
        fileSize: req.file.size,
        checksumSha256,
        hardwareVersion: parsed.hardwareVersion,
        changelog: parsed.changelog || null,
        isLatest: parsed.isLatest,
        createdById: req.user.id,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
          },
        },
      },
    });

    const baseUrl = resolveServerBaseUrl(req).replace(/^https:\/\//i, 'http://');
    const downloadUrl = `${baseUrl}/api/v1/firmwares/download/${firmware.filename}`;

    ApiResponse.success(
      res,
      {
        ...firmware,
        downloadUrl,
      },
      'Firmware berhasil diunggah dan diverifikasi',
      201,
    );
  },

  /**
   * GET /api/v1/technician/firmwares
   * List seluruh firmware yang tersedia di sistem
   */
  listFirmwares: async (req: Request, res: Response): Promise<void> => {
    const firmwares = await prisma.firmware.findMany({
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
          },
        },
        _count: {
          select: {
            otaLogs: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const baseUrl = resolveServerBaseUrl(req).replace(/^https:\/\//i, 'http://');
    const enriched = firmwares.map((f) => ({
      ...f,
      downloadUrl: `${baseUrl}/api/v1/firmwares/download/${f.filename}`,
    }));

    ApiResponse.success(res, enriched, 'Daftar firmware berhasil dimuat');
  },

  /**
   * GET /api/v1/technician/firmwares/:id
   * Detail firmware
   */
  getFirmwareById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const firmware = await prisma.firmware.findFirst({
      where: {
        OR: [{ id }, { version: id }],
      },
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!firmware) {
      throw new NotFoundError('Firmware tidak ditemukan');
    }

    const baseUrl = resolveServerBaseUrl(req).replace(/^https:\/\//i, 'http://');
    ApiResponse.success(res, {
      ...firmware,
      downloadUrl: `${baseUrl}/api/v1/firmwares/download/${firmware.filename}`,
    });
  },

  /**
   * DELETE /api/v1/technician/firmwares/:id
   * Hapus file binary firmware dan databasenya
   */
  deleteFirmware: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const firmware = await prisma.firmware.findUnique({
      where: { id },
    });

    if (!firmware) {
      throw new NotFoundError('Firmware tidak ditemukan');
    }

    // Remove file on disk if exists
    if (fs.existsSync(firmware.filePath)) {
      try {
        fs.unlinkSync(firmware.filePath);
      } catch {
        // ignore disk deletion failure
      }
    }

    await prisma.firmware.delete({
      where: { id },
    });

    ApiResponse.success(res, null, 'File firmware berhasil dihapus dari sistem');
  },

  /**
   * GET /api/v1/firmwares/latest
   * Mengambil metadata firmware terbaru beserta link unduhannya (diakses oleh ESP32 / App)
   */
  getLatestFirmware: async (req: Request, res: Response): Promise<void> => {
    const hardwareVersion = (req.query.hardwareVersion as string) || '1.0';

    // Cari firmware yang ditandai isLatest: true untuk hardwareVersion ini
    let firmware = await prisma.firmware.findFirst({
      where: {
        hardwareVersion,
        isLatest: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    // Fallback: Jika belum ada flag isLatest, ambil yang diupload paling baru
    if (!firmware) {
      firmware = await prisma.firmware.findFirst({
        where: { hardwareVersion },
        orderBy: { createdAt: 'desc' },
      });
    }

    if (!firmware) {
      throw new NotFoundError(`Belum ada firmware yang diunggah untuk hardware versi ${hardwareVersion}`);
    }

    const baseUrl = resolveServerBaseUrl(req).replace(/^https:\/\//i, 'http://');
    const downloadUrl = `${baseUrl}/api/v1/firmwares/download/${firmware.filename}`;

    ApiResponse.success(
      res,
      {
        id: firmware.id,
        version: firmware.version,
        hardwareVersion: firmware.hardwareVersion,
        filename: firmware.filename,
        originalName: firmware.originalName,
        fileSize: firmware.fileSize,
        checksumSha256: firmware.checksumSha256,
        changelog: firmware.changelog,
        isLatest: firmware.isLatest,
        downloadUrl,
        createdAt: firmware.createdAt,
      },
      'Firmware terbaru berhasil ditemukan',
    );
  },

  /**
   * GET /api/v1/firmwares/download/:filename
   * Unduh file .bin firmware (Diakses oleh browser atau ESP32 HTTPUpdate)
   */
  downloadFirmware: async (req: Request, res: Response): Promise<void> => {
    const { filename } = req.params;

    const safeFilename = path.basename(filename);
    const uploadDir = path.resolve(process.cwd(), 'storage/firmwares');
    const filePath = path.join(uploadDir, safeFilename);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundError('File biner firmware tidak ditemukan di server');
    }

    const firmware = await prisma.firmware.findFirst({
      where: { filename: safeFilename },
    });

    // Custom headers for ESP32 and browser verification
    if (firmware) {
      res.setHeader('x-SHA256', firmware.checksumSha256);
      res.setHeader('x-Firmware-Version', firmware.version);
      res.setHeader('x-Hardware-Version', firmware.hardwareVersion);
    }

    res.setHeader('Content-Type', 'application/octet-stream');
    res.download(filePath, firmware?.originalName || safeFilename);
  },
};
