import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order], { name: 'orders' })
  async findAll() {
    return await this.orderService.findAll();
  }

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }
}
