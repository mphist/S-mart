import { Prisma, PrismaClient } from '@prisma/client'
import { Context } from '../utils/context'
export const addProduct = async (
  id: number,
  type: string,
  category: string,
  gender: string,
  name: string,
  description: string,
  price: number,
  size: Prisma.InputJsonValue,
  image: Prisma.InputJsonArray,
  { prisma }: Context,
  color?: Prisma.InputJsonValue
) => {
  try {
    const prisma_ = new PrismaClient() // prisma bug. Use context in other resolvers
    const check = await prisma_.product.findFirst({
      where: { name: name },
    })
    if (check)
      return {
        error: true,
        message: 'Same product name already exists',
      }

    await prisma_.product.create({
      data: {
        id,
        type,
        category,
        gender,
        name,
        description,
        price,
        size,
        image,
        color,
      },
    })
    return {
      error: false,
      message: 'Product was added',
    }
  } catch (e) {
    console.log(e)
  }
}
