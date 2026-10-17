/**
 * Standard Global API Rate Limiter
 * Accommodates real-time IoT telemetry and device polling from frontend dashboard.
 * In development, rate limiting is skipped for smooth developer experience.
 */
export declare const apiLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Strict Rate Limiter for Authentication (Brute Force Protection)
 * Max 15 failed/attempted requests per 15 minutes per IP
 */
export declare const authLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Hardware Protection Rate Limiter for Actuators (Pump & Fan control)
 * Max 60 commands per minute to prevent relay chattering & hardware stress
 */
export declare const actuatorLimiter: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimiter.d.ts.map