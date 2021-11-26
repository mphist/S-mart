import { css } from '@emotion/react'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductImages from '../../components/ProductImages/ProductImages'
import { useGetProductEffect } from '../../hooks/useGetProductEffect'

export type ProductDetailsProps = {}

function ProductDetails({}: ProductDetailsProps) {
  const product = useGetProductEffect()

  if (!product) return null
  return (
    <section css={productDetails}>
      <div css={productDetailsWrapper}>
        <ProductImages image={product.image} />
        <ProductDescription product={product} />
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
