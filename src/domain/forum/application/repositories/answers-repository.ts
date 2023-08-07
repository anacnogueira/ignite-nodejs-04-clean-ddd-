import { Answer } from "../../enterprise/entities/answer";

export interface AnswersRepository {
  create(awswer: Answer): Promise<void>;
}
