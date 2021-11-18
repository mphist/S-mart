import { Context } from '../utils/context'

export const getProductsByCategoryAndGender = async (
  category: string,
  gender: string,
  { prisma }: Context
) => {
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
