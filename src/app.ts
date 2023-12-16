import configService from './config/config.service'
import repositoryService from './repository/repository.service'

class App {
  async execute(): Promise<void> {
    const config = configService.getConfig()
    const r = await repositoryService.centralStore.getAll()
    console.log(config)
    console.log(r)
  }
}

export default new App()
