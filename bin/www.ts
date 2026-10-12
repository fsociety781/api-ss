import http from 'http';
import app from '../app';
import { bootstrapApp } from '../bootstrap/bootstrap-app';
import { env } from '../config/env';
import { prisma } from '../bin/prismaConfig';
import { mqttService } from '../services/mqtt.service';
import { logger } from '../utils/logger';

async function startServer(): Promise<void> {
  try {
    await bootstrapApp();

    const server = http.createServer(app);

    server.listen(env.PORT, () => {
      logger.info(`🍄 ShroomSync API Server is running on port ${env.PORT}`, {
        port: env.PORT,
        environment: env.NODE_ENV,
        docsUrl: `http://localhost:${env.PORT}/api/docs`,
        healthUrl: `http://localhost:${env.PORT}/api/health`,
      });
    });

    let isShuttingDown = false;

    const shutdown = async (signal: string): Promise<void> => {
      if (isShuttingDown) return;
      isShuttingDown = true;

      logger.info(`Sinyal ${signal} diterima. Memulai proses graceful shutdown...`);

      // Force exit timeout after 10 seconds if graceful shutdown hangs
      const forceExitTimer = setTimeout(() => {
        logger.error('Graceful shutdown timeout tercapai (10s). Menghentikan paksa proses.');
        process.exit(1);
      }, 10000);
      forceExitTimer.unref();

      server.close(async (error) => {
        if (error) {
          logger.error('Error saat menutup HTTP server:', error);
          process.exitCode = 1;
        } else {
          logger.info('HTTP server berhasil ditutup (tidak menerima koneksi baru).');
        }

        try {
          logger.info('Menutup koneksi MQTT client...');
          await mqttService.disconnect();
          logger.info('MQTT client berhasil terputus.');
        } catch (mqttErr) {
          logger.error('Gagal memutus koneksi MQTT:', mqttErr);
        }

        try {
          logger.info('Menutup Prisma connection pool...');
          await prisma.$disconnect();
          logger.info('Prisma connection pool berhasil ditutup.');
        } catch (dbErr) {
          logger.error('Gagal menutup koneksi database:', dbErr);
          process.exitCode = 1;
        }

        logger.info('Graceful shutdown selesai dengan bersih. Sampai jumpa!');
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
      logger.error('Unhandled Promise Rejection terdeteksi:', reason);
    });

    process.on('uncaughtException', (err) => {
      logger.error('Uncaught Exception fatal:', err);
      void shutdown('UNCAUGHT_EXCEPTION');
    });
  } catch (error) {
    logger.error('Aplikasi gagal dijalankan pada saat startup:', error);
    await prisma.$disconnect().catch(() => undefined);
    process.exit(1);
  }
}

void startServer();