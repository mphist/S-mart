import { colorScalar, imageScalar, sizeScalar } from '../typeDefs'
import { addProduct } from './addProduct'
import { getProduct } from './getProduct'
import { getProductsByCategoryAndGender } from './getProductsByCategoryAndGender'

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
    getProductsByCategoryAndGender: async (
      _: any,
      { category, gender }: any,
      context: any
    ) => {
      try {
        const res = await getProductsByCategoryAndGender(category, gender)
        return res
      } catch (e) {
        console.log(e)
      }
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      { id, type, gender, name, description, price, size, image, color }: any,
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
          size,
          image,
          color
        )
        return res
      } catch (e: any) {
        return {
          error: true,
          message: 'Could not add the product. ' + e.message,
        }
      }
    },
  },
}
