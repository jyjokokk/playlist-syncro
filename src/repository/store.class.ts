import { Config } from '../interfaces/config.interface'
import { JSONFileContent } from '../interfaces/json-file.interface'

export abstract class Store {
  constructor(protected readonly config: Config) {
    this.connect()
  }

  abstract save(data: JSONFileContent): Promise<boolean>
  abstract getAll(): Promise<JSONFileContent>
  protected abstract connect(): unknown
}
