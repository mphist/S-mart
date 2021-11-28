import React from 'react'
import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
import { useBagState } from '../../atoms/bag'
import BagItem from '../../components/BagItem/BagItem'
import {
  ItemType,
  ShoppingBag as ShoppingBagClass,
} from '../../utils/shoppingBag'
import callCheckoutApi from '../../utils/callCheckoutApi'

export type ShoppingBagProps = {}

function ShoppingBag({}: ShoppingBagProps) {
  const [bagState, setBagState] = useBagState()
  const [shoppingBagState, setShoppingBagState] = useState<
    ShoppingBagClass | {}
  >({})
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (bag) {
      const bagObj = JSON.parse(bag)
      const shoppingBag = new ShoppingBagClass(
        bagObj.totalQuantity,
        bagObj.totalPrice,
        bagObj.items
      )
      setShoppingBagState(shoppingBag)
      setBagState({
        ...bagState,
        totalQuantity: bagObj.totalQuantity,
        totalPrice: bagObj.totalPrice,
        items: bagObj.items,
      })
    }
  }, [])

  const renderItems = (items: { [key: string]: ItemType[] } | null) => {
    if (items) {
      if (Object.keys(items).length > 0) {
        return Object.entries(items).map((itemArr, key) => {
          return key === 0 ? (
            <>
              <h1>YOUR BAG</h1>
              {itemArr[1].map((item) => (
                <BagItem id={itemArr[0]} item={item} />
              ))}
            </>
          ) : (
            itemArr[1].map((item) => <BagItem id={itemArr[0]} item={item} />)
          )
          // <BagItem id={itemArr[0]} item={item[1]} />
        })
      }
    }
    return <h1>Your bag is empty</h1>
  }

  const normalizeNumber = (num: number) => {
    const str = num.toString()
    const dotLocation = str.indexOf('.')
    if (dotLocation > 0) {
      if (!str[dotLocation + 2]) {
        return str + '0'
      } else return str
    }
    return str + '.00'
  }

  return (
    <div css={shoppingBag}>
      <div css={left}>{renderItems(bagState.items)}</div>
      {bagState.items && Object.keys(bagState.items).length > 0 && (
        <div css={right}>
          <div id='orderSummary'>
            <h2>ORDER SUMMARY</h2>
            <div id='row'>
              <p id='items'>{`${bagState.totalQuantity} ITEMS`}</p>
              <p id='price'>{`$ ${normalizeNumber(
                Math.round(bagState.totalPrice * 100) / 100
              )}`}</p>
            </div>
            <div id='row'>
              <p id='delivery'>DELIVERY</p>
              <p id='price'>FREE</p>
            </div>
            <div id='row'>
              <p id='tax'>Sales Tax</p>
              <p id='price'>{`$ ${normalizeNumber(
                Math.round(bagState.totalPrice * 100 * 0.13) / 100
              )}`}</p>
            </div>
            <div id='row'>
              <p id='total'>
                <strong>TOTAL</strong>
              </p>
              <p id='price'>
                <strong>{`$ ${normalizeNumber(
                  Math.round(bagState.totalPrice * 100 * 1.13) / 100
                )}`}</strong>
              </p>
            </div>
          </div>
          <div id='buttons'>
            <button onClick={() => callCheckoutApi(shoppingBagState)}>
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const left = css``

const right = css`
  font-size: 0.9rem;
  width: 50%;
  #orderSummary {
    margin: 0 auto;
    width: 23rem;
    #row {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0.5rem 0;
      }
    }
  }
  #buttons {
    margin-left: 11rem;
    margin-top: 2rem;

    button {
      width: 23rem;
      cursor: pointer;
      text-align: center;
      font-size: 0.9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      padding: 0.7rem;
      border: none;
      background: black;
      color: white;
      transition: color 0.3s;
      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`

const shoppingBag = css`
  h1 {
    margin: 0;
  }
  display: flex;
`

export default ShoppingBag
