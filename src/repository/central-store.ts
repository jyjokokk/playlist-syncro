import { Config } from '../interfaces/config.interface'
import { JSONFileContent } from '../interfaces/json-file.interface'
import { readJSONFile, writeJSONFile } from '../utils/read-and-write-files.util'
import { Store } from './store.class'

class CentralStore extends Store {
  protected readonly config: Config
  private readonly filePath = this.config.LOCAL_DATABASE_PATH

  async save(data: unknown): Promise<boolean> {
    return await writeJSONFile(this.filePath, data)
  }

  async getAll(): Promise<JSONFileContent> {
    return await readJSONFile(this.filePath)
  }

  async connect(): Promise<boolean> {
    try {
      await readJSONFile(this.filePath)
    } catch (err) {
      console.error('Error in connecting to repository:', err)
      return false
    }
  }
}

export default CentralStore
