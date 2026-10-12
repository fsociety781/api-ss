import rateLimit from 'express-rate-limit';
import { env } from '../config/env';

/**
 * Standard Global API Rate Limiter
 * Defaults to 300 requests per 15 minutes per IP
 */
export const apiLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Terlalu banyak permintaan dari IP Anda, silakan coba lagi beberapa saat lagi.',
    code: 'RATE_LIMIT_EXCEEDED',
  },
});

/**
 * Strict Rate Limiter for Authentication (Brute Force Protection)
 * Max 10 failed/attempted requests per 15 minutes per IP
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Terlalu banyak percobaan autentikasi. Demi keamanan, akun dibatasi selama 15 menit.',
    code: 'AUTH_RATE_LIMIT_EXCEEDED',
  },
});

/**
 * Hardware Protection Rate Limiter for Actuators (Pump & Fan control)
 * Max 30 commands per minute to prevent relay chattering & hardware stress
 */
export const actuatorLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Perintah aktuator terlalu cepat. Mohon tunggu beberapa detik demi keamanan perangkat fisik.',
    code: 'ACTUATOR_RATE_LIMIT_EXCEEDED',
  },
});

