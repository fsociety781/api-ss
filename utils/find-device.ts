import { prisma } from '../bin/prismaConfig';
import { NotFoundError, ForbiddenError } from './errors';

/**
 * Finds a device by ID or serial number.
 * Optionally enforces ownership verification for non-admin/technician users.
 */
export async function findDeviceOrFail(
  deviceId: string,
  options?: {
    userId?: string;
    userRole?: string;
    includeRelations?: boolean;
  },
) {
  const device = await prisma.device.findFirst({
    where: {
      OR: [{ id: deviceId }, { serialNumber: deviceId }],
    },
    include: {
      setting: true,
      actuators: { orderBy: { channel: 'asc' as const } },
    },
  });

  if (!device) {
    throw new NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
  }

  // Ownership verification: farmers can only access their own devices
  if (options?.userId && options?.userRole) {
    const isPrivileged =
      options.userRole === 'ADMIN' || options.userRole === 'TECHNICIAN';

    if (!isPrivileged && device.farmerId !== options.userId) {
      throw new ForbiddenError(
        'Anda tidak memiliki akses ke perangkat ini',
      );
    }
  }

  return device;
}
