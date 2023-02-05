import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistModule } from './playlist/playlist.module';
import { UtilsModule } from './utils/utils.module';
import { LocalDatabaseApiModule } from './local-database-api/local-database-api.module';

@Module({
  imports: [PlaylistModule, UtilsModule, LocalDatabaseApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
