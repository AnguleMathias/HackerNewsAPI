import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Story } from './stories.model';

@Injectable()
export class StoriesService {
  // Return an array of top 10 words in the titles from the last 25 stories
  async getTop10WordsLast25() {
    const titles: string[] = [];
    const word: any = [];
    const wordCounts: { [key: string]: number } = {};

    // fetch new stories
    const storyIds: AxiosResponse<number[]> = await axios.get(
      'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty',
    );

    await Promise.all(
      storyIds.data.slice(-25).map(async (id: number) => {
        const story: AxiosResponse<Story> = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
        );
        titles.push(story.data.title);
      }),
    );

    // split titles into words
    titles.forEach((title: string) => {
      word.push(title.split(' '));
    });

    // count words
    word.forEach((title: string[]) => {
      title.forEach((word: string) => {
        if (wordCounts[word]) {
          wordCounts[word]++;
        } else {
          wordCounts[word] = 1;
        }
      });
    });

    // sort words by count
    const sortWords = Object.entries(wordCounts).sort(
      (a: [string, number], b: [string, number]) => b[1] - a[1],
    );

    // return top 10 words
    return {
      status: 'success',
      result: sortWords.slice(0, 10),
    };
  }

  // Return an array of top 10 words in the titles from the last week stories
  async getTop10WordsLastWeek() {
    const stories: Story[] = [];
    const word: any = [];
    const wordCounts: { [key: string]: number } = {};
    const currentTime = Math.floor(Date.now() / 1000);
    const sevenDaysAgo = currentTime - 604800;

    // fetch new stories
    const storyIds: AxiosResponse<number[]> = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );

    await Promise.all(
      storyIds.data.map(async (id: number) => {
        const story: AxiosResponse<Story> = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
        );
        stories.push(story.data);
      }),
    );

    // filter stories by time
    const filteredStories: Story[] = stories.filter(
      (story: Story) => story.time > sevenDaysAgo,
    );

    // split titles into words
    const titles: string[] = filteredStories.map((story: Story) => story.title);

    // split titles into words
    titles.forEach((title: string) => {
      word.push(title.split(' '));
    });

    // count words
    word.forEach((title: string[]) => {
      title.forEach((word: string) => {
        if (wordCounts[word]) {
          wordCounts[word]++;
        } else {
          wordCounts[word] = 1;
        }
      });
    });

    // sort words by count
    const sortWords = Object.entries(wordCounts).sort(
      (a: [string, number], b: [string, number]) => b[1] - a[1],
    );

    // return top 10 words
    return {
      status: 'success',
      result: sortWords.slice(0, 10),
    };
  }

  // Return an array of top 10 words in the titles from the last 600 stories
  async getTop10WordsLast600() {
    return { status: 'success', result: 'success' };
  }
}
