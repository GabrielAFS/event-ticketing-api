import { Query, Resolver } from '@nestjs/graphql';
import { Event } from 'src/entities/event.entity';
import { EventService } from './event.service';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [Event], { name: 'events' })
  async findAll() {
    return await this.eventService.findAll();
  }
}
