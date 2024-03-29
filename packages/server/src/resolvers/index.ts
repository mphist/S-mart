import { colorScalar, imageScalar, sizeScalar } from '../typeDefs'
import { Context } from '../utils/context'
import { addProduct } from './addProduct'
import { getBestSellers } from './getBestSellers'
import { getNewArrivals } from './getNewArrivals'
import { getNewArrivalsByTypeAndGender } from './getNewArrivalsByTypeAndGender'
import { getProduct } from './getProduct'
import { getProductsByCategoryAndGender } from './getProductsByCategoryAndGender'
import { getProductsFilteredByTypesAndGender } from './getProductsFilteredByTypesAndGender'
import { searchProducts } from './searchProducts'

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
    getNewArrivals: async (_: any, __: any, context: Context) => {
      try {
        const res = await getNewArrivals(context)
        return res
      } catch (e) {
        console.log(e)
      }
    },
    getBestSellers: async (_: any, __: any, context: Context) => {
      try {
        const res = await getBestSellers(context)
        return res
      } catch (e) {
        console.log(e)
      }
    },
    getProductsFilteredByTypesAndGender: async (
      _: any,
      { types, gender }: any,
      context: Context
    ) => {
      try {
        const res = await getProductsFilteredByTypesAndGender(
          types,
          gender,
          context
        )
        return res
      } catch (e) {
        console.log(e)
      }
    },
    searchProducts: async (_: any, { name }: any, context: Context) => {
      try {
        const res = await searchProducts(name, context)
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
