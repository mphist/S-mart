import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import hoodieNew from '../../assets/products/newHoodie.jpg'
import { Product as ProductType } from '../../graphql/types'

export type ProductProps = {
  item?: ProductType
}

function Product({ item }: ProductProps) {
  const linkName = item?.name.replaceAll(' ', '-').toLowerCase()
  return (
    <li css={itemList}>
      <Link to={`/product/${linkName}-${item?.id}`}>
        <img src={Object.values(item!.image)[0][0]} alt={`product}`} />
        <div css={description}>
          <span>{`$${item?.price}`}</span>
          <p>{item?.name}</p>
        </div>
      </Link>
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
