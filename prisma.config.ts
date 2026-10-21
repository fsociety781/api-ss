
import "dotenv/config";

interface DataSource {
  url: string | undefined;
  shadowDatabaseUrl: string | undefined;
}

interface Migrations {
  path: string;
}

interface PrismaConfig {
  schema: string;
  migrations: Migrations;
  datasource: DataSource;
}

const config: PrismaConfig = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
    shadowDatabaseUrl: process.env["SHADOW_DATABASE_URL"],
  },
};

export default config;
