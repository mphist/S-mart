import { Context } from '../utils/context'

export const getProduct = async (id: number, { prisma }: Context) => {
  try {
    const item = await prisma.product.findFirst({ where: { id } })
    return item
  } catch (e) {
    console.log(e)
  }
}
