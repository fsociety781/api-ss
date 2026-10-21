import 'dotenv/config';
import path from 'node:path';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import type { PrismaClient as PrismaClientType } from '@prisma/client';

type PrismaClientCtor = new (options?: Record<string, unknown>) => PrismaClientType;

let PrismaClientCtor: PrismaClientCtor;

try {
  const generatedClientPath = path.resolve(
    __dirname,
    process.env.NODE_ENV === 'production'
      ? '../../src/generated/prisma/client'
      : '../src/generated/prisma/client',
  );

  PrismaClientCtor = require(generatedClientPath).PrismaClient;
} catch {
  PrismaClientCtor = require('@prisma/client').PrismaClient;
}

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({
  connectionString,
  max: process.env.NODE_ENV === 'production' ? 20 : 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClientCtor({ adapter });

export { prisma, pool };
