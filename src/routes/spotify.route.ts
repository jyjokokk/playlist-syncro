import express from 'express'
import { SpotifyConnection } from '../connections/platforms/spotify/spotify.connection'
import configService from '../config/config.service'
import repositoryService from '../repository/repository.service'
import { readJSONFile, writeJSONFile } from '../utils/read-and-write-files.util'

const router = express.Router()
const spotifyConnection = new SpotifyConnection(configService.getConfig())

const config = configService.getConfig()
// TODO: temporary solution

router.get('/get-access-token', async function (_req, res) {
  const token = await spotifyConnection.requestToken()
  await repositoryService.repositoryStore.save(token)
  await writeJSONFile(config.LOCAL_DATABASE_PATH, token)
  const db = (await readJSONFile(config.LOCAL_DATABASE_PATH)) as any
  console.log('DB', db)
  res.send(token)
})

router.get('/get-track', async function (_req, res) {
  // TODO: querying ID from request fails
  // const trackId = req.params
  const trackId = '11dFghVXANMlKmJXsNCbNl'
  const db = (await readJSONFile(config.LOCAL_DATABASE_PATH)) as any
  console.log('DB', db)
  const trackData = await spotifyConnection.getTrack(db?.access_token, trackId)
  res.statusCode = 200
  res.send(trackData)
})

export default router
