import { gql } from '@apollo/client'

export const GET_PRODUCTS_FILTERED_BY_TYPES_AND_GENDER = gql`
  query getProductsFilteredByTypesAndGender($types: [String], $gender: String) {
    getProductsFilteredByTypesAndGender(types: $types, gender: $gender) {
      id
      type
      gender
      name
      description
      price
      color
      size
      image
      rating
      soldCount
      review {
        title
        rating
        description
        name
      }
    }
  }
`
