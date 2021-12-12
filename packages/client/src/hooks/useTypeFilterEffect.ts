import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useFilterState } from '../atoms/filters'
import { GET_PRODUCTS_FILTERED_BY_TYPES_AND_GENDER } from '../graphql/getProductsFilteredByTypesAndGender'
import { Product } from '../graphql/types'
import useProductsQueryEffect from './useProductsQueryEffect'

export default function useTypeFilterEffect(gender: string) {
  const [filter, setFilter] = useFilterState()
  const { category } = useProductsQueryEffect()
  const [products, setProducts] = useState<Product[] | undefined>()
  const [getProductsFilteredByTypesAndGender, { loading, data }] =
    useLazyQuery<{ getProductsFilteredByTypesAndGender: Product[][] }>(
      GET_PRODUCTS_FILTERED_BY_TYPES_AND_GENDER,
      { variables: { types: filter.type, gender: gender?.[0]?.toUpperCase() } }
    )

  useEffect(() => {
    const session = sessionStorage.getItem('filter')
    let storedFilter: string[] = []
    if (session) {
      storedFilter = JSON.parse(session)
    }
    const parsedCategory = parseCategory(category)

    if (storedFilter && storedFilter.length > 0) {
      setFilter({ ...filter, type: storedFilter })
    } else if (parsedCategory) {
      setFilter({ ...filter, type: [parsedCategory] })
    }
  }, [category, setFilter])

  useEffect(() => {
    if (filter.type) {
      getProductsFilteredByTypesAndGender()
      const tempProducts: Product[] = []
      data?.getProductsFilteredByTypesAndGender.forEach((products) =>
        tempProducts.push(...products)
      )
      setProducts(tempProducts)
    }
  }, [filter, data, getProductsFilteredByTypesAndGender])

  return { filter, setFilter, category, products, loading }
}

const parseCategory = (category: string) => {
  if (category === '') {
    return null
  }
  const arrAnd = category.split('&')
  const arrUnder = category.split('_')

  let string: string = ''
  if (arrAnd.length > 1) {
    arrAnd.forEach(
      (str) => (string += ' ' + str[0].toUpperCase() + str.slice(1) + ' &')
    )
  } else if (arrUnder.length > 1) {
    arrUnder.forEach(
      (str) => (string += ' ' + str[0].toUpperCase() + str.slice(1))
    )
    return string.slice(1)
  } else {
    return category[0]?.toUpperCase() + category.slice(1)
  }
  const cat = string.slice(1, string.length - 2)
  return cat
}
