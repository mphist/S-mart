import { css } from '@emotion/react'
import hoodieNew from '../../assets/products/newHoodie.jpg'
import { Product as ProductType } from '../../graphql/types'

export type ProductProps = { item?: ProductType; key: string | number }

function Product({ item, key }: ProductProps) {
  return (
    <li css={itemList}>
      <a href={`/test-product`}>
        <img src={Object.values(item!.image)[0][0]} alt={`product-${key}`} />
        <div css={description}>
          <span>{`$${item?.price}`}</span>
          <p>{item?.name}</p>
        </div>
      </a>
    </li>
  )
}

const itemList = css`
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
