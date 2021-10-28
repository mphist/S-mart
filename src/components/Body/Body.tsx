import React from 'react'
import { css } from '@emotion/react'
import { Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import { menuDropdownState } from '../../atoms/menuDropdown'
import Browse from '../Browse/Browse'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import ProductList from '../ProductList/ProductList'

export type BodyProps = {}

function Body({}: BodyProps) {
  const { show, id } = useRecoilValue(menuDropdownState)
  return (
    <>
      {show ? <MenuDropdown id={id} /> : null}
      <div css={body}>
        <Route path='/' exact>
          <Browse />
          <ProductList category='NEW ARRIVALS' />
          <ProductList category='BEST SELLERS' />
        </Route>
        <Route path='/test-product'>
          <div>Test product</div>
        </Route>
      </div>
    </>
  )
}

const body = css`
  width: 90rem;
  margin: 0 auto;
`

export default Body
