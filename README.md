## Description

An app that talks to a public [API of HackerNews](https://github.com/HackerNews/API)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

#### Get top word From last 25 stories

    `/stories/from-last-25`

#### Get top word From last 600 stories from user with 10k + karma

    `/stories/from-last-600`

#### Get top word From last week stories

    `/stories/from-last-week`

## License

Nest is [MIT licensed](LICENSE).
