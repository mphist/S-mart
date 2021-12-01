import { css } from '@mui/styled-engine'
import { useRecoilValue } from 'recoil'
import { filterState } from '../../atoms/filters'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import SelectedFilter from '../../components/SelectedFilter/SelectedFilter'
import useProductsQueryEffect from '../../hooks/useProductsQueryEffect'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  const { loading, products, gender, type, category } = useProductsQueryEffect()
  const { type: filterType } = useRecoilValue(filterState)
  if (loading) return null

  console.log(filterType)

  return (
    <div css={productCatalog}>
      <h2 id='catalogHeader'>
        <i>{`${gender} > ${type && `${type} >`} ${
          filterType.length > 0
            ? filterType
                .map((type) => type)
                .toString()
                .replaceAll(',', ' + ')
            : category.replace('&', ' & ').replace('_', ' ')
        }`}</i>
      </h2>
      <Filter catalogType={type} />
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
