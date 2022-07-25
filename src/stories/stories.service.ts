import { Injectable } from '@nestjs/common';

@Injectable()
export class StoriesService {
  // Return an array of top 10 words from the last 25 stories
  async getTop10WordsLast25() {
    return { status: 'success', mesage: 'success' };
  }

  // Return an array of top 10 words from the last week stories
  async getTop10WordsLastWeek() {
    return { status: 'success', mesage: 'success' };
  }

  // Return an array of top 10 words from the last 600 stories
  async getTop10WordsLast600() {
    return { status: 'success', mesage: 'success' };
  }
}
