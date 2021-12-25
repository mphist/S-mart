import { css } from '@emotion/react'
import bagIcon from '../../assets/bag_icon.png'
import { useMenuDropdownState, useTimerState } from '../../atoms/menuDropdown'
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { useRecoilValue } from 'recoil'
import { bagState } from '../../atoms/bag'
import { searchState } from '../../atoms/search'

export type NavigationProps = {}

function Navigation({}: NavigationProps) {
  const [menuDropdownState, setMenuDropdownState] = useMenuDropdownState()
  const [timer, setTimer] = useTimerState()
  const [ignore, setIgnore] = useState<NodeJS.Timeout | null>(null)
  const searchBar = useRecoilValue(searchState)
  const bagState_ = useRecoilValue(bagState)
  const [quantityFromSession, setQuantityFromSession] = useState<
    string | number
  >('')
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
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (bag) {
      const bagObj = JSON.parse(bag)
      setQuantityFromSession(bagObj.totalQuantity)
    } else {
      setQuantityFromSession('')
    }
  }, [bagState_])

  const mouseLeave = () => {
    ignore && clearTimeout(ignore)
  }

  return (
    <nav css={navigation(menuDropdownState.id, searchBar.open)}>
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
        <li id='bagIcon'>
          <img
            src={bagIcon}
            onClick={() => (window.location.href = '/shopping_bag')}
            alt='bag_btn'
          />
          <span id='quantity'>
            {bagState_.totalQuantity > 0
              ? bagState_.totalQuantity
              : quantityFromSession || ''}
          </span>
        </li>
        {/* <li>
          <img src={menuIcon} alt='menu_btn' />
        </li> */}
      </ul>
    </nav>
  )
}

const navigation = (id: string | null, open: boolean) => css`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media screen and (max-width: 767px) {
    /* display: none; */
    .primary {
      display: none;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

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
    @media screen and (max-width: 992px) {
      padding: 0;
    }
    li {
      padding: 0 1.5rem;
      @media screen and (min-width: 600px) {
        font-size: 0.8rem;
      }
      @media screen and (min-width: 992px) {
        font-size: 1rem;
      }
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
    position: absolute;
    right: 12rem;
    @media screen and (max-width: 992px) {
      padding: 0;
    }
    @media screen and (max-width: 1253px) {
      right: 0;
    }
    ${!open
      ? css`
          margin-left: 16rem;
          @media screen and (max-width: 904px) {
            margin-left: 0rem;
          }
        `
      : css`
          margin-left: 9rem;
          @media screen and (max-width: 904px) {
            margin-left: 0rem;
          }
        `}
    #bagIcon {
      span {
        /* max-width: 2rem;
        background: #4e4eec;
        color: white;
        border-radius: 50%;
        position: relative;
        top: -0.5rem;
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
        left: -0.2rem; */
        background: #4e4eec;
        color: white;
        border-radius: 50%;
        display: inline-block;
        line-height: 1.6rem;
        width: 1.6rem;
        text-align: center;
        position: relative;
        left: -0.2rem;
        top: -0.4rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Navigation
