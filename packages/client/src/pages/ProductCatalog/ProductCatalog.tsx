import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import SelectedFilter from '../../components/SelectedFilter/SelectedFilter'

export type ProductCatalogProps = {}

function ProductCatalog({}: ProductCatalogProps) {
  return (
    <div>
      <h2>
        <i>MEN &gt; CLOTHING &gt; NEW ARRIVALS</i>
      </h2>
      <Filter />
      <SelectedFilter />
      <ProductList />
    </div>
  )
}

export default ProductCatalog
