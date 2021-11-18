import { colorScalar, imageScalar, sizeScalar } from '../typeDefs'
import { Context } from '../utils/context'
import { addProduct } from './addProduct'
import { getNewArrivalsByTypeAndGender } from './getNewArrivalsByTypeAndGender'
import { getProduct } from './getProduct'
import { getProductsByCategoryAndGender } from './getProductsByCategoryAndGender'

export const resolvers = {
  Color: colorScalar,
  Size: sizeScalar,
  Image: imageScalar,
  Query: {
    getProduct: async (_: any, { id }: any, context: Context) => {
      try {
        const res = await getProduct(id, context)
        return res
      } catch (e) {
        console.log(e)
      }
    },
    getProductsByCategoryAndGender: async (
      _: any,
      { category, gender }: any,
      context: Context
    ) => {
      try {
        const res = await getProductsByCategoryAndGender(
          category,
          gender,
          context
        )
        return res
      } catch (e) {
        console.log(e)
      }
    },
    getNewArrivalsByTypeAndGender: async (
      _: any,
      { type, gender }: any,
      context: Context
    ) => {
      try {
        const res = await getNewArrivalsByTypeAndGender(type, gender, context)
        return res
      } catch (e) {
        console.log(e)
      }
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      {
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
      }: any,
      context: Context
    ) => {
      try {
        const res = await addProduct(
          id,
          type,
          category,
          gender,
          name,
          description,
          price,
          size,
          image,
          context,
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
