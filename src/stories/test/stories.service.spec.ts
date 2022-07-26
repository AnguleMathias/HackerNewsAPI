import { Test, TestingModule } from '@nestjs/testing';
import { StoriesService } from '../stories.service';

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoriesService],
    }).compile();

    service = module.get<StoriesService>(StoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of top 10 words in the titles from the last 25 stories', async () => {
    const result = await service.getTop10WordsLast25();
    expect(result.result.length).toEqual(10);
  });

  it('should return an array of top 10 words in the titles from the last week stories', async () => {
    const result = await service.getTop10WordsLastWeek();
    expect(result.result.length).toEqual(10);
  });
});
