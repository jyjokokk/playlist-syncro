import configService from '../config/config.service'
import CentralStore from './central-store'

class RepositoryService {
  readonly config = configService.getConfig()
  centralStore = new CentralStore(this.config)
}

export default new RepositoryService()
