import { gql } from '@apollo/client'

export const GET_BEST_SELLERS = gql`
  query getBestSellers {
    getBestSellers {
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
