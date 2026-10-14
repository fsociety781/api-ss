"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
const errors_1 = require("../utils/errors");
const api_response_1 = require("../utils/api-response");
const logger_1 = require("../utils/logger");
function errorHandler(err, req, res, _next) {
    if (res.headersSent) {
        return;
    }
    const requestId = req.id || req.headers['x-request-id'] || undefined;
    if (requestId && !res.getHeader('X-Request-ID')) {
        res.setHeader('X-Request-ID', requestId);
    }
    if (err instanceof errors_1.AppError) {
        logger_1.logger.warn(`AppError [${err.statusCode}]: ${err.message}`, {
            requestId,
            statusCode: err.statusCode,
            path: req.originalUrl,
            method: req.method,
        });
        api_response_1.ApiResponse.error(res, err.message, err.statusCode, err.errors);
        return;
    }
    if (err instanceof zod_1.ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        logger_1.logger.warn('Zod validation error', {
            requestId,
            path: req.originalUrl,
            method: req.method,
            errors: fieldErrors,
        });
        api_response_1.ApiResponse.error(res, 'Validasi input gagal', 422, fieldErrors, 'VALIDATION_ERROR');
        return;
    }
    if (err instanceof SyntaxError &&
        'status' in err &&
        err.status === 400) {
        logger_1.logger.warn('Malformed JSON payload received', {
            requestId,
            path: req.originalUrl,
            method: req.method,
        });
        api_response_1.ApiResponse.error(res, 'Format payload JSON tidak valid', 400, null, 'INVALID_JSON');
        return;
    }
    const prismaErr = err;
    if (prismaErr && typeof prismaErr.code === 'string') {
        if (prismaErr.code === 'P2002') {
            const target = prismaErr.meta?.target?.join(', ') || 'field';
            logger_1.logger.warn(`Prisma unique constraint violation on ${target}`, {
                requestId,
                path: req.originalUrl,
            });
            api_response_1.ApiResponse.error(res, `Nilai untuk ${target} sudah terdaftar`, 409, null, 'DUPLICATE_ENTRY');
            return;
        }
        if (prismaErr.code === 'P2025') {
            logger_1.logger.warn('Prisma record not found', {
                requestId,
                path: req.originalUrl,
            });
            api_response_1.ApiResponse.error(res, 'Data tidak ditemukan di database', 404, null, 'RECORD_NOT_FOUND');
            return;
        }
    }
    logger_1.logger.error('Unhandled Server Error', {
        requestId,
        path: req.originalUrl,
        method: req.method,
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
    });
    const errorMessage = process.env.NODE_ENV === 'production'
        ? 'Terjadi kesalahan pada server'
        : err?.message || 'Terjadi kesalahan pada server';
    api_response_1.ApiResponse.error(res, errorMessage, 500, null, 'INTERNAL_SERVER_ERROR');
}
//# sourceMappingURL=errorHandler.js.map