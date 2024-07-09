import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

router.post('/login', async function (_req, res): Promise<void> {
  res.send('login')
})

router.post('/get-user', async function (_req, res): Promise<void> {
  res.send('get-user')
})

router.get('/get-users', async function (_req, res): Promise<void> {
  const users = await new PrismaClient().user.findMany()
  console.log(users)
  res.send(users)
})

router.post('/create-user', async function (req, res): Promise<void> {
  const { email, name } = req.body
  const user = await new PrismaClient().user.create({ data: { email, name } })
  console.log(user)
  res.send(user)
})

export default router
