import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
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
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (bag) {
      const bagObj = JSON.parse(bag)
      setItems(bagObj.items)
    }
  }, [setItems])
  return (
    <div css={shoppingBag}>
      <div css={left}>
        <h1>YOUR BAG</h1>
        {Object.entries(items).map((item) => (
          <BagItem id={item[0]} item={item[1]} />
        ))}
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
