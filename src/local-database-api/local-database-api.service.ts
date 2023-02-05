import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalDatabaseApiService {
  helloDb(): void {
    console.log('hello local database!');
  }
}
