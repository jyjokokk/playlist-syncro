import { Config } from '../../../interfaces/config.interface'
import { writeJSONFile } from '../../../utils/read-and-write-files.util'
import { ServiceConnection } from '../../connection.class'
import axios from 'axios'

export class SpotifyConnection extends ServiceConnection {
  protected readonly config: Config

  async requestToken(): Promise<string> {
    const data = {
      grant_type: 'client_credentials',
      client_id: this.config.CLIENT_ID,
      client_secret: this.config.CLIENT_SECRET
    }
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    // console.log('TOKEN', response.data?.access_token)
    return response?.data?.access_token as string
    // apiPost('https://accounts.spotify.com/api/token', )
    // // return new Promise((resolve, reject) => {
    // //   console.log('done')
    // //   resolve('')
    // //   if (!clientId) {
    // //     console.log(clientSecret)
    // //     reject('')
    // //   }
    // // })
  }

  async getUser(token: string): Promise<string> {
    const Authorization = `Bearer ${token}`
    try {
      const r = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization
        }
      })
      console.log(r.data)
      return r?.data?.id as string
    } catch (error) {
      console.log('fail')
    }
  }

  getPlaylistTracks(playlistId: string): void {
    console.log(playlistId)
  }

  async getPlaylists(userId: string): Promise<void> {
    const playlists = await axios.get(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: {
          Authorization: `Bearer`
        }
      }
    )
    await writeJSONFile(this.config.LOCAL_DATABASE_PATH, playlists.data)
  }

  async plWrapper(): Promise<void> {
    const token = await this.requestToken()
    console.log('TOKEN', token)
    await this.getUser(token)
    // console.log(user)
    // await this.getPlaylists(user)
  }
}
