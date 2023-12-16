import { parseBoolean } from '../utils/parseBoolean.util'

class ConfigService {
  config() {
    const PORT = parseInt(process.env.PORT)
    const IS_LOCAL = parseBoolean(process.env.IS_LOCAL)
    const IS_DEVELOPMENT = parseBoolean(process.env.IS_DEVELOPMENT)
    const IS_PRODUCTION = parseBoolean(process.env.IS_PRODUCTION)

    return {
      PORT,
      IS_LOCAL,
      IS_DEVELOPMENT,
      IS_PRODUCTION
    }
  }
}

export default new ConfigService()
