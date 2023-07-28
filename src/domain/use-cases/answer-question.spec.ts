import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("Create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova Resposta",
  });

  expect(answer.content).toEqual("Nova Resposta");
});
