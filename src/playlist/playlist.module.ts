import { Module } from '@nestjs/common';
import { LocalDatabaseApiModule } from '../local-database-api/local-database-api.module';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';

@Module({
  imports: [LocalDatabaseApiModule],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
