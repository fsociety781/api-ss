import { Response } from 'express';
export declare class ApiResponse {
    static success<T>(res: Response, data?: T, message?: string, statusCode?: number): Response;
    static error(res: Response, message?: string, statusCode?: number, errors?: unknown, code?: string): Response;
}
//# sourceMappingURL=api-response.d.ts.map