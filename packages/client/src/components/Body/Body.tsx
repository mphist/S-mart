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
import PurchaseSuccessful from '../../pages/PurchaseSuccessful/PurchaseSuccessful'
import ShoppingBag from '../../pages/ShoppingBag/ShoppingBag'

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
        <Route path='/product'>
          <ProductDetails />
        </Route>
        <Route
          path={[
            '/men-clothing-new-arrivals',
            '/men-hoodies&sweaters',
            '/men-jackets',
            '/men-shirts',
            '/men-pants',
            '/men-shoes-new-arrivals',
            '/men-sneakers',
            '/men-running_shoes',
            '/men-tennis_shoes',
            '/men-basketball_shoes',
            '/men-boots',
            '/women-clothing-new-arrivals',
            '/women-hoodies&sweaters',
            '/women-jackets',
            '/women-shirts',
            '/women-pants',
            '/women-shoes-new-arrivals',
            '/women-sneakers',
            '/women-running_shoes',
            '/women-tennis_shoes',
            '/women-basketball_shoes',
            '/women-boots',
          ]}
        >
          <ProductCatalog />
        </Route>
        <Route path='/thank-you-for-your-purchase'>
          <PurchaseSuccessful />
        </Route>
        <Route path='/shopping_bag'>
          <ShoppingBag />
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
