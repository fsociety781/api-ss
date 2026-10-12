export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
declare class Logger {
    private currentLevel;
    constructor();
    private shouldLog;
    private formatMessage;
    debug(message: string, meta?: Record<string, unknown>): void;
    info(message: string, meta?: Record<string, unknown>): void;
    warn(message: string, meta?: Record<string, unknown>): void;
    error(message: string, meta?: Record<string, unknown> | Error | unknown): void;
}
export declare const logger: Logger;
export {};
//# sourceMappingURL=logger.d.ts.map