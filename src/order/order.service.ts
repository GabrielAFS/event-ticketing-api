import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderRepo.find();
  }

  async create(createEventInput: any) {
    // TODO: Generate code column
    const newOrder = this.orderRepo.create(createEventInput);
    return await this.orderRepo.save(newOrder);
  }
}
