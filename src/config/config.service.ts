import { Config } from '../interfaces/config.interface'
import { parseBoolean } from '../utils/parseBoolean.util'

class ConfigService {
  getConfig(): Config {
    const PORT = parseInt(process.env.PORT)
    const IS_LOCAL = parseBoolean(process.env.IS_LOCAL)
    const IS_DEVELOPMENT = parseBoolean(process.env.IS_DEVELOPMENT)
    const IS_PRODUCTION = parseBoolean(process.env.IS_PRODUCTION)
    const HOSTNAME = process.env.HOSTNAME
    const LOCAL_DATABASE_PATH = process.env.LOCAL_DATABASE_PATH
    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET

    return {
      PORT,
      IS_LOCAL,
      IS_DEVELOPMENT,
      IS_PRODUCTION,
      HOSTNAME,
      LOCAL_DATABASE_PATH,
      CLIENT_ID,
      CLIENT_SECRET
    }
  }
}

// TODO: export just the output of getConfig()
export default new ConfigService()
