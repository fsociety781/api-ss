import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { BadRequestError } from '../utils/errors';

// Ensure storage directory exists
const uploadDir = path.resolve(process.cwd(), 'storage/firmwares');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    // Generate clean safe filename with timestamp
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    cb(null, `${baseName}_${uniqueSuffix}${ext}`);
  },
});

export const firmwareUpload = multer({
  storage,
  limits: {
    fileSize: 16 * 1024 * 1024, // 16 MB max
  },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.bin') {
      return cb(new BadRequestError('Hanya file binary firmware ESP32 berekstensi .bin yang diperbolehkan'));
    }
    cb(null, true);
  },
});

/**
 * Compute SHA-256 hash of a file on disk
 */
export async function calculateFileSha256(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', (err) => reject(err));
  });
}
