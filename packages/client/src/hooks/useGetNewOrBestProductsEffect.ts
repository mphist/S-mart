import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_BEST_SELLERS } from '../graphql/getBestSellers'
import { GET_NEW_ARRIVALS } from '../graphql/getNewArrivals'
import { Product } from '../graphql/types'

export default function useGetNewOrBestProductsEffect() {
  const [
    getNewArrivals,
    { loading: loadingNew, data: dataNew, error: errorNew },
  ] = useLazyQuery<{ getNewArrivals: Product[] }>(GET_NEW_ARRIVALS)
  const [newArrivals, setNewArrivals] = useState<Product[] | undefined>()
  const [getBestSellers, { loading: loadingBest, data: dataBest }] =
    useLazyQuery<{ getBestSellers: Product[] }>(GET_BEST_SELLERS)
  const [bestSellers, setBestSellers] = useState<Product[] | undefined>()

  useEffect(() => {
    getNewArrivals()
    getBestSellers()
    setNewArrivals(dataNew?.getNewArrivals)
    setBestSellers(dataBest?.getBestSellers)
  }, [
    getNewArrivals,
    setNewArrivals,
    dataNew,
    getBestSellers,
    setBestSellers,
    dataBest,
  ])

  return { loadingNew, loadingBest, newArrivals, bestSellers, errorNew }
}
