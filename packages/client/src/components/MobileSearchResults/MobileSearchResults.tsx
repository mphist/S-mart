import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useSearchEffect from '../../hooks/useSearchEffect'

export type MobileSearchResultsProps = {}

function MobileSearchResults({}: MobileSearchResultsProps) {
  const { searchState, setSearchState, products } = useSearchEffect()
  if (!searchState.mobileOpen) return null
  if (!products || products.length < 1) return null
  const styleName = (productName: string, keyword: string) => {
    const regex = new RegExp(keyword, 'i')
    const nameArr = productName.split(' ')
    const result: Array<
      | string
      | React.DetailedReactHTMLElement<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >
    > = []
    let el = React.createElement('strong', null, keyword)
    nameArr.forEach((word) => {
      if (word.match(regex)) {
        result.push(' ')
        result.push(el)
      } else {
        result.push(' ' + word)
      }
    })
    return result
  }
  return (
    <div css={mobileSearchResults}>
      <div css={mobileResultStyle}>
        {products?.map((product) => (
          <Link
            to={`/product/${product.name.replaceAll(' ', '-').toLowerCase()}-${
              product.id
            }`}
            onClick={() =>
              setSearchState({ ...searchState, mobileOpen: false })
            }
          >
            {styleName(product.name, searchState.name)}
          </Link>
        ))}
      </div>
    </div>
  )
}

const mobileResultStyle = css`
  a {
    font-size: 15px;
    display: block;
    color: black;
    text-decoration: none;
    margin: 0;
    margin-left: 30px;
    margin-top: 10px;
    :nth-child(1) {
      margin-top: 0;
    }
    text-align: left;
  }
`

const mobileSearchResults = css`
  overflow-y: scroll;
  position: relative;
  top: 50px;
  width: 100vw;
  height: 94vh;
`

export default MobileSearchResults
