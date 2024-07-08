import express from 'express'
import spotifyRouter from '../routes/spotify.route'
import userRouter from '../routes/users.route'

const app = express()
app.use('/spotify', spotifyRouter)
app.use('/users', userRouter)

export default app
