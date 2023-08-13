import { InMemoryAnswersRepository } from "test/repositories/in-memopry-answers-repository";
import { makeAnswer } from "test/factories/make-answer";
import { EditAnswerUseCase } from "./edit-answer";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: EditAnswerUseCase;

describe("Edit Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new EditAnswerUseCase(inMemoryAnswersRepository);
  });

  it("should be able to edit a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID("author-1"),
      },
      new UniqueEntityID("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await sut.execute({
      authorId: "author-1",
      answerId: newAnswer.id.toValue(),
      content: "New Content",
    });

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: "New Content",
    });
  });

  it("should not to be able to edit a answer from another", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID("author-1"),
      },
      new UniqueEntityID("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await expect(() => {
      return sut.execute({
        authorId: "author-2",
        answerId: newAnswer.id.toValue(),
        content: "New Content",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
