import { gql } from '@apollo/client'

export const GET_NEW_ARRIVALS_BY_GENDER = gql`
  query getNewArrivalsByGender($gender: String) {
    getNewArrivalsByGender(gender: $gender) {
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
