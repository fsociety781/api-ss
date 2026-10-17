"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("../app"));
const bootstrap_app_1 = require("../bootstrap/bootstrap-app");
const env_1 = require("../config/env");
const prismaConfig_1 = require("../bin/prismaConfig");
const mqtt_service_1 = require("../services/mqtt.service");
const logger_1 = require("../utils/logger");
async function startServer() {
    try {
        await (0, bootstrap_app_1.bootstrapApp)();
        const server = http_1.default.createServer(app_1.default);
        server.listen(env_1.env.PORT, '0.0.0.0', () => {
            logger_1.logger.info(`🍄 ShroomSync API Server is running on port ${env_1.env.PORT}`, {
                host: '0.0.0.0',
                port: env_1.env.PORT,
                environment: env_1.env.NODE_ENV,
                docsUrl: `http://localhost:${env_1.env.PORT}/api/docs`,
                healthUrl: `http://localhost:${env_1.env.PORT}/api/health`,
            });
        });
        let isShuttingDown = false;
        const shutdown = async (signal) => {
            if (isShuttingDown)
                return;
            isShuttingDown = true;
            logger_1.logger.info(`Sinyal ${signal} diterima. Memulai proses graceful shutdown...`);
            // Force exit timeout after 10 seconds if graceful shutdown hangs
            const forceExitTimer = setTimeout(() => {
                logger_1.logger.error('Graceful shutdown timeout tercapai (10s). Menghentikan paksa proses.');
                process.exit(1);
            }, 10000);
            forceExitTimer.unref();
            server.close(async (error) => {
                if (error) {
                    logger_1.logger.error('Error saat menutup HTTP server:', error);
                    process.exitCode = 1;
                }
                else {
                    logger_1.logger.info('HTTP server berhasil ditutup (tidak menerima koneksi baru).');
                }
                try {
                    logger_1.logger.info('Menutup koneksi MQTT client...');
                    await mqtt_service_1.mqttService.disconnect();
                    logger_1.logger.info('MQTT client berhasil terputus.');
                }
                catch (mqttErr) {
                    logger_1.logger.error('Gagal memutus koneksi MQTT:', mqttErr);
                }
                try {
                    logger_1.logger.info('Menutup Prisma connection pool...');
                    await prismaConfig_1.prisma.$disconnect();
                    logger_1.logger.info('Prisma connection pool berhasil ditutup.');
                }
                catch (dbErr) {
                    logger_1.logger.error('Gagal menutup koneksi database:', dbErr);
                    process.exitCode = 1;
                }
                logger_1.logger.info('Graceful shutdown selesai dengan bersih. Sampai jumpa!');
                process.exit();
            });
        };
        process.once('SIGINT', () => {
            void shutdown('SIGINT');
        });
        process.once('SIGTERM', () => {
            void shutdown('SIGTERM');
        });
        process.on('unhandledRejection', (reason) => {
            logger_1.logger.error('Unhandled Promise Rejection terdeteksi:', reason);
        });
        process.on('uncaughtException', (err) => {
            logger_1.logger.error('Uncaught Exception fatal:', err);
            void shutdown('UNCAUGHT_EXCEPTION');
        });
    }
    catch (error) {
        logger_1.logger.error('Aplikasi gagal dijalankan pada saat startup:', error);
        await prismaConfig_1.prisma.$disconnect().catch(() => undefined);
        process.exit(1);
    }
}
void startServer();
//# sourceMappingURL=www.js.map