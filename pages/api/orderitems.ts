import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const orderitems = await prisma.orderitem.findMany()
    const orderitemsStringified = orderitems.map(orderitem => {
      return { ...orderitem, id: orderitem.id.toString() }
    })
    res.status(200).json(orderitemsStringified)
  }
}

