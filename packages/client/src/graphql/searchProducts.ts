import { gql } from '@apollo/client'

export const SEARCH_PRODUCTS = gql`
  query searchProducts($name: String) {
    searchProducts(name: $name) {
      type
      gender
      name
      description
      price
      image
      id
    }
  }
`
