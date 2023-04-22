import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const categorys = await prisma.category.findMany()
    const categorysStringified = categorys.map(category => {
      return { ...category, id: category.id.toString() }
    })
    res.status(200).json(categorysStringified)
  }
}

