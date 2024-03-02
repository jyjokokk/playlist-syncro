import configService from './config/config.service'
import repositoryService from './repository/repository.service'
import connectionsService from './connections/connections.service'
import { isProduction } from './utils/environments.util'
import express from 'express'
import { writeJSONFile } from './utils/read-and-write-files.util'
import http from './utils/api-http/http.util'

class App {
  async execute(): Promise<void> {
    const config = configService.getConfig()
    const db = await repositoryService.centralStore.getAll()
    console.log(config)
    console.log('DB', db)

    const app = express()
    app.get('/login', function (_, res): void {
      const redir = 'http://localhost:3030/callback'
      const url = `https://accounts.spotify.com/authorize?client_id=91635ea9f47f46ecbd65e94fdffbfe64&response_type=code&redirect_uri=${redir}&scope=user-read-private%20user-read-email&state=1232145`

      res.redirect(url)
    })

    app.get('/callback', async function (req, res): Promise<void> {
      const code = req.query.code || null
      const redir = encodeURIComponent('http://localhost:3030/callback')
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redir,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(config.CLIENT_ID + ':' + config.CLIENT_SECRET).toString(
              'base64'
            )
        },

        json: true
      }
      console.log(authOptions)
      await writeJSONFile('authOptions.json', authOptions)
      const headers: any = authOptions.headers
      await http.post({ url: authOptions.url, data: authOptions.form })
      res.json(authOptions)
      return null
      // }
    })
    if (isProduction()) {
      connectionsService.spotifyConnection.getPlaylistTracks('')
      const r = await connectionsService.spotifyConnection.requestToken()
      console.log('TOUKKA', r)
    }
    app.listen(3030)
  }
}

export default new App()
