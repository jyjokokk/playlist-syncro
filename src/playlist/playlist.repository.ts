import { Injectable } from '@nestjs/common'
import { Playlist } from './playlist.interface'
import { allPlaylists } from '../constants/testing.const'

@Injectable()
export class PlaylistRepository {
  private readonly playlists: Playlist[] = allPlaylists

  getAll(): Playlist[] {
    return this.playlists
  }

  getById(id: string): Playlist {
    return this.playlists.find((p) => {
      return p.id === id
    })
  }
}
