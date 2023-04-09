import { Injectable } from '@nestjs/common'
import { Playlist } from './playlist.interface'

@Injectable()
export class PlaylistService {
  // constructor(
  //   private readonly playlistRepository: PlaylistRepositoryService
  // ) {}

  printPlaylist(playlist: Playlist) {
    playlist.tracks.forEach((t, index) => {
      console.log(`${index}.: ${t.artist} - ${t.name} ${t.length}`)
    })
  }
}
