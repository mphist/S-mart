import { css } from '@emotion/react'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export type ProductDescriptionProps = {
  name: string
}

function ProductDescription({ name }: ProductDescriptionProps) {
  const select = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const liNodes = document?.querySelector('#sizeWrapper')?.childNodes
    liNodes?.forEach((e) => (e as Element).removeAttribute('class'))
    e.currentTarget.className = 'selected'
  }

  const [quantity, setQuantity] = useState(1)

  const renderSize = (type: string) => {
    switch (type) {
      case 'CLOTHING': {
        return (
          <ul id='sizeWrapper'>
            <li id='xs' onClick={select}>
              XS
            </li>
            <li id='s' onClick={select}>
              S
            </li>
            <li id='m' onClick={select}>
              M
            </li>
            <li id='l' onClick={select}>
              L
            </li>
            <li id='xl' onClick={select}>
              XL
            </li>
            <li id='xxl' onClick={select}>
              XXL
            </li>
          </ul>
        )
      }
    }
  }
  return (
    <div css={productDescription}>
      <h2>{name}</h2>
      <div id='ratings'>
        <Rating name='readonly' value={4} readOnly size='small' />
        <span id='rating_value'>4</span>
      </div>
      <div id='description'>
        From the beginning, both adidas and Marimekko have been dedicated to
        empowerment and expression. On this hoodie, the Finnish label's Unikko
        poppy print fills the iconic Trefoil as a visual representation of our
        collaborative intention. The loose shape and cozy fleece material come
        together for a feeling of absolute comfort.
      </div>
      <div id='price'>
        <p>$60.00</p>
      </div>
      <div id='color'>
        <p>Color</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div id='size'>{renderSize('CLOTHING')}</div>
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
            <button>ADD TO BAG</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const productDescription = css`
  width: 50%;
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
      li {
        margin: 0 0.5rem;
        border: 1px solid;
        border-radius: 50%;
        width: 1.6rem;
        height: 1.6rem;
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
        margin: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  #quantity {
    height: 2.5rem;
    margin: 1rem 0;
    display: flex;
    div {
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
    }
  }
`

export default ProductDescription
