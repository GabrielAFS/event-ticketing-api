import { Field, InputType, Int } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @IsPositive()
  @Field(() => Int)
  eventId: number;

  @IsPositive()
  @Field(() => Int)
  numberOfTickets: number;
}
