import { gql } from '@apollo/client'

export const GET_NEW_ARRIVALS_BY_TYPE_AND_GENDER = gql`
  query getNewArrivalsByTypeAndGender($type: String, $gender: String) {
    getNewArrivalsByTypeAndGender(type: $type, gender: $gender) {
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
