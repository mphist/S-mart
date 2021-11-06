import { css } from '@emotion/react'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductImages from '../../components/ProductImages/ProductImages'

export type ProductDetailsProps = {
  name: string
}

function ProductDetails({ name }: ProductDetailsProps) {
  return (
    <section css={productDetails}>
      <div css={productDetailsWrapper}>
        <ProductImages />
        <ProductDescription name={name} />
      </div>
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
