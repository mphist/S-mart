import { css } from '@emotion/react'
import searchIcon from '../../assets/search_icon.png'
import profileIcon from '../../assets/profile_icon.png'
import cartIcon from '../../assets/cart_icon.png'
import menuIcon from '../../assets/menu_icon.png'
import { useMenuDropdownState } from '../../atoms/menuDropdown'

export type NavigationProps = {}

function Navigation({}: NavigationProps) {
  const [, setMenuDropdownState] = useMenuDropdownState()

  const openMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
    setMenuDropdownState({
      show: true,
      id: e.currentTarget.id,
    })

  return (
    <nav css={navigation}>
      <ul className='primary'>
        <li>
          <span id='men' onMouseOver={openMenu}>
            Men
          </span>
        </li>
        <li>
          <span id='women' onMouseOver={openMenu}>
            Women
          </span>
        </li>
        <li>
          <span id='shoes' onMouseOver={openMenu}>
            Shoes
          </span>
        </li>
        <li>
          <span id='bags' onMouseOver={openMenu}>
            Bags
          </span>
        </li>
        <li>
          <span id='kids' onMouseOver={openMenu}>
            Kids
          </span>
        </li>
        <li>
          <span id='jewelry' onMouseOver={openMenu}>
            Jewelry & Watches
          </span>
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

  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0 0.8rem;
      color: #5c5b5b;
      text-decoration: none;
      font-size: 1rem;
      img {
        cursor: pointer;
        vertical-align: middle;
      }
    }
  }

  .primary {
    width: 35rem;
    li {
      span {
        cursor: pointer;
      }
    }
  }
`

export default Navigation
