import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { DatabaseModule } from 'src/database/database.module';
import { orderProviders } from './order.providers';
import { eventProviders } from 'src/event/event.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...orderProviders,
    ...eventProviders,
    OrderResolver,
    OrderService,
  ],
})
export class OrderModule {}
