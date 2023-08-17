import { Entity } from "@/core/types/entities/entity";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

export interface QuestionCommentProps {
  authorId: UniqueEntityID;
  questionIf: UniqueEntityID;
  content: string;
  createdAt: Date;
  updateAt?: Date;
}

export class QuestionComment extends Entity<QuestionCommentProps> {
  get authorId() {
    return this.props.authorId;
  }

  get content() {
    return this.props.content;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  static create(
    props: Optional<QuestionCommentProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return questionComment;
  }
}