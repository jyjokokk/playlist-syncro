import configService from '../config/config.service'
import { SpotifyConnection } from './platforms/spotify/spotify.connection'

class ConnectionService {
  readonly config = configService.getConfig()
  spotifyConnection = new SpotifyConnection(this.config)
}

export default new ConnectionService()
