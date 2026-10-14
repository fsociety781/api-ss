"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.prisma = void 0;
require("dotenv/config");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../src/generated/prisma/client");
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg_1.Pool({
    connectionString,
    max: process.env.NODE_ENV === 'production' ? 20 : 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});
exports.pool = pool;
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
exports.prisma = prisma;
//# sourceMappingURL=prismaConfig.js.map