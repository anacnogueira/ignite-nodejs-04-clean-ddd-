import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entities";
import { Optional } from "../../core/entities/types/optional";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return student;
  }
}
