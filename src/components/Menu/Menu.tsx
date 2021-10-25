import { css } from '@emotion/react'

export type MenuProps = {
  category?: string
}

function Menu({ category }: MenuProps) {
  switch (category) {
    case 'CLOTHING': {
      return (
        <div css={menu}>
          <h3>CLOTHING</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Hoodies & Sweaters</li>
            <li>Shirts</li>
            <li>Pants</li>
            <li>Jackets</li>
          </ul>
        </div>
      )
    }
    case 'SHOES': {
      return (
        <div css={menu}>
          <h3>SHOES</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Sneakers</li>
            <li>Running Shoes</li>
            <li>Tennis Shoes</li>
            <li>Basketball Shoes</li>
            <li>Boots</li>
          </ul>
        </div>
      )
    }
    case 'ACCESSORIES': {
      return (
        <div css={menu}>
          <h3>ACCESSORIES</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Hats</li>
            <li>Belts</li>
            <li>Socks</li>
            <li>Gloves</li>
          </ul>
        </div>
      )
    }
    default:
      return null
  }
}

const menu = css`
  h3 {
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 2px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      padding-top: 0.4rem;
    }
  }
  padding: 0 3rem;
  padding-top: 1rem;
  font-size: 14px;
  letter-spacing: 0.5px;
`

export default Menu
