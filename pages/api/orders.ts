import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const orders = await prisma.order.findMany()
    const ordersStringified = orders.map(order => {
      return { ...order, id: order.id.toString() }
    })
    res.status(200).json(ordersStringified)
  }
}

