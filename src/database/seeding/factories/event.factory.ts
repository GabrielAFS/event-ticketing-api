import { Faker } from '@faker-js/faker';
import { Event } from '../../../entities/event.entity';
import { setSeederFactory } from 'typeorm-extension';

export const EventFactory = setSeederFactory(Event, (faker: Faker) => {
  const event = new Event();

  event.name = faker.word.words(3);
  event.description = faker.word.words({ count: { min: 10, max: 20 } });
  event.date = faker.date.soon();
  event.numberOfTickets = faker.number.int({ max: 100 });
  event.price = faker.number.float({ fractionDigits: 2 });

  return event;
});
