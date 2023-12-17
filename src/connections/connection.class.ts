import { Config } from '../interfaces/config.interface'

export abstract class ServiceConnection {
  constructor(protected readonly config: Config) {}

  abstract requestToken(clientId: string, clientSecret: string): Promise<string>
  abstract getPlaylistTracks(playlistId: string): unknown
  abstract getPlaylists(userId: string): unknown
}
