import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GET_PRODUCT } from '../graphql/getProduct'
import { Product } from '../graphql/types'

export function useGetProductEffect() {
  const path = useLocation().pathname
  const temp = path.split('-')
  const id = Number(temp[temp.length - 1])
  const [getProduct, { loading, data }] = useLazyQuery<{ getProduct: Product }>(
    GET_PRODUCT,
    { variables: { id } }
  )
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    getProduct()
    setProduct(data?.getProduct)
  }, [getProduct, setProduct, data])

  return product
}
