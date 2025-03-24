import { Inject, Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_REPOSITORY') private readonly eventRepo: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepo.find();
  }

  async findOne(id: number) {
    return await this.eventRepo.findOneByOrFail({ id });
  }

  async create(createEventInput: CreateEventInput) {
    const newEvent = this.eventRepo.create(createEventInput);
    return await this.eventRepo.save(newEvent);
  }
}
