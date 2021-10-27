import { css } from '@emotion/react'
import React from 'react'
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
        <Browse />
        <ProductList category='NEW ARRIVALS' />
      </div>
    </>
  )
}

const body = css`
  width: 90rem;
  margin: 0 auto;
`

export default Body
