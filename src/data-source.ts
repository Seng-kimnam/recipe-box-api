import 'dotenv/config';
import { DataSource } from 'typeorm';

// "ts" when run from src/ with ts-node, "js" when run from the compiled dist/ folder.
const ext = __filename.endsWith('.ts') ? 'ts' : 'js';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});