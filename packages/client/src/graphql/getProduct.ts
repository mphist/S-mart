import { gql } from '@apollo/client'

export const GET_PRODUCT = gql`
  query getProduct($id: Int) {
    getProduct(id: $id) {
      id
      type
      gender
      name
      description
      price
      color
      size
      image
      soldCount
    }
  }
`
