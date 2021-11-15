import { css } from '@mui/styled-engine'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import SelectedFilter from '../../components/SelectedFilter/SelectedFilter'
import useProductsQueryEffect from '../../hooks/useProductsQueryEffect'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  const { loading, products, gender, type, category } = useProductsQueryEffect()
  if (loading) return null

  return (
    <div css={productCatalog}>
      <h2 id='catalogHeader'>
        <i>{`${gender} > ${type && `${type} >`} ${category.replace(
          '&',
          ' & '
        )}`}</i>
      </h2>
      <Filter />
      <SelectedFilter />
      <ProductList products={products} />
    </div>
  )
}

const productCatalog = css`
  #catalogHeader {
    text-transform: uppercase;
  }
`

export default ProductCatalog
