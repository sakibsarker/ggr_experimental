import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const profiles = await prisma.profile.findMany()
    const profilesStringified = profiles.map(profile => {
      return { ...profile, id: profile.id.toString() }
    })
    res.status(200).json(profilesStringified)
  }
}

