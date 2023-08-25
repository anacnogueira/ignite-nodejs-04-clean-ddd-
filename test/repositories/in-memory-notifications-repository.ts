import { Notification } from "@/domain/forum/notification/application/enterprise/entitties/notification";
import { NotificationsRepository } from "@/domain/forum/notification/application/repositories/notifications-repository";

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = [];

  async create(notification: Notification) {
    this.items.push(notification);
  }
}
