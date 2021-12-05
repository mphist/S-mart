import { css } from '@mui/styled-engine'
import { useRecoilValue } from 'recoil'
import { filterState } from '../../atoms/filters'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import SelectedFilter from '../../components/SelectedFilter/SelectedFilter'
import useProductsQueryEffect from '../../hooks/useProductsQueryEffect'
import useTypeFilterEffect from '../../hooks/useTypeFilterEffect'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  const { loading, products, gender, type, category, catalogType } =
    useProductsQueryEffect()
  const { products: filteredProducts } = useTypeFilterEffect(gender)
  const { type: filterType } = useRecoilValue(filterState)
  if (loading) return null

  const displayNumberofItems = () => {
    if (filteredProducts) {
      if (filteredProducts.length > 0)
        return (
          filteredProducts.length +
          (filteredProducts.length > 1 ? ' items' : 'item')
        )
    } else if (products) {
      if (products.length > 0)
        return products.length + (products.length > 1 ? ' items' : 'item')
    }
    return ''
  }

  return (
    <div css={productCatalog}>
      <h2 id='catalogHeader'>
        <i>
          {`${gender} > ${catalogType} > ${type && `${type} >`} ${
            filterType.length > 0
              ? filterType
                  .map((type) => type)
                  .toString()
                  .replaceAll(',', ' + ')
              : category.replace('&', ' & ').replace('_', ' ')
          }`}
        </i>
        <p>{`${displayNumberofItems()}`}</p>
      </h2>
      <Filter catalogType={catalogType} gender={gender} />
      <SelectedFilter />
      <ProductList products={filteredProducts || products} />
    </div>
  )
}

const productCatalog = css`
  margin-top: 5rem;
  #catalogHeader {
    text-transform: uppercase;
    p {
      font-size: 0.8rem;
      text-transform: none;
      height: 1rem;
    }
  }
`

export default ProductCatalog
