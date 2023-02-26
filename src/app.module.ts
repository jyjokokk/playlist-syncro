import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistModule } from './playlist/playlist.module';
import { UtilsModule } from './utils/utils.module';
import { LocalDatabaseApiModule } from './local-database-api/local-database-api.module';
import { LinkedListModule } from './linked-list/linked-list.module';

@Module({
  imports: [
    PlaylistModule,
    UtilsModule,
    LocalDatabaseApiModule,
    LinkedListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
