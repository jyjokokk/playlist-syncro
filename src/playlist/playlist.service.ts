import { Injectable } from '@nestjs/common'
import { Playlist } from './playlist.interface'
import { PlaylistRepository } from './playlist.repository'

@Injectable()
export class PlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

  getAll(): Playlist[] {
    return this.playlistRepository.getAll()
  }

  getById(id: string): Playlist {
    return this.playlistRepository.getById(id)
  }

  printPlaylist(playlist: Playlist) {
    playlist.tracks.forEach((t, index) => {
      console.log(`${index}.: ${t.artist.name} - ${t.name} ${t.length}`)
    })
  }
}
