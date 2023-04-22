import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany()
    const productsStringified = products.map(product => {
      return { ...product, id: product.id.toString() }
    })
    res.status(200).json(productsStringified)
  }
}

