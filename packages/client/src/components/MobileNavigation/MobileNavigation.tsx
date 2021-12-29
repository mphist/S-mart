import { css } from '@emotion/react'
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMobileNavigationState } from '../../atoms/mobileNavigation'
import MobileListItem from '../MobileListItem/MobileListItem'

export type MobileNavigationProps = {}

function MobileNavigation({}: MobileNavigationProps) {
  const [showCategoryNav, setShowCategoryNav] = useState(false)
  const [showSubCategoryNav, setShowSubCategoryNav] = useState(false)
  const [showMenuNav, setShowMenuNav] = useState(false)
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [subCategoryArr, setSubCategoryArr] = useState<string[]>([])
  const [mobileNavigationState, setMobileNavigationState] =
    useMobileNavigationState()

  const renderClassNameCategory = (show: boolean) => {
    if (show) return 'categoryNav open'
    else return 'categoryNav'
  }

  const renderClassNameSubCategory = (show: boolean) => {
    if (show) return 'subCategoryNav open'
    else return 'subCategoryNav'
  }

  const handleSelectType = (type: string) => {
    setShowCategoryNav(true)
    setType(type)
  }

  const handleSelectCategory = (category: string) => {
    setShowSubCategoryNav(true)
    setCategory(category)
  }

  useEffect(() => {
    switch (category) {
      case 'Clothing':
        setSubCategoryArr([
          'New Arrivals',
          'Hoodies & Sweaters',
          'Shirts',
          'Pants',
          'Jackets',
        ])
        return
      case 'Shoes':
        setSubCategoryArr([
          'New Arrivals',
          'Sneakers',
          'Running_Shoes',
          'Tennis_Shoes',
          'Basketball_Shoes',
          'Boots',
        ])
        return
      case 'Accessories':
        setSubCategoryArr(['New Arrivals', 'Hats', 'Belts', 'Socks', 'Gloves'])
        return
    }
  }, [category])

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
      <div className={renderClassNameCategory(showCategoryNav)}>
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
            onClick={() => handleSelectCategory('Shoes')}
          />
          <MobileListItem
            category='Accessories'
            onClick={() => handleSelectCategory('Accessories')}
          />
        </ul>
      </div>
      <div className={renderClassNameSubCategory(showSubCategoryNav)}>
        <header>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='backBtn'
            onClick={() => setShowSubCategoryNav(false)}
          />
          <h2>{`${type} > ${category}`}</h2>
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
        <ul className='subCategorySection'>
          {subCategoryArr.map((subCategory: string, key: number) => (
            <MobileListItem
              key={key}
              type={type}
              category={category}
              subCategory={subCategory}
            />
          ))}
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
  z-index: 10;

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
  .categoryNav,
  .subCategoryNav {
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
    .categorySection,
    .subCategorySection {
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
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  .categoryNav.open,
  .subCategoryNav.open {
    transform: translateX(1%);
  }
`

export default MobileNavigation
