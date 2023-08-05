import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/entities/types/optional";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updateAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return question;
  }
}
