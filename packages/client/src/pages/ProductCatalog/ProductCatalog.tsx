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
  const { products: filteredProducts, loading: loadingFilter } =
    useTypeFilterEffect(gender)
  const { type: filterType } = useRecoilValue(filterState)

  const determineProducts = () => {
    if (category === 'New Arrivals') {
      if (filteredProducts && filteredProducts.length > 0 && products) {
        const tempProducts = []
        tempProducts.push(...filteredProducts, ...products)
        return {
          products: tempProducts,
          number: tempProducts.length + ' items',
        }
      } else if (!loadingFilter && products) {
        return { products, number: products.length + ' items' }
      }
      return { number: '' }
    } else {
      if (filteredProducts && filteredProducts.length > 0) {
        return {
          products: filteredProducts,
          number: filteredProducts.length + ' items',
        }
      } else if (!loadingFilter && products) {
        return { products, number: products.length + ' items' }
      }
    }
    return { number: '' }
  }

  if (loading) return null

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
        <p>{`${determineProducts()?.number}`}</p>
      </h2>
      <Filter catalogType={catalogType} gender={gender} />
      <SelectedFilter />
      <ProductList products={determineProducts()?.products} />
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
