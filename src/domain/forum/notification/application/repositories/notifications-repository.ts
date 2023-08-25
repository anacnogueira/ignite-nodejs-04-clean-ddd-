import { Notification } from "../enterprise/entitties/notification";

export interface NotificationsRepository {
  create(notification: Notification): Promise<void>;
}
