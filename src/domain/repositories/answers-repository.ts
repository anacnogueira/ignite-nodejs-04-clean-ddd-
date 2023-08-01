import { Answer } from "../entities/answer";

export interface AnswersRepository {
  create(awswer: Answer): Promise<void>;
}
