import { Test, TestingModule } from '@nestjs/testing'
import { PlaylistService } from './playlist.service'
import { PlaylistRepository } from './playlist.repository'

describe('PlaylistService', () => {
  let service: PlaylistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaylistService, PlaylistRepository],
    }).compile()

    service = module.get<PlaylistService>(PlaylistService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
