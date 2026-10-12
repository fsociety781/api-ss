import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("../src/generated/prisma/runtime/client").DefaultArgs>;
export { prisma };
//# sourceMappingURL=prismaConfig.d.ts.map