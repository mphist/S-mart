import { PrismaClient } from '.prisma/client'

export const getProductsByCategoryAndGender = async (
  category: string,
  gender: string
) => {
  const prisma = new PrismaClient()

  try {
    const items = await prisma.product.findMany({
      where: {
        category,
        gender: gender === 'W' ? 'F' : 'M',
      },
    })
    return items
  } catch (e) {
    console.log(e)
  }
}
