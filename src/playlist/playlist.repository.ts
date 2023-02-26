import { Injectable } from '@nestjs/common';
import { LocalDatabaseApiService } from '../local-database-api/local-database-api.service';
import { Playlist } from './playlist.interface';

@Injectable()
export class PlaylistRepository {
  constructor(private readonly localDatabaseAPI: LocalDatabaseApiService) {}

  callApi() {
    this.localDatabaseAPI.helloDb();
  }

  async findAll(): Promise<Playlist[]> {
    return this.localDatabaseAPI.findAll('playlists');
  }
}
