import { PrismaClient } from '.prisma/client'

export const getProduct = async (id: number) => {
  const prisma = new PrismaClient()

  try {
    const item = await prisma.product.findFirst({ where: { id } })
    return item
  } catch (e) {
    console.log(e)
  }
}
