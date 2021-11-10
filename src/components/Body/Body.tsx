import React from 'react'
import { css } from '@emotion/react'
import { Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import { menuDropdownState } from '../../atoms/menuDropdown'
import Browse from '../Browse/Browse'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import ProductList from '../ProductList/ProductList'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import ProductCatalog from '../../pages/ProductCatalog/ProductCatalog'
import { overlayState } from '../../atoms/uiState'
import Overlay from '../Overlay/Overlay'

export type BodyProps = {}

function Body({}: BodyProps) {
  const { show, id } = useRecoilValue(menuDropdownState)
  const overlay = useRecoilValue(overlayState)
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
          <ProductDetails
            name='Marimekko Oversize Hoodie with 3D Nylon Trefoil Patch'
            overlay={overlay}
          />
        </Route>
        <Route path={['/men-clothing-new-arrivals']}>
          <ProductCatalog />
        </Route>
        {overlay && <Overlay />}
      </div>
    </>
  )
}

const body = css`
  width: 90rem;
  margin: 0 auto;
`

export default Body
