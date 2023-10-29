import { Injectable } from '@nestjs/common'
import { allPlaylists } from '../constants/testing.const'
import { Playlist } from '../playlist/playlist.interface'

@Injectable()
export class LocalDatabaseApiService {
  helloDb(): void {
    console.log('hello local database!')
  }

  private cachedDb: { playlists: Playlist[] } = { playlists: allPlaylists }

  findAll<T, K extends keyof T>(db: T, dbRoute: K): T[K] {
    return db[dbRoute]
  }

  findAllPlaylists(): Playlist[] {
    return this.findAll(this.cachedDb, 'playlists')
  }
}
