import { Config } from '../interfaces/config.interface'

export abstract class Store {
  constructor(protected readonly config: Config) {
    this.connect()
  }

  abstract save(): void
  abstract getAll(): unknown
  protected abstract connect(): void
}
