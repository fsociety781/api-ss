export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    readonly errors?: unknown;
    constructor(message: string, statusCode?: number, errors?: unknown, isOperational?: boolean);
}
export declare class BadRequestError extends AppError {
    constructor(message?: string, errors?: unknown);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class ConflictError extends AppError {
    constructor(message?: string);
}
export declare class ValidationError extends AppError {
    constructor(message?: string, errors?: unknown);
}
//# sourceMappingURL=errors.d.ts.map