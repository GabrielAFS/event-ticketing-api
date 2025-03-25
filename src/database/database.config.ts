import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.host,
  port: +process.env.port,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
