import { CONTENT_TYPES } from '../../../constants/request-options.const'
import { Config } from '../../../interfaces/config.interface'
import { writeJSONFile } from '../../../utils/read-and-write-files.util'
import { ServiceConnection } from '../../connection.class'
import axios from 'axios'

export class SpotifyConnection extends ServiceConnection {
  protected readonly config: Config

  async requestToken(): Promise<string> {
    const data = [
      ['grant_type', 'client_credentials'],
      ['client_id', this.config.CLIENT_ID],
      ['client_secret', this.config.CLIENT_SECRET]
    ]
    const body = new URLSearchParams(data)
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': CONTENT_TYPES.APPLICATION.FORM_URLENCODED
      }
    })
    const r = await response.json()
    return r.access_token as string
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
