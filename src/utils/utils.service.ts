import { Global, Injectable } from '@nestjs/common';
import { pickProperties, clone } from './objects.util';

@Global()
@Injectable()
export class UtilsService {
  clone<T>(obj: T): T {
    return clone(obj);
  }
}
