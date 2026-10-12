"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum(['development', 'test', 'production'])
        .default('development'),
    PORT: zod_1.z.coerce.number().int().positive().default(3000),
    DATABASE_URL: zod_1.z.string().min(1, 'DATABASE_URL wajib diisi'),
    // Default Initial Technician Credentials
    DEFAULT_TECHNICIAN_NAME: zod_1.z
        .string()
        .min(2, 'Nama teknisi default wajib diisi')
        .default('Teknisi ShroomSync'),
    DEFAULT_TECHNICIAN_PHONE: zod_1.z
        .string()
        .min(8, 'Nomor HP teknisi tidak valid')
        .default('08111111111'),
    DEFAULT_TECHNICIAN_EMAIL: zod_1.z
        .string()
        .email()
        .default('technician@shroomsync.id'),
    DEFAULT_TECHNICIAN_PASSWORD: zod_1.z
        .string()
        .min(8, 'Password teknisi minimal 8 karakter')
        .default('Password123!'),
    // JWT Configuration
    JWT_SECRET: zod_1.z
        .string()
        .min(16, 'JWT_SECRET minimal 16 karakter')
        .default('shroomsync-dev-super-secret-jwt-key-2026!'),
    JWT_EXPIRES_IN: zod_1.z
        .string()
        .default('7d'),
    // MQTT Broker Configuration
    MQTT_BROKER_URL: zod_1.z.string().default('mqtt://localhost:1883'),
    MQTT_CLIENT_ID: zod_1.z.string().default('shroomsync-api-server'),
    MQTT_USERNAME: zod_1.z.string().optional(),
    MQTT_PASSWORD: zod_1.z.string().optional(),
    // CORS Configuration
    CORS_ORIGIN: zod_1.z.string().default('*'),
    // Rate Limiting Configuration
    RATE_LIMIT_WINDOW_MS: zod_1.z.coerce
        .number()
        .int()
        .positive()
        .default(15 * 60 * 1000), // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: zod_1.z.coerce
        .number()
        .int()
        .positive()
        .default(300),
    // Log level
    LOG_LEVEL: zod_1.z
        .enum(['debug', 'info', 'warn', 'error'])
        .default('info'),
});
const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
    const errors = parsedEnv.error.flatten().fieldErrors;
    console.error('\x1b[31m[CRITICAL] Konfigurasi environment (.env) tidak valid:\x1b[0m', JSON.stringify(errors, null, 2));
    throw new Error('Environment configuration invalid. Please check your .env file.');
}
exports.env = parsedEnv.data;
//# sourceMappingURL=env.js.map