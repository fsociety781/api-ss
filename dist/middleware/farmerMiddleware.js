"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerMiddleware = farmerMiddleware;
const errors_1 = require("../utils/errors");
function farmerMiddleware(req, _res, next) {
    if (!req.user) {
        return next(new errors_1.UnauthorizedError('Otentikasi diperlukan'));
    }
    if (req.user.role !== 'FARMER' &&
        req.user.role !== 'ADMIN' &&
        req.user.role !== 'TECHNICIAN') {
        return next(new errors_1.ForbiddenError('Hanya petani yang berhak mengakses endpoint ini'));
    }
    next();
}
//# sourceMappingURL=farmerMiddleware.js.map