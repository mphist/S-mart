import { css } from '@emotion/react'
import menuIcon from '../../assets/menu_icon_white.png'

export type CategoriesProps = {}

function CategoryMenu({}: CategoriesProps) {
  return (
    <aside css={categoryMenu}>
      <ul>
        <li id='title'>
          <img src={menuIcon} alt='this is a menu icon for categories' />
          BROWSE CATEGORIES
        </li>
        <li>Women's Clothing</li>
        <li>Men's Clothing</li>
        <li>Jewelry & Watches</li>
        <li>Bags & Shoes</li>
        <li>Toys, Kids & Babies</li>
        <li>Computer & Office</li>
      </ul>
    </aside>
  )
}

const categoryMenu = css`
  border: 1px solid lightgray;
  width: 13rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: #5c5b5b;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      border-top: 1px solid lightgray;
      padding: 0.8rem;
      padding-left: 1.2rem;

      img {
        padding-right: 3px;
      }
    }
    #title {
      padding-left: 0.8rem;
      background: #6b7aa1;
      color: white;
      border: none;
    }
  }
`

export default CategoryMenu
