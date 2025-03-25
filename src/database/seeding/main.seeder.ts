import { Event } from '../../entities/event.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    _: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const eventFactory = factoryManager.get(Event);

    console.log('seeding events...');
    await eventFactory.saveMany(10);
  }
}
