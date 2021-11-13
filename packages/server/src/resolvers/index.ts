import { colorScalar, imageScalar, sizeScalar } from '../typeDefs'
import { addProduct } from './addProduct'
import { getProduct } from './getProduct'

export const resolvers = {
  Color: colorScalar,
  Size: sizeScalar,
  Image: imageScalar,
  Query: {
    getProduct: async (_: any, { id }: any, context: any) => {
      try {
        const res = await getProduct(id)
        return res
      } catch (e) {
        console.log(e)
      }
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      { id, type, gender, name, description, price, color, size, image }: any,
      context: any
    ) => {
      try {
        const res = await addProduct(
          id,
          type,
          gender,
          name,
          description,
          price,
          color,
          size,
          image
        )
        return res
      } catch (e) {
        return { error: true, message: 'Could not add the product' }
      }
    },
  },
}
