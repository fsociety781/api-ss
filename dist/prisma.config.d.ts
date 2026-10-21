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
declare const config: PrismaConfig;
export default config;
//# sourceMappingURL=prisma.config.d.ts.map