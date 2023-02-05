import { Inject, Injectable } from '@nestjs/common';
import { LocalDatabaseApiService } from '../local-database-api/local-database-api.service';

@Injectable()
export class PlaylistRepository {
  constructor(private readonly localDbAPI: LocalDatabaseApiService) {}

  callApi() {
    this.localDbAPI.helloDb();
  }
}
