import React from 'react'
import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
import { useBagState } from '../../atoms/bag'
import BagItem from '../../components/BagItem/BagItem'

export type ShoppingBagProps = {}

function ShoppingBag({}: ShoppingBagProps) {
  const [items, setItems] = useState<{
    [key: string]: {
      image: string
      name: string
      price: number
      quantity: number
      color: string
      size: string
    }
  }>({})
  const [bagState, setBagState] = useBagState()
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (bag) {
      const bagObj = JSON.parse(bag)
      setBagState({
        ...bagState,
        totalQuantity: bagObj.totalQuantity,
        totalPrice: bagObj.totalPrice,
        items: bagObj.items,
      })
    }
  }, [])

  const renderItems = (
    items: {
      [key: string]: {
        image: string
        name: string
        price: number
        quantity: number
        color: string
        size: string
      }
    } | null
  ) => {
    if (items) {
      if (Object.keys(items).length > 0) {
        return Object.entries(items).map((item, key) => {
          console.log(key, item)
          return key === 0 ? (
            <>
              <h1>YOUR BAG</h1>
              <BagItem id={item[0]} item={item[1]} />
            </>
          ) : (
            <BagItem id={item[0]} item={item[1]} />
          )
        })
      }
    }
    return <h1>Your bag is empty</h1>
  }

  console.log(bagState.items)
  return (
    <div css={shoppingBag}>
      <div css={left}>
        {/* <h1>YOUR BAG</h1> */}
        {/* {bagState.items &&
          Object.entries(bagState.items).map((item) => (
            <BagItem id={item[0]} item={item[1]} />
          ))} */}
        {renderItems(bagState.items)}
      </div>
      <div css={right}></div>
    </div>
  )
}

const left = css``

const right = css``

const shoppingBag = css`
  h1 {
    margin: 0;
  }
  display: flex;
`

export default ShoppingBag
