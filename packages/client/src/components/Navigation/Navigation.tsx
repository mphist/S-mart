import { css } from '@emotion/react'
import searchIcon from '../../assets/search_icon.png'
import profileIcon from '../../assets/profile_icon.png'
import bagIcon from '../../assets/bag_icon.png'
import menuIcon from '../../assets/menu_icon.png'
import { useMenuDropdownState, useTimerState } from '../../atoms/menuDropdown'
import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

export type NavigationProps = {}

function Navigation({}: NavigationProps) {
  const [menuDropdownState, setMenuDropdownState] = useMenuDropdownState()
  const [timer, setTimer] = useTimerState()
  const [ignore, setIgnore] = useState<NodeJS.Timeout | null>(null)
  const [openSearch, setOpenSearch] = useState(false)
  const openMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const id = e.currentTarget.id
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }

    // mouse pointer passing by the navigation bar
    setIgnore(
      setTimeout(
        () =>
          setMenuDropdownState({
            show: true,
            id,
          }),
        100
      )
    )
  }

  const mouseLeave = () => {
    ignore && clearTimeout(ignore)
  }

  return (
    <nav css={navigation(menuDropdownState.id)}>
      <ul className='primary'>
        <li>
          <span id='men' onMouseOver={openMenu} onMouseLeave={mouseLeave}>
            Men
          </span>
        </li>
        <li>
          <span id='women' onMouseOver={openMenu} onMouseLeave={mouseLeave}>
            Women
          </span>
        </li>
        <li>
          <span id='kids' onMouseOver={openMenu} onMouseLeave={mouseLeave}>
            Kids
          </span>
        </li>
        {/* <li>
          <span id='jewelry' onMouseOver={openMenu} onMouseLeave={mouseLeave}>
            Jewelry & Watches
          </span>
        </li> */}
      </ul>
      <ul className='secondary'>
        <li>
          <SearchBar />
        </li>
        {/* <li>
          <img src={profileIcon} alt='profile_btn' />
        </li> */}
        <li>
          <img
            src={bagIcon}
            onClick={() => (window.location.href = '/shopping_bag')}
            alt='bag_btn'
          />
        </li>
        {/* <li>
          <img src={menuIcon} alt='menu_btn' />
        </li> */}
      </ul>
    </nav>
  )
}

const navigation = (id: string | null) => css`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
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
    width: 17rem;
    li {
      padding: 1.5rem;
      span {
        cursor: pointer;
      }
      ${id &&
      css`
        #${id} {
          color: black;
        }
      `}
    }
  }
  .secondary {
    margin-left: 16rem;
  }
`

export default Navigation
