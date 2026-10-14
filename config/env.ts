import 'dotenv/config';
import { z } from 'zod';

const isProduction = process.env.NODE_ENV === 'production';

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

  // JWT Configuration — NO default secret in production to prevent token forgery
  JWT_SECRET: isProduction
    ? z.string().min(32, 'JWT_SECRET di production harus minimal 32 karakter dan WAJIB diset secara eksplisit')
    : z.string().min(16).default('shroomsync-dev-only-secret-not-for-prod'),

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

// Additional production safety checks
if (parsedEnv.data.NODE_ENV === 'production') {
  if (parsedEnv.data.CORS_ORIGIN === '*') {
    console.warn(
      '\x1b[33m[WARNING] CORS_ORIGIN diset ke "*" di production. Pertimbangkan untuk membatasi origin.\x1b[0m',
    );
  }
}

export const env = parsedEnv.data;
export type EnvConfig = z.infer<typeof envSchema>;
