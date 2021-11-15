import { PrismaClient } from '.prisma/client'

export const getNewArrivalsByGender = async (gender: string) => {
  const prisma = new PrismaClient()

  try {
    const items = await prisma.product.findMany({
      where: {
        gender: gender === 'W' ? 'F' : 'M',
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    })
    return items
  } catch (e) {
    console.log(e)
  }
}
