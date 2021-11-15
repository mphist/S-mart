import { gql } from '@apollo/client'

export const GET_PRODUCTS_BY_CATEGORY_AND_GENDER = gql`
  query getProductsByCategoryAndGender($category: String, $gender: String) {
    getProductsByCategoryAndGender(category: $category, gender: $gender) {
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
