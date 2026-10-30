"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const ext = __filename.endsWith('.ts') ? 'ts' : 'js';
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
});
//# sourceMappingURL=data-source.js.map