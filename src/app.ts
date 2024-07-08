import repositoryService from './repository/repository.service'
import express, { type Request, type Response } from 'express'
import apiSpotify from './utils/api-http/api-spotify'

class App {
  async execute(): Promise<void> {
    const db = await repositoryService.repositoryStore.getAll()
    // console.log('DB', db)

    const app = express()
    app.get(
      '/login',
      async function (_req: Request, res: Response): Promise<void> {
        const token = await apiSpotify.getToken()
        // console.log('TOKEN', token)
        await repositoryService.repositoryStore.save(token)
        res.redirect('/callback')
      }
    )

    app.get('/callback', async function (_req, res): Promise<void> {
      const trackId = '2TpxZ7JUBn3uw46aR7qd6V'
      const trackData = await apiSpotify.getTrack(db?.access_token, trackId)
      // console.log('TRACK_DATA', trackData)
      res.statusCode = 200
      // res.json(trackData)
      res.send(trackData)
    })
    app.listen(3030)
  }
}

export default new App()
