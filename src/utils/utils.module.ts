import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import ObjectUtils from './objects.util';

@Module({
  providers: [UtilsService],
  exports: [ObjectUtils],
})
export class UtilsModule {}
