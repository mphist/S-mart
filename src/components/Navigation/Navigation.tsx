import { css } from '@emotion/react'
import searchIcon from '../../assets/search_icon.png'
import profileIcon from '../../assets/profile_icon.png'
import cartIcon from '../../assets/cart_icon.png'
import menuIcon from '../../assets/menu_icon.png'

export type NavigationProps = {}

function Navigation({}: NavigationProps) {
  return (
    <nav css={navigation}>
      <ul className='primary'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/shop'>Shop</a>
        </li>
        <li>
          <a href='/pages'>Pages</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
      <ul className='secondary'>
        <li>
          <img src={searchIcon} alt='search_btn' />
        </li>
        <li>
          <img src={profileIcon} alt='profile_btn' />
        </li>
        <li>
          <img src={cartIcon} alt='cart_btn' />
        </li>
        <li>
          <img src={menuIcon} alt='menu_btn' />
        </li>
      </ul>
    </nav>
  )
}

const navigation = css`
  display: flex;
  align-items: center;
  padding: 0 5rem;
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0 1.3rem;
      img {
        cursor: pointer;
        vertical-align: middle;
      }
    }
  }

  .primary {
    width: 30rem;
  }
  a {
    color: #5c5b5b;
    text-decoration: none;
    font-size: 1.05rem;
  }
`

export default Navigation
