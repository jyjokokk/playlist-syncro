import configService from '../../config/config.service'
import { CONTENT_TYPES } from '../../constants/request-options.const'
import { AccessTokenResponse } from '../../interfaces/auth.interface'
import { ApiHTTP } from './api-http'

export class ApiSpotify extends ApiHTTP {
  private readonly config = configService.getConfig()

  async getToken(): Promise<AccessTokenResponse> {
    const data = [
      ['grant_type', 'client_credentials'],
      ['client_id', this.config.CLIENT_ID],
      ['client_secret', this.config.CLIENT_SECRET]
    ]
    return (await this.post({
      endpoint: 'https://accounts.spotify.com/api/token',
      variables: {
        'Content-Type': CONTENT_TYPES.APPLICATION.FORM_URLENCODED,
        data
      }
    })) as AccessTokenResponse
  }
}

const apiSpotify = new ApiSpotify()

export default apiSpotify
