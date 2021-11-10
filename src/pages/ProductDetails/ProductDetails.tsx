import { css } from '@emotion/react'
import AddToBagConfirmation from '../../components/AddToBagConfirmation/AddToBagConfirmation'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductImages from '../../components/ProductImages/ProductImages'

export type ProductDetailsProps = {
  name: string
  overlay: boolean
}

function ProductDetails({ name, overlay }: ProductDetailsProps) {
  return (
    <section css={productDetails}>
      <div css={productDetailsWrapper}>
        <ProductImages />
        <ProductDescription name={name} />
      </div>
      {overlay && <AddToBagConfirmation />}
    </section>
  )
}

const productDetails = css``
const productDetailsWrapper = css`
  display: flex;
  /* justify-content: center;
  align-items: center; */
`

export default ProductDetails
