import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private readonly eventRepo: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepo.find();
  }

  async create(createEventInput: CreateEventInput) {
    const newEvent = this.eventRepo.create(createEventInput);
    return await this.eventRepo.save(newEvent);
  }
}
