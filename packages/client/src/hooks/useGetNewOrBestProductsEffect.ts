import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_NEW_ARRIVALS } from '../graphql/getNewArrivals'
import { Product } from '../graphql/types'

export default function useGetNewOrBestProductsEffect() {
  const [getNewArrivals, { loading: loadingNew, data: dataNew }] =
    useLazyQuery<{ getNewArrivals: Product[] }>(GET_NEW_ARRIVALS)
  const [newArrivals, setNewArrivals] = useState<Product[] | undefined>()

  useEffect(() => {
    getNewArrivals()
    setNewArrivals(dataNew?.getNewArrivals)
  }, [getNewArrivals, setNewArrivals, dataNew])

  return { newArrivals }
}
