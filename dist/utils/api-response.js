"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(res, data = null, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
            timestamp: new Date().toISOString(),
        });
    }
    static error(res, message = 'Internal Server Error', statusCode = 500, errors = null, code) {
        const defaultCode = statusCode === 400
            ? 'BAD_REQUEST'
            : statusCode === 401
                ? 'UNAUTHORIZED'
                : statusCode === 403
                    ? 'FORBIDDEN'
                    : statusCode === 404
                        ? 'NOT_FOUND'
                        : statusCode === 409
                            ? 'CONFLICT'
                            : statusCode === 422
                                ? 'VALIDATION_ERROR'
                                : 'INTERNAL_SERVER_ERROR';
        return res.status(statusCode).json({
            success: false,
            code: code ?? defaultCode,
            message,
            errors: errors ?? undefined,
            timestamp: new Date().toISOString(),
        });
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.js.map