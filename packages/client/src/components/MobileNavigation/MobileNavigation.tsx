import { css } from '@emotion/react'
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useMobileNavigationState } from '../../atoms/mobileNavigation'
import MobileListItem from '../MobileListItem/MobileListItem'

export type MobileNavigationProps = {}

function MobileNavigation({}: MobileNavigationProps) {
  const [showCategoryNav, setShowCategoryNav] = useState(false)
  const [type, setType] = useState('')
  const [mobileNavigationState, setMobileNavigationState] =
    useMobileNavigationState()

  const renderClassName = (showCategoryNav: boolean) => {
    if (showCategoryNav) return 'categoryNav open'
    else return 'categoryNav'
  }

  const handleSelectType = (type: string) => {
    setShowCategoryNav(true)
    setType(type)
  }

  const handleSelectCategory = (category: string) => {
    // setShowCategoryNav(true)
    // setType(category)
  }

  return (
    <div css={mobileNavigation}>
      <div className='typeNav'>
        <header>
          <FontAwesomeIcon
            icon={faTimes}
            className='closeBtn'
            onClick={() =>
              setMobileNavigationState({
                ...mobileNavigationState,
                typeOpen: false,
              })
            }
          />
        </header>
        <ul>
          <MobileListItem type='Men' onClick={() => handleSelectType('Men')} />
          <MobileListItem
            type='Women'
            onClick={() => handleSelectType('Women')}
          />
          <MobileListItem
            type='Kids'
            onClick={() => handleSelectType('Kids')}
          />
        </ul>
      </div>
      <div className={renderClassName(showCategoryNav)}>
        <header>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='backBtn'
            onClick={() => setShowCategoryNav(false)}
          />
          <h2>{type}</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className='closeBtn'
            onClick={() =>
              setMobileNavigationState({
                typeOpen: false,
                categoryOpen: false,
              })
            }
          />
        </header>
        <ul className='categorySection'>
          <MobileListItem
            category='Clothing'
            onClick={() => handleSelectCategory('Clothing')}
          />
          <MobileListItem
            category='Shoes'
            onClick={() => handleSelectCategory('Clothing')}
          />
          <MobileListItem
            category='Accessories'
            onClick={() => handleSelectCategory('Clothing')}
          />
        </ul>
      </div>
    </div>
  )
}

const mobileNavigation = css`
  position: fixed;
  background: white;
  top: 0;
  width: 100vw;
  height: 100vh;

  .typeNav {
    margin-top: 2rem;
    header {
      text-align: right;
      .closeBtn {
        margin-right: 30px;
        font-size: 25px;
        cursor: pointer;
      }
    }
    ul {
      list-style: none;
      font-size: 17px;
      li {
        cursor: pointer;
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        .nextBtn {
          margin-right: 30px;
          margin-top: 7px;
          font-size: 14px;
        }
      }
    }
  }
  .categoryNav {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    transform: translateX(100%);
    transition: transform 0.2s ease-in;
    header {
      display: flex;
      align-items: center;
      h2 {
        margin-left: 20px;
        width: 78%;
      }
      .backBtn {
        cursor: pointer;
        font-size: 25px;
        margin-left: 20px;
      }
      .closeBtn {
        cursor: pointer;
        font-size: 25px;
      }
    }
    .categorySection {
      list-style: none;

      list-style: none;
      font-size: 17px;
      li {
        cursor: pointer;
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        .nextBtn {
          margin-right: 30px;
          margin-top: 7px;
          font-size: 14px;
        }
      }
    }
  }
  .categoryNav.open {
    transform: translateX(1%);
  }
`

export default MobileNavigation
