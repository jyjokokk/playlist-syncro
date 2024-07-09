import express from 'express'
import spotifyRouter from '../routes/spotify.route'
import userRouter from '../routes/users.route'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/spotify', spotifyRouter)
app.use('/users', userRouter)

// Port
app.listen(3030, () => {})

export default app
