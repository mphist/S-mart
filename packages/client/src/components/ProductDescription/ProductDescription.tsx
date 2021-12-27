import { css } from '@emotion/react'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useEffect, useState } from 'react'
import { useOverlayState } from '../../atoms/uiState'
import AddToBagConfirmation from '../AddToBagConfirmation/AddToBagConfirmation'
import { Product } from '../../graphql/types'
import { useProductState } from '../../atoms/product'
import { Item, ShoppingBag } from '../../utils/shoppingBag'
import { useBagState } from '../../atoms/bag'
import { useLocation } from 'react-router'

export type ProductDescriptionProps = {
  product: Product
}

export const isColorValid = () => {}
export const isSizeValid = (size: string) => {
  return size !== ''
}

function ProductDescription({ product }: ProductDescriptionProps) {
  const selectSize = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const liNodes = document?.querySelector('#sizeWrapper')?.childNodes
    liNodes?.forEach((e) => (e as Element).removeAttribute('class'))
    e.currentTarget.className = 'selected'
    setSize(e.currentTarget.innerText)
  }

  const selectColor = (
    color: string,
    e?: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const liNodes = document?.querySelector('#colorWrapper')?.childNodes
    liNodes?.forEach((e) => (e as Element).removeAttribute('class'))
    if (e) {
      e.currentTarget.className = 'selected'
    } else {
      const el = document.querySelector(`#${parseId(color)}`)
      el!.className = 'selected'
    }
    setProductState({ ...productState, color })
  }

  const [size, setSize] = useState('')
  const [productState, setProductState] = useProductState()
  const [overlayState, setOverlayState] = useOverlayState()
  const [quantity, setQuantity] = useState(1)
  const [errorColor, setErrorColor] = useState()
  const [errorSize, setErrorSize] = useState(false)
  const [bagState, setBagState] = useBagState()
  const location = useLocation<{ prevPath: string; color: string }>()

  const colorKeys = Object.keys(product?.color)

  const parseId = (str: string) => {
    return str
      .replaceAll('/', '-')
      .replaceAll(' ', '-')
      .replace(/[0-9()]/g, '')
      .replace('-', '')
  }
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (location.state) {
      if (bag) {
        // const bagObj = JSON.parse(bag)
        // const itemArr = bagObj.items[product.id]
        // console.log(itemArr)
        // if (itemArr.length > 0) {
        //   selectColor(itemArr.color)
        //   setProductState({ ...productState, color: itemArr.color })
        // }
        if (location.state.color) {
          selectColor(location.state.color)
          setProductState({ ...productState, color: location.state.color })
        } else {
          setProductState({ ...productState, color: colorKeys[0] })
        }
      }
    } else {
      setProductState({
        ...productState,
        color: colorKeys[0],
      })
    }
  }, [product])

  const handleAddToBag = () => {
    if (isSizeValid(size)) {
      errorSize && setErrorSize(false)
      setOverlayState(true) // comment out when uncommenting below
      // if (isColorValid(color)) {
      //   errorColor && setErrorColor(false)
      // } else {
      //   setErrorColor(true)
      // }

      const newItem = new Item(
        quantity,
        product.price,
        product.name,
        productState.color,
        size,
        product.image[productState.color][0],
        product.id.toString()
      )

      let oldBag = sessionStorage.getItem('bag')
      let newBag
      if (!oldBag) newBag = new ShoppingBag()
      else {
        const bagObj = JSON.parse(oldBag)
        newBag = new ShoppingBag(
          bagObj.totalQuantity,
          bagObj.totalPrice,
          bagObj.items
        )
      }
      newBag.addQuantity(quantity)
      newBag.newTotal(quantity, product.price)
      newBag.addItem(newItem)
      setBagState({
        // totalPrice: newBag.getTotalPrice(),
        // totalQuantity: newBag.getTotalQuantity(),
        // items:
        ...newBag,
      })
      const strNewBag = JSON.stringify(newBag)
      sessionStorage.setItem('bag', strNewBag)
    } else {
      setErrorSize(true)
    }
  }

  const renderSize = (type: string) => {
    switch (type) {
      case 'clothing': {
        return (
          <ul id='sizeWrapper'>
            <li id='xs' onClick={selectSize}>
              XS
            </li>
            <li id='s' onClick={selectSize}>
              S
            </li>
            <li id='m' onClick={selectSize}>
              M
            </li>
            <li id='l' onClick={selectSize}>
              L
            </li>
            <li id='xl' onClick={selectSize}>
              XL
            </li>
            <li id='xxl' onClick={selectSize}>
              XXL
            </li>
          </ul>
        )
      }
      case 'shoes': {
        return (
          <ul id='sizeWrapper'>
            <li id='seven' onClick={selectSize}>
              7
            </li>
            <li id='seven-half' onClick={selectSize}>
              7.5
            </li>
            <li id='eight' onClick={selectSize}>
              8
            </li>
            <li id='eight-half' onClick={selectSize}>
              8.5
            </li>
            <li id='nine' onClick={selectSize}>
              9
            </li>
            <li id='nine-half' onClick={selectSize}>
              9.5
            </li>
            <li id='ten' onClick={selectSize}>
              10
            </li>
            <li id='ten-half' onClick={selectSize}>
              10.5
            </li>
            <li id='eleven' onClick={selectSize}>
              11
            </li>
            <li id='eleven-half' onClick={selectSize}>
              11.5
            </li>
            <li id='twelve' onClick={selectSize}>
              12
            </li>
            <li id='twelve-half' onClick={selectSize}>
              12.5
            </li>
            <li id='thirteen' onClick={selectSize}>
              13
            </li>
          </ul>
        )
      }
    }
  }
  return (
    <div>
      <div css={productDescription}>
        <h2>{product?.name}</h2>
        <div id='ratings'>
          <Rating name='readonly' value={4} readOnly size='small' />
          <span id='rating_value'>4</span>
        </div>
        <div id='description'>{product?.description}</div>
        <div id='price'>
          <p>{`$${product?.price}`}</p>
        </div>
        <div id='color'>
          <p>{`Color: ${productState.color}`}</p>
          <ul id='colorWrapper'>
            {colorKeys.map((color, key) => {
              return (
                <li
                  key={key}
                  id={parseId(color)}
                  className={key === 0 ? 'selected' : ''}
                  onClick={(e) => selectColor(color, e)}
                >
                  <img src={product.color[color]} alt='product color' />
                </li>
              )
            })}
          </ul>
        </div>

        <div id='size'>{renderSize(product.type)}</div>
        <div id='error'>{errorSize && <p>Please select your size</p>}</div>
        <div id='quant_btns'>
          <div id='quantity'>
            <Select
              id='quantitySelector'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value as number)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            <div id='buttons'>
              <button onClick={handleAddToBag}>ADD TO BAG</button>
            </div>
          </div>
        </div>
      </div>
      {overlayState && (
        <AddToBagConfirmation
          productInfo={{
            image: product.image[productState.color][0],
            color: productState.color,
            name: product.name,
            price: product.price,
          }}
          quantity={quantity}
          size={size}
        />
      )}
    </div>
  )
}

const productDescription = css`
  /* width: 50%; */
  padding: 0 2rem;
  h2 {
    margin: 0.2rem 0;
  }
  #ratings {
    display: flex;
    vertical-align: center;
    align-items: center;
    span {
      color: black;
    }
    #rating_value {
      margin: 0 0.3rem;
    }
    margin-bottom: 0.7rem;
  }
  #description {
    font-size: 0.9rem;
    width: 30rem;
  }
  #price {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
  #color {
    height: 4rem;
    margin: 1rem 0;
    P {
      margin: 0.4rem;
    }
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      .selected {
        border: 2px solid black;
        border-radius: 50%;
        padding: 2px;
        margin: -4px 4px;
      }
      li {
        margin: 0 0.5rem;
        width: 1.6rem;
        height: 1.6rem;
        img {
          cursor: pointer;
          width: 100%;
          border-radius: 50%;
        }
      }
    }
  }
  #size {
    margin: 1rem 0;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      .selected {
        width: 1.75rem;
        height: 1.75rem;
        border: 0.125rem solid black;
        border-radius: 50%;
      }
      li {
        width: 2rem;
        height: 2rem;
        margin: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  #error {
    color: red;
    font-size: 0.8rem;
    letter-spacing: 1px;
    p {
      margin: 0;
    }
  }
  #quantity {
    height: 2.5rem;
    margin: 1rem 0;
    display: flex;
    div {
      :hover {
        fieldset {
          border-color: black;
        }
      }
      fieldset {
        border: 1px solid gray;
        border-radius: 0;
      }
    }
    #quantitySelector {
      padding: 0.2rem 0.5rem;
      width: 2.5rem;
    }
  }
  #buttons {
    margin: 0 0.3rem;
    button {
      background: black;
      color: white;
      padding: 0.8rem 6rem;
      letter-spacing: 0.1rem;
      font-weight: bold;
      cursor: pointer;
      border: none;
      transition: color 0.3s;
      :hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`

export default ProductDescription
