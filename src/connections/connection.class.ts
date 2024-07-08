import { ConfigLiterals } from '../utils/types/config.interface'

export abstract class ServiceConnection {
  constructor(protected readonly config: ConfigLiterals) {}

  abstract requestToken(clientId: string, clientSecret: string): Promise<string>
  // abstract getPlaylistTracks(playlistId: string): unknown
  // abstract getPlaylists(userId: string): unknown
}
