"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const env_1 = require("../config/env");
const LEVEL_SEVERITY = {
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
    constructor() {
        this.currentLevel = env_1.env.LOG_LEVEL;
    }
    shouldLog(level) {
        return LEVEL_SEVERITY[level] >= LEVEL_SEVERITY[this.currentLevel];
    }
    formatMessage(level, message, meta) {
        if (!this.shouldLog(level))
            return;
        const timestamp = new Date().toISOString();
        if (env_1.env.NODE_ENV === 'production') {
            const payload = {
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
            }
            else if (meta && typeof meta === 'object') {
                payload.metadata = meta;
            }
            process.stdout.write(`${JSON.stringify(payload)}\n`);
            return;
        }
        // Development pretty format
        const levelColors = {
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
        }
        else if (meta && typeof meta === 'object' && Object.keys(meta).length > 0) {
            metaStr = ` ${COLORS.dim}${JSON.stringify(meta)}${COLORS.reset}`;
        }
        const output = `${timeStr} ${levelStr} ${message}${metaStr}\n`;
        if (level === 'error') {
            process.stderr.write(output);
        }
        else {
            process.stdout.write(output);
        }
    }
    debug(message, meta) {
        this.formatMessage('debug', message, meta);
    }
    info(message, meta) {
        this.formatMessage('info', message, meta);
    }
    warn(message, meta) {
        this.formatMessage('warn', message, meta);
    }
    error(message, meta) {
        this.formatMessage('error', message, meta);
    }
}
exports.logger = new Logger();
//# sourceMappingURL=logger.js.map