import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';

import { MainSeeder } from './main.seeder';
import { EventFactory } from './factories/event.factory';
import { dataSourceOptions } from '../database.config';

const options: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,
  factories: [EventFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
