import configService from './config/config.service'
import repositoryService from './repository/repository.service'
import connectionsService from './connections/connections.service'
import { isProduction } from './utils/environments.util'
// import { HTTP } from './utils/http.util'
// import { CONTENT_TYPES } from './constants/request-options.const'

class App {
  async execute(): Promise<void> {
    const config = configService.getConfig()
    const db = await repositoryService.centralStore.getAll()
    console.log(config)
    console.log('DB', db)

    if (isProduction()) {
      connectionsService.spotifyConnection.getPlaylistTracks('')
      const r = await connectionsService.spotifyConnection.requestToken()
      console.log('TOUKKA', r)
    }
  }
}

export default new App()
