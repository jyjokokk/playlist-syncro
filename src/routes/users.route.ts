import express from 'express'

const router = express.Router()

router.post('/login', async function (_req, res): Promise<void> {
  res.send('login')
})

router.post('/get-user', async function (_req, res): Promise<void> {
  res.send('get-user')
})

export default router
