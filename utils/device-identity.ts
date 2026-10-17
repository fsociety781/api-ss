import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { prisma } from '../bin/prismaConfig';

export interface DeviceIdentity {
  device_id: string;
  hardware_version: string;
  firmware_version: string;
  mac_address: string;
  manufactured_at: string;
}

/**
 * Generates a standard formatted 6-byte MAC address (XX:XX:XX:XX:XX:XX)
 */
export function generateRandomMacAddress(prefix: string = '80:B5:4E'): string {
  const randomBytes = crypto.randomBytes(3);
  const suffix = Array.from(randomBytes)
    .map((b) => b.toString(16).padStart(2, '0').toUpperCase())
    .join(':');
  return `${prefix}:${suffix}`;
}

/**
 * Generates the next sequential meaningful serial number based on manufacturing date.
 * Format: SS-[MM][YY]-[NNN]
 * - SS: Brand prefix (ShroomSync)
 * - MM: 2-digit manufacturing month (e.g. 10 for October)
 * - YY: 2-digit manufacturing year (e.g. 26 for 2026)
 * - NNN: 3-digit sequential unit number in that production batch/month (001, 002, ...)
 */
export async function getNextSerialNumber(date: Date = new Date()): Promise<string> {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  const prefix = `SS-${month}${year}-`;

  // Find all devices starting with this month's batch prefix
  const existingDevices = await prisma.device.findMany({
    where: {
      serialNumber: {
        startsWith: prefix,
      },
    },
    select: {
      serialNumber: true,
    },
  });

  let maxSeq = 0;
  for (const d of existingDevices) {
    const parts = d.serialNumber.split('-');
    if (parts.length >= 3) {
      const seqNum = parseInt(parts[2], 10);
      if (!isNaN(seqNum) && seqNum > maxSeq) {
        maxSeq = seqNum;
      }
    }
  }

  const nextSeq = maxSeq + 1;
  const seqPadded = String(nextSeq).padStart(3, '0');
  return `${prefix}${seqPadded}`;
}

/**
 * Parses and explains a structured serial number
 */
export function parseSerialNumber(serialNumber: string) {
  const match = serialNumber.match(/^([A-Z]{2,4})-(\d{2})(\d{2})-(\d{3,})$/i);
  if (!match) return null;
  const brand = match[1].toUpperCase();
  const month = parseInt(match[2], 10);
  const year = 2000 + parseInt(match[3], 10);
  const unitSequence = parseInt(match[4], 10);
  return {
    brand,
    month,
    year,
    unitSequence,
    batch: `${match[2]}${match[3]}`,
    description: `Unit produksi ke-${unitSequence} (Bulan ${month}, Tahun ${year})`,
  };
}

/**
 * Directory where generated device identity JSON files are stored on disk.
 */
export const DEVICE_IDENTITIES_DIR = path.join(
  process.cwd(),
  'storage',
  'device-identities',
);

/**
 * Ensures storage directory exists
 */
function ensureStorageDirectory(): void {
  if (!fs.existsSync(DEVICE_IDENTITIES_DIR)) {
    fs.mkdirSync(DEVICE_IDENTITIES_DIR, { recursive: true });
  }
}

/**
 * Builds the exact identity JSON structure for injection into ESP32-S3 firmware.
 * Note: mac_address defaults to empty string "" so hardware will auto-populate on flash/first boot.
 */
export function buildDeviceIdentity(device: {
  serialNumber: string;
  hardwareVersion?: string | null;
  firmwareVersion?: string | null;
  macAddress?: string | null;
  createdAt?: Date | null;
}): DeviceIdentity {
  return {
    device_id: device.serialNumber,
    hardware_version: device.hardwareVersion || '1.0',
    firmware_version: device.firmwareVersion || '1.1.0',
    mac_address: device.macAddress?.trim() || '', // Kosongkan agar terisi otomatis saat injeksi/booting hardware
    manufactured_at: (device.createdAt ? new Date(device.createdAt) : new Date()).toISOString(),
  };
}

/**
 * Writes the identity JSON file to disk as ${serialNumber}.json
 * Returns the absolute filepath where the file was saved.
 */
export function saveDeviceIdentityFile(identity: DeviceIdentity): string {
  ensureStorageDirectory();
  const filePath = path.join(DEVICE_IDENTITIES_DIR, `${identity.device_id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(identity, null, 2), 'utf-8');
  return filePath;
}

/**
 * Gets path to the identity file if it exists, or returns null.
 */
export function getDeviceIdentityFilePath(deviceId: string): string | null {
  const filePath = path.join(DEVICE_IDENTITIES_DIR, `${deviceId}.json`);
  if (fs.existsSync(filePath)) {
    return filePath;
  }
  return null;
}
