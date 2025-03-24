import { Module } from '@nestjs/common';
import { EventResolver } from './event.resolver';
import { EventService } from './event.service';
import { DatabaseModule } from 'src/database/database.module';
import { eventProviders } from './event.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...eventProviders, EventResolver, EventService],
})
export class EventModule {}
