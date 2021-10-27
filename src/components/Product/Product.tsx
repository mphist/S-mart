import { css } from '@emotion/react'
import hoodieNew from '../../assets/products/newHoodie.jpg'
export type ProductProps = {}

function Product({}: ProductProps) {
  return (
    <li css={item}>
      <a href={`/test-product`}>
        <img src={hoodieNew} alt='new hoodie' />
        <div css={description}>
          <span>$60</span>
          <p>Oversize Hoodie with 3D Nylon Trefoil Patch</p>
        </div>
      </a>
    </li>
  )
}

const item = css`
  a {
    /* display: flex;
    flex-direction: column; */
    text-decoration: none;
    color: black;
    height: 100%;
    width: 100%;
    display: block;
    img {
      width: 100%;
    }
  }
`

const description = css`
  font-size: 0.8rem;
  padding: 0.4rem;
  span {
    font-weight: bold;
  }
`

export default Product
