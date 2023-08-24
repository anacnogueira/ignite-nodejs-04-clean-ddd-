import { Entity } from "@/core/types/entities/entity";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface NotificationProps {
  recipientId: UniqueEntityID;
  title: string;
  content: string;
  createAt: Date;
  readAt?: Date;
}
export class Notifications extends Entity<NotificationProps> {
  get recipientId() {
    return this.props.recipientId;
  }

  get title() {
    return this.props.title;
  }
  get content() {
    return this.props.content;
  }

  get createAt() {
    return this.props.createAt;
  }

  get readAt() {
    return this.props.readAt;
  }

  static create(
    props: Optional<NotificationProps, "createAt">,
    id?: UniqueEntityID
  ) {
    const notification = new Notifications(
      {
        ...props,
        createAt: props.createAt ?? new Date(),
      },
      id
    );

    return notification;
  }
}
