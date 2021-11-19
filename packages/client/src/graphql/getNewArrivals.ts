import { gql } from '@apollo/client'

export const GET_NEW_ARRIVALS = gql`
  query getNewArrivals {
    getNewArrivals {
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
