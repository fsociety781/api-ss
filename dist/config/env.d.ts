import 'dotenv/config';
import { z } from 'zod';
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>>;
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    DATABASE_URL: z.ZodString;
    DEFAULT_TECHNICIAN_NAME: z.ZodDefault<z.ZodString>;
    DEFAULT_TECHNICIAN_PHONE: z.ZodDefault<z.ZodString>;
    DEFAULT_TECHNICIAN_EMAIL: z.ZodDefault<z.ZodString>;
    DEFAULT_TECHNICIAN_PASSWORD: z.ZodDefault<z.ZodString>;
    JWT_SECRET: z.ZodDefault<z.ZodString>;
    JWT_EXPIRES_IN: z.ZodDefault<z.ZodString>;
    MQTT_BROKER_URL: z.ZodDefault<z.ZodString>;
    MQTT_CLIENT_ID: z.ZodDefault<z.ZodString>;
    MQTT_USERNAME: z.ZodOptional<z.ZodString>;
    MQTT_PASSWORD: z.ZodOptional<z.ZodString>;
    CORS_ORIGIN: z.ZodDefault<z.ZodString>;
    RATE_LIMIT_WINDOW_MS: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    RATE_LIMIT_MAX_REQUESTS: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    LOG_LEVEL: z.ZodDefault<z.ZodEnum<{
        error: "error";
        debug: "debug";
        info: "info";
        warn: "warn";
    }>>;
}, z.core.$strip>;
export declare const env: {
    NODE_ENV: "development" | "test" | "production";
    PORT: number;
    DATABASE_URL: string;
    DEFAULT_TECHNICIAN_NAME: string;
    DEFAULT_TECHNICIAN_PHONE: string;
    DEFAULT_TECHNICIAN_EMAIL: string;
    DEFAULT_TECHNICIAN_PASSWORD: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    MQTT_BROKER_URL: string;
    MQTT_CLIENT_ID: string;
    CORS_ORIGIN: string;
    RATE_LIMIT_WINDOW_MS: number;
    RATE_LIMIT_MAX_REQUESTS: number;
    LOG_LEVEL: "error" | "debug" | "info" | "warn";
    MQTT_USERNAME?: string | undefined;
    MQTT_PASSWORD?: string | undefined;
};
export type EnvConfig = z.infer<typeof envSchema>;
export {};
//# sourceMappingURL=env.d.ts.map