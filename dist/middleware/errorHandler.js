"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
const errors_1 = require("../utils/errors");
const api_response_1 = require("../utils/api-response");
function errorHandler(err, _req, res, _next) {
    if (res.headersSent) {
        return;
    }
    if (err instanceof errors_1.AppError) {
        api_response_1.ApiResponse.error(res, err.message, err.statusCode, err.errors);
        return;
    }
    if (err instanceof zod_1.ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        api_response_1.ApiResponse.error(res, 'Validasi input gagal', 422, fieldErrors);
        return;
    }
    if (err instanceof SyntaxError &&
        'status' in err &&
        err.status === 400) {
        api_response_1.ApiResponse.error(res, 'Format payload JSON tidak valid', 400);
        return;
    }
    const prismaErr = err;
    if (prismaErr && typeof prismaErr.code === 'string') {
        if (prismaErr.code === 'P2002') {
            const target = prismaErr.meta?.target?.join(', ') || 'field';
            api_response_1.ApiResponse.error(res, `Nilai untuk ${target} sudah terdaftar`, 409);
            return;
        }
        if (prismaErr.code === 'P2025') {
            api_response_1.ApiResponse.error(res, 'Data tidak ditemukan di database', 404);
            return;
        }
    }
    console.error('Unhandled Server Error:', err);
    const errorMessage = process.env.NODE_ENV === 'production'
        ? 'Terjadi kesalahan pada server'
        : err?.message || 'Terjadi kesalahan pada server';
    api_response_1.ApiResponse.error(res, errorMessage, 500);
}
//# sourceMappingURL=errorHandler.js.map