import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { FetchRecentQuestionsUseCase } from "./fetch-recent-questions";
import { makeQuestion } from "test/factories/make-question";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: FetchRecentQuestionsUseCase;

describe("Fetch Recent Questions", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to fetch recent questions", async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 7, 16),
      })
    );

    await inMemoryQuestionsRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 7, 1),
      })
    );

    await inMemoryQuestionsRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 7, 15),
      })
    );

    const result = await sut.execute({
      page: 1,
    });

    expect(result.value?.questions).toEqual([
      expect.objectContaining({
        createdAt: new Date(2023, 7, 16),
      }),
      expect.objectContaining({
        createdAt: new Date(2023, 7, 15),
      }),
      expect.objectContaining({
        createdAt: new Date(2023, 7, 1),
      }),
    ]);
  });
});
