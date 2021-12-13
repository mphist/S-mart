import { Context } from '../utils/context'

export const searchProducts = async (name: string, { prisma }: Context) => {
  if (name === '') return []
  try {
    const item = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    })
    return item
  } catch (e) {
    console.log(e)
  }
}
