import { Product } from '.prisma/client'
import { Context } from '../utils/context'

export const getProductsFilteredByTypesAndGender = async (
  types: string[],
  gender: string,
  { prisma }: Context
) => {
  try {
    const items: Product[][] = []
    types.forEach(async (type) => {
      const tempItems = await prisma.product.findMany({
        where: {
          type,
          gender: gender === 'W' ? 'F' : 'M',
        },
      })
      items.push(tempItems)
    })

    console.log(items)
  } catch (e) {
    console.log(e)
  }
}
