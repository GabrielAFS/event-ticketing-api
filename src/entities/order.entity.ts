import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';

@ObjectType()
@Entity()
export class Order {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field(() => Int)
  @Column()
  numberOfTickets: number;

  @Field(() => Event)
  @ManyToOne(() => Event, (event) => event.orders)
  event: Promise<Event>;
}
