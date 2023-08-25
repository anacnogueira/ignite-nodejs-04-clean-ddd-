import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import { Either, right } from "@/core/either";
import { Notification } from "../enterprise/entitties/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationUseCaseRequest {
  recipientId: string;
  title: string;
  content: string;
}

type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification;
  }
>;

export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    });

    await this.notificationsRepository.create(notification);

    return right({
      notification,
    });
  }
}
