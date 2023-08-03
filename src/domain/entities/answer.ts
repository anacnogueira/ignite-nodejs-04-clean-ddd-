import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
  createdAt: Date;
  updateAt?: Date;
}

export class Answer extends Entity<AnswerProps> {}
