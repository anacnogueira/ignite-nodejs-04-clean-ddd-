import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import { Answer } from "../../enterprise/entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";

interface ChooseQuestionBestAwswerUseCaseRequest {
  authorId: string;
  answerId: string;
}

interface ChooseQuestionBestAwswerUseCaseResponse {
  question: Question;
}

export class ChooseQuestionBestAwswerUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private answersRepository: AnswersRepository
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseQuestionBestAwswerUseCaseRequest): Promise<ChooseQuestionBestAwswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found.");
    }

    const question = await this.questionRepository.findById(
      answer.questionId.toString()
    );

    if (!question) {
      throw new Error("Question not found.");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not Allowed.");
    }

    question.bestAnswerId = answer.id;

    await this.questionRepository.save(question);

    return {
      question,
    };
  }
}
