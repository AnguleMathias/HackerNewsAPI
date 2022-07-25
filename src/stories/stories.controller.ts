import { Controller, Get } from '@nestjs/common';

import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get('from-last-25')
  getTop10WordsLast25() {
    return this.storiesService.getTop10WordsLast25();
  }

  @Get('from-last-week')
  getTop10WordsLastWeek() {
    return this.storiesService.getTop10WordsLastWeek();
  }

  @Get('from-last-600')
  getTop10WordsLast600() {
    return this.storiesService.getTop10WordsLast600();
  }
}
