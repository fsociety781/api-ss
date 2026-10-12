import bcrypt from 'bcrypt';

import { env } from '../bin/env';
import { prisma } from '../bin/prismaConfig';

export async function ensureDefaultTechnician(): Promise<void> {
  const technicianExists = await prisma.user.findFirst({
    where: {
      role: 'TECHNICIAN',
    },
    select: {
      id: true,
    },
  });

  if (technicianExists) {
    return;
  }

  const conflictingUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          phoneNumber: env.DEFAULT_TECHNICIAN_PHONE,
        },
        ...(env.DEFAULT_TECHNICIAN_EMAIL
          ? [
              {
                email: env.DEFAULT_TECHNICIAN_EMAIL,
              },
            ]
          : []),
      ],
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (conflictingUser) {
    throw new Error(
      'Nomor HP atau email teknisi awal sudah digunakan akun lain',
    );
  }

  const passwordHash = await bcrypt.hash(
    env.DEFAULT_TECHNICIAN_PASSWORD,
    12,
  );

  await prisma.user.create({
    data: {
      fullName: env.DEFAULT_TECHNICIAN_NAME,
      phoneNumber: env.DEFAULT_TECHNICIAN_PHONE,
      email: env.DEFAULT_TECHNICIAN_EMAIL ?? null,
      passwordHash,
      role: 'TECHNICIAN',
      status: 'ACTIVE',
      profileCompleted: true,
      activatedAt: new Date(),
    },
  });

  console.info('Akun teknisi awal berhasil dibuat');
}