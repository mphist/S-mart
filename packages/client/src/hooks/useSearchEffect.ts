import { useLazyQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { useSearchState } from '../atoms/search'
import { SEARCH_PRODUCTS } from '../graphql/searchProducts'
import { Product } from '../graphql/types'

export default function useSearchEffect() {
  const [searchState, setSearchState] = useSearchState()
  const [products, setProducts] = useState<Product[] | undefined>()
  const [timer, setTimer] = useState<number>()
  const [searchProducts, { loading, data }] = useLazyQuery<{
    searchProducts: Product[] | []
  }>(SEARCH_PRODUCTS)

  const debounce = useCallback(
    (fn: Function, delay: number) => {
      if (timer) {
        clearTimeout(timer)
      }
      const timerId = setTimeout(fn, delay)
      setTimer(timerId)
    },
    [timer, searchProducts, searchState]
  )

  useEffect(() => {
    debounce(
      () => searchProducts({ variables: { name: searchState.name } }),
      500
    )
    setProducts(data?.searchProducts)
  }, [searchProducts, searchState, data, setProducts])

  return { searchState, setSearchState, products }
}
