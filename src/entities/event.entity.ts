import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Event {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  date: Date;

  @Field(() => Int)
  @Column({ default: 0 })
  numberOfTickets: number;

  @Field(() => Float)
  @Column({ default: 0 })
  price: number;
}
