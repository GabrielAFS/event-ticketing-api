import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => Int)
  numberOfTickets: number;

  @Field(() => Float)
  price: number;
}
