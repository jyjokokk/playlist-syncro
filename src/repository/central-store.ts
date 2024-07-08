import { JSONFileContent } from '../utils/types/json-file.interface'
import { readJSONFile, writeJSONFile } from '../utils/read-and-write-files.util'
import { Store } from './store.class'
import { ConfigService } from '../config/config-service.interface'
import { ConfigLiterals } from '../utils/types/config.interface'

class CentralStore extends Store {
  private readonly config: ConfigLiterals

  constructor(readonly configService: ConfigService) {
    super(configService)
    this.config = this.configService.getConfig()
  }

  async save(data: unknown): Promise<boolean> {
    return await writeJSONFile(this.config.LOCAL_DATABASE_PATH, data)
  }

  async getAll(): Promise<JSONFileContent> {
    return await readJSONFile(this.config.LOCAL_DATABASE_PATH)
  }

  async connect(): Promise<boolean> {
    try {
      await readJSONFile(this.config.LOCAL_DATABASE_PATH)
    } catch (err) {
      console.error('Error in connecting to repository:', err)
      return false
    }
  }
}

export default CentralStore
