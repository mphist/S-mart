import { gql } from 'apollo-server-express'
import { GraphQLScalarType } from 'graphql'

export const typeDefs = gql`
  scalar Color
  scalar Size
  scalar Image

  type Product {
    id: Int
    type: String
    gender: String
    name: String
    description: String
    price: Float
    color: Color
    size: Size
    image: Image
    rating: Float
    soldCount: Int
    review: [Review]
  }

  type Review {
    title: String
    rating: Int
    description: String
    name: String
  }

  type Query {
    getProduct(id: Int): Product
  }

  type Mutation {
    addProduct(
      id: Int
      type: String
      gender: String
      name: String
      description: String
      price: Float
      size: Size
      image: Image
      color: Color
    ): AddProductResponse!
  }

  type AddProductResponse {
    error: Boolean!
    message: String
  }
`
export const colorScalar = new GraphQLScalarType({
  name: 'Color',
  description: 'Color custom scalar type',
  serialize(value) {
    console.log(value)
    return value
  },
})

export const sizeScalar = new GraphQLScalarType({
  name: 'Size',
  description: 'Size custom scalar type',
  serialize(value) {
    console.log(value)
    return value
  },
})

export const imageScalar = new GraphQLScalarType({
  name: 'Image',
  description: 'Image custom scalar type',
  serialize(value) {
    console.log(value)
    return value
  },
})
