import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  return (
    <div>
      <h2>
        <i>MEN &gt; CLOTHING &gt; NEW ARRIVALS</i>
      </h2>
      <Filter />
      <ProductList />
    </div>
  )
}

export default ProductCatalog
