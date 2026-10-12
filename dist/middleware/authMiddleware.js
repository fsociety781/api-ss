"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
exports.optionalAuth = optionalAuth;
const prismaConfig_1 = require("../bin/prismaConfig");
const token_1 = require("../utils/token");
const errors_1 = require("../utils/errors");
require("../types/auth");
async function authMiddleware(req, _res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new errors_1.UnauthorizedError('Token otentikasi tidak ditemukan');
        }
        const token = authHeader.substring(7).trim();
        if (!token) {
            throw new errors_1.UnauthorizedError('Format token otentikasi tidak valid');
        }
        let payload;
        try {
            payload = (0, token_1.verifyToken)(token);
        }
        catch {
            throw new errors_1.UnauthorizedError('Token tidak valid atau telah kedaluwarsa');
        }
        const user = await prismaConfig_1.prisma.user.findUnique({
            where: { id: payload.userId },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                profileCompleted: true,
                mustChangePassword: true,
            },
        });
        if (!user) {
            throw new errors_1.UnauthorizedError('Pengguna tidak ditemukan atau telah dihapus');
        }
        if (user.status === 'SUSPENDED') {
            throw new errors_1.ForbiddenError('Akun Anda ditangguhkan (SUSPENDED). Hubungi administrator.');
        }
        if (user.status === 'INACTIVE') {
            throw new errors_1.ForbiddenError('Akun Anda tidak aktif.');
        }
        req.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
}
async function optionalAuth(req, _res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next();
        }
        const token = authHeader.substring(7).trim();
        if (!token) {
            return next();
        }
        let payload;
        try {
            payload = (0, token_1.verifyToken)(token);
        }
        catch {
            return next();
        }
        const user = await prismaConfig_1.prisma.user.findUnique({
            where: { id: payload.userId },
            select: {
                id: true,
                fullName: true,
                phoneNumber: true,
                email: true,
                role: true,
                status: true,
                profileCompleted: true,
                mustChangePassword: true,
            },
        });
        if (user && user.status !== 'SUSPENDED' && user.status !== 'INACTIVE') {
            req.user = user;
        }
        next();
    }
    catch {
        next();
    }
}
//# sourceMappingURL=authMiddleware.js.map