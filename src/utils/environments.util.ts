/* istanbul ignore file */
import configService from '../config/config.service'

export function isLocal(): boolean {
  const config = configService.getConfig()
  return config.IS_LOCAL
}

export function isDevelopment(): boolean {
  const config = configService.getConfig()
  return config.IS_DEVELOPMENT
}

export function isProduction(): boolean {
  const config = configService.getConfig()
  return config.IS_PRODUCTION
}
