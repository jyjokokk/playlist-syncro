import { AccessTokenResponse } from '../types/auth.interface'
import { CONTENT_TYPES } from '../constants/content-types.cont'
import { ApiHTTP } from '../api/api-http'
import configService from '../../config/config.service'

export class ApiSpotify extends ApiHTTP {
  constructor() {
    super()
  }

  async getToken(): Promise<AccessTokenResponse> {
    const { CLIENT_ID, CLIENT_SECRET } = configService.getConfig()
    const url = 'https://accounts.spotify.com/api/token'
    const data = {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
    const response = await this.post({
      url,
      variables: data,
      contentType: CONTENT_TYPES.APPLICATION.FORM_URLENCODED
    })
    return response
  }

  async getTrack(accessToken: string, id: string): Promise<any> {
    const url = `https://api.spotify.com/v1/tracks/${id}`
    const response = await this.get({
      url,
      variables: { accessToken }
    })
    return response
  }
}

export default new ApiSpotify()
