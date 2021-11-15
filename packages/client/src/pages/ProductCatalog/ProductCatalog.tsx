import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import SelectedFilter from '../../components/SelectedFilter/SelectedFilter'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  const locationStr = useLocation().pathname.replace('/', '')
  const [gender, setGender] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  const getQueryParams = (url: string) => {
    const location = url.split('-')
    if (location[location.length - 1] === 'arrivals') {
      setType(location[1])
      setCategory('New Arrivals')
    } else {
      setCategory(location[1].replace('&', ' & '))
    }
    setGender(location[0])
  }

  useEffect(() => {
    getQueryParams(locationStr)
  }, [])

  return (
    <div css={productCatalog}>
      <h2 id='catalogHeader'>
        <i>{`${gender} > ${type && `${type} >`} ${category}`}</i>
      </h2>
      <Filter />
      <SelectedFilter />
      <ProductList />
    </div>
  )
}

const productCatalog = css`
  #catalogHeader {
    text-transform: uppercase;
  }
`

export default ProductCatalog
