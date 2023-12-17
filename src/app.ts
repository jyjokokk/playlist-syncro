import configService from './config/config.service'
import repositoryService from './repository/repository.service'
import connectionsService from './connections/connections.service'

class App {
  async execute(): Promise<void> {
    const config = configService.getConfig()
    const db = await repositoryService.centralStore.getAll()

    // placeholder
    connectionsService.spotifyConnection.getPlaylistTracks('')
    console.log(config)
    console.log('DB', db)
  }
}

export default new App()
