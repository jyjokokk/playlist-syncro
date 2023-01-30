# nest-playlist-sync

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub latest commit](https://badgen.net/github/last-commit/jyjokokk/nest-playlist-sync)](https://GitHub.com/Naereen/StrapDown.js/commit/)

Service for managing and synchronising playlists over different streaming services.

Written in TypeScript using [NestJS][nestjs], extended with [nest-commander][nest-commander] to provide CLI functionality.

---

## Development

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com) > 1.22.0

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

Use the provided [ESLint][eslint] and [Prettier][prettier] configurations to enforce code style.
ESLint configuration is provided, and should be automatically picked up by most IDEs.
To run analysis on all source files in the repository, you can run `yarn lint`.

The project is set to run Prettier to all staged files in a pre-commit hook via [Husky](https://github.com/typicode/husky), but if you want to manually trigger formating on all files, run `yarn format`.

<!-- ## Deployment

Add additional notes to deploy this on a live system -->

<!-- ## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us. -->

### Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this repository](https://github.com/jyjokokk/nest-playlist-sync/tags).

### Built With

- [NestJS][nestjs] - Framework for building efficient, scalable Node.js server-side applications.
- [nest-commander][nest-commander] - Package that extends NestJS by providing tooling and dependencies for running a NestJS application instance as a CLI application.
- [SQLite3][sqlite3] - Lightweight local relational database.

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[nestjs]: https;//nestjs.com
[nest-commander]: https://nest-commander.jaymcdoniel.dev/
[sqlite3]: https://sqlite.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
