import { type ConfigService } from '../config/config-service.interface'
import { JSONFileContent } from '../utils/types/json-file.interface'

export abstract class Store {
  constructor(protected readonly configService: ConfigService) {}

  abstract save(data: JSONFileContent): Promise<boolean>
  abstract getAll(): Promise<JSONFileContent>
  protected abstract connect(): unknown
}
