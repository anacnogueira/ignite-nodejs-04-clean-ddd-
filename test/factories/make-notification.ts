import { faker } from "@faker-js/faker";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import {
  NotificationProps,
  Notification,
} from "@/domain/forum/notification/application/enterprise/entitties/notification";

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID
) {
  const notification = Notification.create(
    {
      recipientId: new UniqueEntityID(),
      title: faker.lorem.sentence(4),
      content: faker.lorem.sentence(10),
      ...override,
    },
    id
  );

  return notification;
}
