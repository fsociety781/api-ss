"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const env_1 = require("./config/env");
const requestLogger_1 = require("./middleware/requestLogger");
const rateLimiter_1 = require("./middleware/rateLimiter");
const errorHandler_1 = require("./middleware/errorHandler");
const api_response_1 = require("./utils/api-response");
const health_routes_1 = __importDefault(require("./routes/health.routes"));
const swagger_1 = __importDefault(require("./docs/swagger"));
const index_1 = __importDefault(require("./routes/auth/index"));
const index_2 = __importDefault(require("./routes/technician/index"));
const index_3 = __importDefault(require("./routes/admin/index"));
const index_4 = __importDefault(require("./routes/farmer/index"));
const index_5 = __importDefault(require("./routes/device/index"));
const control_routes_1 = __importDefault(require("./routes/control.routes"));
const telemetry_routes_1 = __importDefault(require("./routes/telemetry.routes"));
const cycle_routes_1 = __importDefault(require("./routes/cycle.routes"));
const app = (0, express_1.default)();
// ── Security Headers ──────────────────────────
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false, // Allows Swagger UI to render inline styles/scripts
    crossOriginEmbedderPolicy: false,
}));
// ── CORS Configuration ────────────────────────
app.use((0, cors_1.default)({
    origin: env_1.env.CORS_ORIGIN === '*'
        ? true
        : env_1.env.CORS_ORIGIN.split(',').map((origin) => origin.trim()),
    credentials: true,
}));
// ── HTTP Request Parsers & Loggers ───────────
if (env_1.env.NODE_ENV !== 'test') {
    app.use((0, morgan_1.default)(env_1.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}
app.use(requestLogger_1.requestLogger);
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use((0, cookie_parser_1.default)());
// Static Files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), {
    dotfiles: 'allow',
}));
// ── Interactive API Documentation (Swagger) ───
app.use('/api/docs', swagger_1.default);
app.use('/api/v1/docs', swagger_1.default);
// ── Health Probing (Deep DB + MQTT Check) ─────
app.use('/api/health', health_routes_1.default);
app.use('/api/v1/health', health_routes_1.default);
// ── Root Greeting ─────────────────────────────
app.get('/', (_req, res) => {
    api_response_1.ApiResponse.success(res, {
        service: 'ShroomSync Enterprise IoT API',
        version: '2.0.0',
        status: 'operational',
        documentation: '/api/docs',
        healthCheck: '/api/health',
    }, 'Selamat datang di ShroomSync API Service');
});
// ── Rate Limiting Protection ──────────────────
app.use('/api/v1/auth/login', rateLimiter_1.authLimiter);
app.use('/api/v1/devices/:deviceId/actuator', rateLimiter_1.actuatorLimiter);
app.use('/api/v1/devices/:deviceId/control', rateLimiter_1.actuatorLimiter);
app.use('/api/v1', rateLimiter_1.apiLimiter);
// ── API Routes (v1) ───────────────────────────
app.use('/api/v1/auth', index_1.default);
// Role-based routes
app.use('/api/v1/technician', index_2.default);
app.use('/api/v1/admin', index_3.default);
app.use('/api/v1/farmer', index_4.default);
// Device, Control, Telemetry & Cycle Routes (100% api-shroomsync frontend compatible)
app.use('/api/v1/devices', index_5.default);
app.use('/api/v1/devices', control_routes_1.default);
app.use('/api/v1/devices', telemetry_routes_1.default);
app.use('/api/v1/devices', cycle_routes_1.default);
// ── Catch 404 for undefined routes ────────────
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: `Route ${req.method} ${req.path} tidak ditemukan`,
        code: 'ROUTE_NOT_FOUND',
        timestamp: new Date().toISOString(),
    });
});
// ── Global Error Handler ──────────────────────
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map