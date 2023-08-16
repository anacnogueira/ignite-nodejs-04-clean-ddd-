import { Answer } from "../../enterprise/entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface FetchAnswerAnswersUseCaseRequest {
  questionId: string;
  page: number;
}

interface FetchAnswerAnswersUseCaseResponse {
  answers: Answer[];
}

export class FetchAnswerAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchAnswerAnswersUseCaseRequest): Promise<FetchAnswerAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page }
    );

    return {
      answers,
    };
  }
}
