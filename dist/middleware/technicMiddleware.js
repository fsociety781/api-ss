"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technicMiddleware = technicMiddleware;
const errors_1 = require("../utils/errors");
function technicMiddleware(req, _res, next) {
    if (!req.user) {
        return next(new errors_1.UnauthorizedError('Otentikasi diperlukan'));
    }
    if (req.user.role !== 'TECHNICIAN') {
        return next(new errors_1.ForbiddenError('Hanya teknisi yang berhak mengakses endpoint ini'));
    }
    next();
}
//# sourceMappingURL=technicMiddleware.js.map