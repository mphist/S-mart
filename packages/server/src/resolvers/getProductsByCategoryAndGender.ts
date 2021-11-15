import { PrismaClient } from '.prisma/client'

export const getProductsByCategoryAndGender = async (
  category: string,
  gender: string
) => {
  const prisma = new PrismaClient()

  try {
    const items = await prisma.product.findMany({
      where: {
        type: category,
        gender: gender,
      },
    })
    return items
  } catch (e) {
    console.log(e)
  }
}
