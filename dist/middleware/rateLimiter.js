"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actuatorLimiter = exports.authLimiter = exports.apiLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_1 = require("../config/env");
/**
 * Standard Global API Rate Limiter
 * Accommodates real-time IoT telemetry and device polling from frontend dashboard.
 * In development, rate limiting is skipped for smooth developer experience.
 */
exports.apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: env_1.env.RATE_LIMIT_WINDOW_MS,
    max: env_1.env.NODE_ENV === 'development' ? 50000 : env_1.env.RATE_LIMIT_MAX_REQUESTS,
    skip: (req) => {
        // In development mode, bypass rate limit so polling doesn't choke
        if (env_1.env.NODE_ENV === 'development') {
            return true;
        }
        // Never rate-limit health check probes
        if (req.path === '/' || req.path === '/health' || req.path === '/api/health') {
            return true;
        }
        return false;
    },
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        success: false,
        message: 'Terlalu banyak permintaan dari IP Anda, silakan coba lagi beberapa saat lagi.',
        code: 'RATE_LIMIT_EXCEEDED',
    },
});
/**
 * Strict Rate Limiter for Authentication (Brute Force Protection)
 * Max 15 failed/attempted requests per 15 minutes per IP
 */
exports.authLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        success: false,
        message: 'Terlalu banyak percobaan autentikasi. Demi keamanan, akun dibatasi selama 15 menit.',
        code: 'AUTH_RATE_LIMIT_EXCEEDED',
    },
});
/**
 * Hardware Protection Rate Limiter for Actuators (Pump & Fan control)
 * Max 60 commands per minute to prevent relay chattering & hardware stress
 */
exports.actuatorLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        success: false,
        message: 'Perintah aktuator terlalu cepat. Mohon tunggu beberapa detik demi keamanan perangkat fisik.',
        code: 'ACTUATOR_RATE_LIMIT_EXCEEDED',
    },
});
//# sourceMappingURL=rateLimiter.js.map