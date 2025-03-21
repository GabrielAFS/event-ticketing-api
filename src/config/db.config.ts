import { config } from 'dotenv';
import * as path from 'path';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

config();

export default (): MysqlConnectionOptions => ({
  type: 'mysql',
  host: process.env.host,
  port: +process.env.port,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

  synchronize: true, // Don't use it on production!
});
