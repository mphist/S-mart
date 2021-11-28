import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
import { useOverlayState } from '../../atoms/uiState'
import client from '../../utils/client'
import { ShoppingBag } from '../../utils/shoppingBag'

export type AddToBagConfirmationProps = {
  size: string
  quantity: number
  productInfo: {
    color: string
    image: string
    name: string
    price: number
  }
}

function AddToBagConfirmation({
  size,
  quantity,
  productInfo,
}: AddToBagConfirmationProps) {
  const [, setOverlayState] = useOverlayState()
  const [bagQuantity, setBagQuantity] = useState(0)
  const [bagTotal, setBagTotal] = useState(0)
  const [shoppingBag, setShoppingBag] = useState({})
  useEffect(() => {
    const bag = sessionStorage.getItem('bag')
    if (bag) {
      const bagObj = JSON.parse(bag)
      const shoppingBag = new ShoppingBag(
        bagObj.totalQuantity,
        bagObj.totalPrice,
        bagObj.items
      )
      setBagQuantity(shoppingBag.getTotalQuantity())
      setBagTotal(shoppingBag.getTotalPrice())
      setShoppingBag(shoppingBag)
    }
  }, [])

  const callCheckoutApi = async () => {
    const { data: redirectionUrl } = await client.post(
      '/stripe/create-checkout-session',
      {
        // name: productInfo.name,
        // total: bagTotal,
        // image: productInfo.image,
        shoppingBag,
      }
    )
    window.location.href = redirectionUrl
  }

  return (
    <div css={addToBagConfirmation}>
      <div id='addToBagHeader'>
        <h1>ADDED TO YOUR BAG</h1>
      </div>
      <div id='addToBagBody'>
        <div id='addToBagBodyLeft'>
          <div id='itemImage'>
            <img src={productInfo.image} alt='hoodie' />
          </div>
          <div id='itemDescription'>
            <h4>{productInfo.name}</h4>
            <p id='price'>{`$${productInfo.price}`}</p>
            <p id='color'>{`Color: ${productInfo.color}`} </p>
            <p id='size'>{`Size: ${size.toUpperCase()}`}</p>
            <p id='quantity'>{`Quantity: ${quantity}`}</p>
          </div>
        </div>
        <div id='border'></div>
        <div id='addToBagBodyRight'>
          <h3>YOUR BAG</h3>
          <div id='bagDescription'>
            <p id='quantity'>{`${bagQuantity} items`}</p>
            <p id='totalCost'>
              <span>Total Product Cost:</span>
              <span>{`$${Math.round(bagTotal * 100) / 100}`}</span>
            </p>
            <p id='totalDelivery'>
              <span>Total Delivery Cost: </span>
              <span>FREE</span>
            </p>
            <div id='border'></div>
            <p id='grandTotal'>
              <span id='total'>Total:</span>
              <span>{`$${Math.round(bagTotal * 100) / 100}`}</span>
            </p>
          </div>
          <div id='buttons'>
            <button
              id='continueShopping'
              onClick={() => setOverlayState(false)}
            >
              CONTINUE SHOPPING
            </button>
            <button id='checkout' onClick={callCheckoutApi}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const addToBagConfirmation = css`
  width: 55rem;
  height: 20rem;
  background: white;
  position: fixed;
  top: 17rem;
  left: 50%;
  margin-left: -27.5rem; /* Negative half of width. */
  z-index: 5;

  #addToBagHeader {
    h1 {
      margin: 1rem;
      font-family: sans-serif;
      font-weight: bold;
    }
  }
  #addToBagBody {
    display: flex;
    max-height: 16rem;

    #addToBagBodyLeft {
      display: flex;
      width: 50%;

      #itemImage {
        margin: 1rem;
        img {
          width: 13rem;
        }
      }
      #itemDescription {
        margin: 0 1rem;
        h4 {
          font-weight: lighter;
          margin: 0.4rem 0;
          max-height: 8rem;
          overflow: hidden;
        }
        p {
          font-size: 80%;
          margin: 0.2rem 0;
        }
        #price {
          font-size: 100%;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      }
    }

    #border {
      border-left: 1px solid black;
      margin: 1rem 0;
    }

    #addToBagBodyRight {
      width: 50%;
      h3 {
        margin: 0.5rem 1rem;
      }

      #bagDescription {
        margin: 0.5rem 1rem;
        p {
          margin: 0;
          font-size: 85%;
        }
        #totalCost {
          display: flex;
          justify-content: space-between;
        }
        #totalDelivery {
          display: flex;
          justify-content: space-between;
        }
        #border {
          border-top: 1px solid black;
          margin: 0.2rem 0;
        }
        #grandTotal {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          #total {
            letter-spacing: 0.3px;
          }
        }
      }
      #buttons {
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        button {
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          padding: 0.7rem;
          text-align: left;
          margin-bottom: 0.7rem;
          border: 1px solid black;
          cursor: pointer;
        }
        #continueShopping {
          color: black;
          transition: color 0.3s;
          :hover {
            color: rgba(0, 0, 0, 0.5);
          }
        }
        #checkout {
          background: black;
          color: white;
          transition: color 0.3s;
          :hover {
            color: rgb(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
`

export default AddToBagConfirmation
