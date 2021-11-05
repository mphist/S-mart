import { css } from '@emotion/react'
import newHoodie from '../../assets/products/newHoodie.jpg'

export type ProductImagesProps = {}

function ProductImages({}: ProductImagesProps) {
  return (
    <div css={productImages}>
      <div css={left}>
        <div id='image'>
          <img src={newHoodie} alt='view-1'></img>
        </div>
        <div id='image'>
          <img src={newHoodie} alt='view-1'></img>
        </div>
        <div id='image'>
          <img src={newHoodie} alt='view-1'></img>
        </div>
        <div id='image'>
          <img src={newHoodie} alt='view-1'></img>
        </div>
      </div>
      <div css={right}>
        <img src={newHoodie} alt='view-1'></img>
      </div>
    </div>
  )
}

const productImages = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`
const left = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #image {
    width: 8rem;
    padding: 0.2rem;
    img {
      background: lightgray;
      width: 100%;
    }
  }
`
const right = css`
  width: 100%;
  img {
    width: 100%;
    padding: 0.4rem;
  }
`

export default ProductImages
