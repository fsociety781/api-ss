import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  PORT: z.coerce.number().int().positive().default(3000),

  DATABASE_URL: z.string().min(1, 'DATABASE_URL wajib diisi'),

  // Default Initial Technician Credentials
  DEFAULT_TECHNICIAN_NAME: z
    .string()
    .min(2, 'Nama teknisi default wajib diisi')
    .default('Teknisi ShroomSync'),

  DEFAULT_TECHNICIAN_PHONE: z
    .string()
    .min(8, 'Nomor HP teknisi tidak valid')
    .default('08111111111'),

  DEFAULT_TECHNICIAN_EMAIL: z
    .string()
    .email()
    .default('technician@shroomsync.id'),

  DEFAULT_TECHNICIAN_PASSWORD: z
    .string()
    .min(8, 'Password teknisi minimal 8 karakter')
    .default('Password123!'),

  // JWT Configuration
  JWT_SECRET: z
    .string()
    .min(16, 'JWT_SECRET minimal 16 karakter')
    .default('shroomsync-dev-super-secret-jwt-key-2026!'),

  JWT_EXPIRES_IN: z
    .string()
    .default('7d'),

  // MQTT Broker Configuration
  MQTT_BROKER_URL: z.string().default('mqtt://localhost:1883'),
  MQTT_CLIENT_ID: z.string().default('shroomsync-api-server'),
  MQTT_USERNAME: z.string().optional(),
  MQTT_PASSWORD: z.string().optional(),

  // CORS Configuration
  CORS_ORIGIN: z.string().default('*'),

  // Rate Limiting Configuration
  RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .int()
    .positive()
    .default(15 * 60 * 1000), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: z.coerce
    .number()
    .int()
    .positive()
    .default(300),

  // Log level
  LOG_LEVEL: z
    .enum(['debug', 'info', 'warn', 'error'])
    .default('info'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const errors = parsedEnv.error.flatten().fieldErrors;
  console.error(
    '\x1b[31m[CRITICAL] Konfigurasi environment (.env) tidak valid:\x1b[0m',
    JSON.stringify(errors, null, 2),
  );
  throw new Error('Environment configuration invalid. Please check your .env file.');
}

export const env = parsedEnv.data;
export type EnvConfig = z.infer<typeof envSchema>;

