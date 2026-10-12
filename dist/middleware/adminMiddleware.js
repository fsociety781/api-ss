"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = adminMiddleware;
const errors_1 = require("../utils/errors");
function adminMiddleware(req, _res, next) {
    if (!req.user) {
        return next(new errors_1.UnauthorizedError('Otentikasi diperlukan'));
    }
    if (req.user.role !== 'ADMIN' && req.user.role !== 'TECHNICIAN') {
        return next(new errors_1.ForbiddenError('Hanya administrator yang berhak mengakses endpoint ini'));
    }
    next();
}
//# sourceMappingURL=adminMiddleware.js.map