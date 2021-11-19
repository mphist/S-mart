import { Context } from '../utils/context'

export const getBestSellers = ({ prisma }: Context) => {
  try {
    const items = prisma.product.findMany({
      orderBy: { soldCount: 'desc' },
      take: 5,
    })
    return items
  } catch (e) {
    console.log(e)
  }
}
