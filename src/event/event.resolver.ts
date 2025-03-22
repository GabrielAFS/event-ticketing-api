import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Event } from 'src/entities/event.entity';
import { EventService } from './event.service';
import { CreateEventInput } from './dto/create-event.input';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [Event], { name: 'events' })
  async findAll() {
    return await this.eventService.findAll();
  }

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }
}
