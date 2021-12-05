import { Product } from '.prisma/client'
import { Context } from '../utils/context'

const parseType = (str: string) => {
  const type = str.replace(' & ', '&').replace(/ /g, '_').toLowerCase()
  return type
}

export const getProductsFilteredByTypesAndGender = async (
  types: string[],
  gender: string,
  { prisma }: Context
) => {
  try {
    const items: Product[][] = []

    await Promise.all(
      types.map(async (type) => {
        const tempItems = await prisma.product.findMany({
          where: {
            category: parseType(type),
            gender: gender === 'W' ? 'F' : 'M',
          },
        })
        items.push(tempItems)
      })
    )

    return items
  } catch (e) {
    console.log(e)
  }
}
