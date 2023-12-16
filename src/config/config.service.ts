import { parseBoolean } from '../utils/parseBoolean.util'

class ConfigService {
  getConfig() {
    const PORT = parseInt(process.env.PORT)
    const IS_LOCAL = parseBoolean(process.env.IS_LOCAL)
    const IS_DEVELOPMENT = parseBoolean(process.env.IS_DEVELOPMENT)
    const IS_PRODUCTION = parseBoolean(process.env.IS_PRODUCTION)
    const HOSTNAME = process.env.HOSTNAME

    return {
      PORT,
      IS_LOCAL,
      IS_DEVELOPMENT,
      IS_PRODUCTION,
      HOSTNAME
    }
  }
}

export default new ConfigService()
