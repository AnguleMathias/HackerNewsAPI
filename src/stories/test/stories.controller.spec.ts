import { Test, TestingModule } from '@nestjs/testing';
import { StoriesController } from '../stories.controller';
import { StoriesService } from '../stories.service';

describe('StoriesController', () => {
  let storiesController: StoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoriesController],
      providers: [StoriesService],
    }).compile();

    storiesController = module.get<StoriesController>(StoriesController);
  });

  it('should return a success message on get to 10 words for last 25 stories', async () => {
    expect(await storiesController.getTop10WordsLast25()).toHaveProperty(
      'result',
    );
  });

  it('should return a success message on get to 10 words for last week stories', async () => {
    expect(await storiesController.getTop10WordsLastWeek()).toHaveProperty(
      'result',
    );
  });
});
