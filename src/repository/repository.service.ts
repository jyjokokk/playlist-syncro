import { ConfigService } from '../config/config-service.interface'
import CentralStore from './central-store'
import configService from '../config/config.service'

class RepositoryService {
  readonly repositoryStore = null
  constructor(configService: ConfigService) {
    this.repositoryStore = new CentralStore(configService)
  }
}

export default new RepositoryService(configService)
