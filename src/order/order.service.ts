import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { Order } from '../entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { randomUUID } from 'crypto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private readonly orderRepo: Repository<Order>,
    @Inject('EVENT_REPOSITORY')
    private readonly eventRepo: Repository<Event>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderRepo.find();
  }

  async create(createOrderInput: CreateOrderInput) {
    const { eventId, numberOfTickets } = createOrderInput;

    const code = randomUUID();
    const event = await this.eventRepo.findOne({ where: { id: eventId } });

    if (!event) throw new Error('Event not found.');

    const newOrder = this.orderRepo.create({
      numberOfTickets,
      code,
    });
    const savedOrder = await this.orderRepo.save(newOrder);

    event.numberOfTickets -= numberOfTickets;
    (await event.orders).push(savedOrder);

    await this.eventRepo.save(event);

    return savedOrder;
  }
}
