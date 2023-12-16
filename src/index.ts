import 'dotenv/config'
import configService from './config/config.service'

const config = configService.config()

export function add(a: number, b: number): number {
  return a + b
}

export const joku = {
  a: 'avs',
  bool: true
}

console.log('PORT', config.PORT)
console.log('PORT', config.PORT)
console.log('JOTAINJOTAINJOTAIN')
console.log('JOTAINJOTAINJOTAIN')
