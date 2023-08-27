import { Notification } from "@/domain/forum/notification/application/enterprise/entitties/notification";
import { NotificationsRepository } from "@/domain/forum/notification/application/repositories/notifications-repository";

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = [];

  async findById(id: string): Promise<Notification | null> {
    const notification = this.items.find((item) => item.id.toString() === id);

    if (!notification) {
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.items.push(notification);
  }

  async save(notification: Notification) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === notification.id
    );

    this.items[itemIndex] = notification;
  }
}