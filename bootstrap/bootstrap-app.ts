import { prisma } from '../bin/prismaConfig';
import { ensureDefaultTechnician } from './ensure-default-technician';
import { mqttService } from '../services/mqtt.service';

export async function bootstrapApp(): Promise<void> {
  await prisma.$connect();

  await ensureDefaultTechnician();

  mqttService.initialize();
}