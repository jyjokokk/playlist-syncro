import { parseBoolean } from '../utils/parseBoolean.util'
import { type ConfigLiterals } from '../utils/types/config.interface'
import { ConfigService } from './config-service.interface'

class ConfigStoreService implements ConfigService {
  private config: ConfigLiterals

  constructor() {
    this.config = this.readConfig()
  }

  private readConfig(): ConfigLiterals {
    const PORT = parseInt(process.env.PORT)
    const IS_LOCAL = parseBoolean(process.env.IS_LOCAL)
    const IS_DEVELOPMENT = parseBoolean(process.env.IS_DEVELOPMENT)
    const IS_PRODUCTION = parseBoolean(process.env.IS_PRODUCTION)
    const HOSTNAME = process.env.HOSTNAME
    const LOCAL_DATABASE_PATH = process.env.LOCAL_DATABASE_PATH
    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN

    return {
      PORT,
      IS_LOCAL,
      IS_DEVELOPMENT,
      IS_PRODUCTION,
      HOSTNAME,
      LOCAL_DATABASE_PATH,
      CLIENT_ID,
      CLIENT_SECRET,
      ACCESS_TOKEN
    }
  }

  public getConfig(key?: string): ConfigLiterals {
    if (key) {
      return this.config[key]
    }
    return this.config
  }
}

export default new ConfigStoreService()
