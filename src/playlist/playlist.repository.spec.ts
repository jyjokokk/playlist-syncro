import { Test, TestingModule } from '@nestjs/testing'
import { LocalDatabaseApiModule } from '../local-database-api/local-database-api.module'
import { PlaylistRepository } from './playlist.repository'

import { allPlaylists } from '../constants/testing.const'

describe('PlaylistService', () => {
  let service: PlaylistRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LocalDatabaseApiModule],
      providers: [PlaylistRepository],
    }).compile()

    service = module.get<PlaylistRepository>(PlaylistRepository)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getAll', () => {
    it('should not be null', () => {
      const r = service.getAll()
      expect(r).not.toBeFalsy()
    })
  })

  describe('CRUD Operations', () => {
    it('should findAll playlists', async () => {
      const r = await service.getAll()
      expect(r).toStrictEqual(allPlaylists)
    })
  })
})
