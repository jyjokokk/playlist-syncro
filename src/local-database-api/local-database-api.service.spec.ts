import { Test, TestingModule } from '@nestjs/testing';
import { LocalDatabaseApiService } from './local-database-api.service';

describe('LocalDatabaseApiService', () => {
  let service: LocalDatabaseApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalDatabaseApiService],
    }).compile();

    service = module.get<LocalDatabaseApiService>(LocalDatabaseApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
