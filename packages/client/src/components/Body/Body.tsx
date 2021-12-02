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
            '/clothing/men-new-arrivals',
            '/clothing/men-hoodies&sweaters',
            '/clothing/men-jackets',
            '/clothing/men-shirts',
            '/clothing/men-pants',
            '/shoes/men-new-arrivals',
            '/shoes/men-sneakers',
            '/shoes/men-running_shoes',
            '/shoes/men-tennis_shoes',
            '/shoes/men-basketball_shoes',
            '/shoes/men-boots',
            '/clothing/women-new-arrivals',
            '/clothing/women-hoodies&sweaters',
            '/clothing/women-jackets',
            '/clothing/women-shirts',
            '/clothing/women-pants',
            '/shoes/women-new-arrivals',
            '/shoes/women-sneakers',
            '/shoes/women-running_shoes',
            '/shoes/women-tennis_shoes',
            '/shoes/women-basketball_shoes',
            '/shoes/women-boots',
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
