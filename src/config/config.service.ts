import { parseBoolean } from '../utils/parseBoolean.util'
import { type ConfigLiterals } from '../utils/types/config.interface'
import { ConfigService } from './config-service.interface'
import * as dotenv from 'dotenv'

class ConfigStoreService implements ConfigService {
  private config: ConfigLiterals

  constructor() {
    this.config = this.readConfig()
  }

  private readConfig(): ConfigLiterals {
    dotenv.config()
    const environmentals = {
      PORT: parseInt(process.env.PORT),
      IS_LOCAL: parseBoolean(process.env.IS_LOCAL),
      IS_DEVELOPMENT: parseBoolean(process.env.IS_DEVELOPMENT),
      IS_PRODUCTION: parseBoolean(process.env.IS_PRODUCTION),
      HOSTNAME: process.env.HOSTNAME,
      LOCAL_DATABASE_PATH: process.env.LOCAL_DATABASE_PATH,
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      SQLITE_PATH: process.env.SQLITE_PATH,
      DATABASE_URL: process.env.DATABASE_URL
    }

    return {
      ...environmentals
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
