import { Context } from '../utils/context'

export const getNewArrivalsByTypeAndGender = async (
  type: string,
  gender: string,
  { prisma }: Context
) => {
  try {
    const items = await prisma.product.findMany({
      where: {
        type,
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
