import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GET_NEW_ARRIVALS_BY_TYPE_AND_GENDER } from '../graphql/getNewArrivalsByTypeAndGender'
import { GET_PRODUCTS_BY_CATEGORY_AND_GENDER } from '../graphql/getProductsByCategoryAndGender'
import { Product } from '../graphql/types'

export default function useProductsQueryEffect() {
  const locationStr = useLocation().pathname.replace('/', '')
  const [gender, setGender] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState<Product[] | undefined>()
  const [loading, setLoading] = useState(true)
  const [
    getProductsByCategoryAndGender,
    { loading: loadingProducts, data: results },
  ] = useLazyQuery<{ getProductsByCategoryAndGender: Product[] }>(
    GET_PRODUCTS_BY_CATEGORY_AND_GENDER,
    {
      variables: { category: category, gender: gender[0]?.toUpperCase() },
    }
  )
  const [
    getNewArrivalsByTypeAndGender,
    { loading: loadingNewArrivals, data: newArrivals },
  ] = useLazyQuery<{ getNewArrivalsByTypeAndGender: Product[] }>(
    GET_NEW_ARRIVALS_BY_TYPE_AND_GENDER,
    {
      variables: { type, gender: gender[0]?.toUpperCase() },
    }
  )

  useEffect(() => {
    setQueryParams(locationStr)
    if (category === 'New Arrivals') {
      getNewArrivalsByTypeAndGender()
      setProducts(newArrivals?.getNewArrivalsByTypeAndGender)
      setLoading(loadingNewArrivals)
    } else {
      getProductsByCategoryAndGender()
      setProducts(results?.getProductsByCategoryAndGender)
      setLoading(loadingProducts)
    }
  }, [
    category,
    loadingNewArrivals,
    loadingProducts,
    results,
    locationStr,
    getProductsByCategoryAndGender,
    getNewArrivalsByTypeAndGender,
    newArrivals,
  ])

  const setQueryParams = (url: string) => {
    const location = url.split('-')
    if (location[location.length - 1] === 'arrivals') {
      setType(location[1])
      setCategory('New Arrivals')
    } else {
      setCategory(location[1])
    }
    setGender(location[0])
  }

  return { loading, products, gender, type, category }
}
