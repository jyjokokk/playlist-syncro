import { Module } from '@nestjs/common'
import { LocalDatabaseApiService } from './local-database-api.service'

@Module({
  providers: [LocalDatabaseApiService],
  exports: [LocalDatabaseApiService],
})
export class LocalDatabaseApiModule {}
