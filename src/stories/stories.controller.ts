import { Controller, Get } from '@nestjs/common';

import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(storiesService: StoriesService) {}

  @Get()
  getStories() {
    return 'Get stories!';
  }
}
