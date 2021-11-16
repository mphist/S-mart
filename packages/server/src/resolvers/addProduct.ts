import { Prisma, PrismaClient } from '@prisma/client'
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
  color?: Prisma.InputJsonValue
) => {
  const prisma = new PrismaClient()

  try {
    const check = await prisma.product.findFirst({
      where: { name: name },
    })
    if (check)
      return {
        error: true,
        message: 'Same product name already exists',
      }

    const item = await prisma.product.create({
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
