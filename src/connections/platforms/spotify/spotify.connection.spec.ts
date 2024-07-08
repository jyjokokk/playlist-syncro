import { SpotifyConnection } from './spotify.connection'
const token = 'test-token'
const trackId = 'test-track-id'
const trackName = 'Test Track'
const testTrack = {
  id: trackId,
  name: trackName
}

const configService: any = {
  getConfig: () => {
    return { LOCAL_DATABASE_PATH: 'test-path' }
  }
}

jest.mock('../../../utils/api-http/api-spotify', () => {
  return {
    getTrack: () => {
      calls.apiSpotify.getTrack = true
      return { id: trackId, name: 'Test Track' }
    }
  }
})

let instance: SpotifyConnection
let calls: any
beforeEach(() => {
  instance = new SpotifyConnection(configService)
  calls = {
    apiSpotify: {}
  }
})

describe('SpotifyConnection', () => {
  describe('getTrack', () => {
    it('should return track data', async () => {
      const trackData = await instance.getTrack(token, trackId)
      expect(trackData).toEqual(testTrack)
    })

    it('calls apiSpotify.getTrack', async () => {
      await instance.getTrack(token, trackId)
      expect(calls.apiSpotify.getTrack).toBe(true)
    })
  })
})
