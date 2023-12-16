import 'dotenv/config'
import configService from './config/config.service'

const config = configService.getConfig()

console.log('PORT', config.PORT)
