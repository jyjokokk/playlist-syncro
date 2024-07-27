# nest-playlist-sync

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
[![GitHub last commit](https://img.shields.io/github/last-commit/jyjokokk/nest-playlist-sync)](https://github.com/jyjokokk/nest-playlist-sync/commit/)

Service for managing and synchronising playlists over different streaming services.

Written in TypeScript using [Express 4](https://expressjs.com/) and [Prisma](https://prisma.io/).

---

## Table of Contents

- [nest-playlist-sync](#nest-playlist-sync)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
      - [Required](#required)
      - [Optional](#optional)
    - [Installing and running locally](#installing-and-running-locally)
    - [Testing](#testing)
    - [Code Style \& Linting](#code-style--linting)
    - [Versioning](#versioning)
  - [License](#license)

---

## Development

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push.

#### Required

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com) > 1.22.0

#### Optional

- [Python 3.11](https://www.python.org)
  - Only needed if you plan to run data or schema migrations using the `yarn prisma:migration` command.
- [sqlite3](https://sqlite.org/)
  - Also only needed if running screma or data migrations.

### Installing and running locally

Simply clone the repo, and run the installation command with yarn:

    git clone https://github.com/jyjokokk/nest-playlist-manager
    cd nest-playlist-manager
    yarn install

Start the service by running the `start` script from `package.json`

    yarn start

Development mode

    yarn start:dev

### Testing

For unit tests, run `yarn test` (use `yarn test:watch` for development), and `yarn test:e2e` for end-to-end testing.

### Code Style & Linting

Uses [ESLint][eslint] and [Prettier][prettier] to enforce code style and formating. Configurations are provided, and should be automatically picked up by most IDEs.

To run analysis on all source files in the repository, you can run `yarn lint`.

The project is set to run Prettier to all staged files in a pre-commit hook via [Husky](https://github.com/typicode/husky), but if you want to manually trigger formating on all files, run `yarn format`.

<!-- ## Deployment

Add additional notes on deploying this on a live system -->

<!-- ## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us. -->

### Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this repository](https://github.com/jyjokokk/nest-playlist-sync/tags).

<!-- ### Built With

- [NestJS][nestjs] - Framework for building efficient, scalable Node.js server-side applications.
- [nest-commander][nest-commander] - Package that extends NestJS by providing tooling and dependencies for running a NestJS application instance as a CLI application. -->

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for more details.

[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
