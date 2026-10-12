import { env } from '../config/env';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LEVEL_SEVERITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

class Logger {
  private currentLevel: LogLevel;

  constructor() {
    this.currentLevel = env.LOG_LEVEL;
  }

  private shouldLog(level: LogLevel): boolean {
    return LEVEL_SEVERITY[level] >= LEVEL_SEVERITY[this.currentLevel];
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    meta?: Record<string, unknown> | Error | unknown,
  ): void {
    if (!this.shouldLog(level)) return;

    const timestamp = new Date().toISOString();

    if (env.NODE_ENV === 'production') {
      const payload: Record<string, unknown> = {
        timestamp,
        level: level.toUpperCase(),
        message,
      };

      if (meta instanceof Error) {
        payload.error = {
          name: meta.name,
          message: meta.message,
          stack: meta.stack,
        };
      } else if (meta && typeof meta === 'object') {
        payload.metadata = meta;
      }

      process.stdout.write(`${JSON.stringify(payload)}\n`);
      return;
    }

    // Development pretty format
    const levelColors: Record<LogLevel, string> = {
      debug: COLORS.cyan,
      info: COLORS.green,
      warn: COLORS.yellow,
      error: COLORS.red,
    };

    const levelStr = `${levelColors[level]}[${level.toUpperCase()}]${COLORS.reset}`;
    const timeStr = `${COLORS.dim}${timestamp}${COLORS.reset}`;

    let metaStr = '';
    if (meta instanceof Error) {
      metaStr = `\n${COLORS.red}${meta.stack || meta.message}${COLORS.reset}`;
    } else if (meta && typeof meta === 'object' && Object.keys(meta).length > 0) {
      metaStr = ` ${COLORS.dim}${JSON.stringify(meta)}${COLORS.reset}`;
    }

    const output = `${timeStr} ${levelStr} ${message}${metaStr}\n`;
    if (level === 'error') {
      process.stderr.write(output);
    } else {
      process.stdout.write(output);
    }
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this.formatMessage('debug', message, meta);
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.formatMessage('info', message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.formatMessage('warn', message, meta);
  }

  error(message: string, meta?: Record<string, unknown> | Error | unknown): void {
    this.formatMessage('error', message, meta);
  }
}

export const logger = new Logger();

