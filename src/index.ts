import 'dotenv/config'
import configService from './config/config.service'
import repositoryService from './repository/repository.service'

const config = configService.getConfig()
// console.log(config)
repositoryService.centralStore.save()

console.log('PORT', config.PORT)
