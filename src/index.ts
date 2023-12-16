import 'dotenv/config'
import configService from './config/config.service'

const config = configService.config()

export function add(a: number, b: number): number {
  return a + b
}

console.log('PORT', config.PORT)
