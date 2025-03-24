import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  eventId: number;

  @Field(() => Int)
  numberOfTickets: number;
}
