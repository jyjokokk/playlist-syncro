import { Injectable } from '@nestjs/common';
import { allPlaylists } from '../constants/testing.const';

@Injectable()
export class LocalDatabaseApiService {
  helloDb(): void {
    console.log('hello local database!');
  }

  private allPlaylists = allPlaylists;

  private cachedDb = { playlists: this.allPlaylists };

  async findAll(dbRoute: string): Promise<any[]> {
    return await this.cachedDb[dbRoute];
  }
}
