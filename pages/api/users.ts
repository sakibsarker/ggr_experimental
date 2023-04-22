import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      const usersStringified = users.map(user => {
        return { ...user, id: user.id.toString() }
      })
      res.status(200).json(usersStringified)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

