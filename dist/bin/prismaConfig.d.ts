import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
declare const pool: Pool;
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("../src/generated/prisma/runtime/client").DefaultArgs>;
export { prisma, pool };
//# sourceMappingURL=prismaConfig.d.ts.map