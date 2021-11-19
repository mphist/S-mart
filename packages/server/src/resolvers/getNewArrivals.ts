import { Context } from '../utils/context'

export const getNewArrivals = ({ prisma }: Context) => {
  try {
    const items = prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
    return items
  } catch (e) {
    console.log(e)
  }
}
