import { css } from '@mui/styled-engine'
import newHoodie from '../../assets/products/newHoodie.jpg'
import { useOverlayState } from '../../atoms/uiState'

export type AddToBagConfirmationProps = {
  color?: string
  size: string
}

function AddToBagConfirmation({ color, size }: AddToBagConfirmationProps) {
  const [, setOverlayState] = useOverlayState()
  return (
    <div css={addToBagConfirmation}>
      <div id='addToBagHeader'>
        <h1>ADDED TO YOUR BAG</h1>
      </div>
      <div id='addToBagBody'>
        <div id='addToBagBodyLeft'>
          <div id='itemImage'>
            <img src={newHoodie} alt='hoodie' />
          </div>
          <div id='itemDescription'>
            <h4>Marimekko Oversize Hoodie with 3D Nylon Trefoil Patch</h4>
            <p id='price'>$60</p>
            <p id='color'>Color: Pink</p>
            <p id='size'>{`Size: ${size.toUpperCase()}`}</p>
            <p id='quantity'>Quantity: 1</p>
          </div>
        </div>
        <div id='border'></div>
        <div id='addToBagBodyRight'>
          <h3>YOUR BAG</h3>
          <div id='bagDescription'>
            <p id='quantity'>3 items</p>
            <p id='totalCost'>
              <span>Total Product Cost:</span>
              <span>$180.00</span>
            </p>
            <p id='totalDelivery'>
              <span>Total Delivery Cost: </span>
              <span>FREE</span>
            </p>
            <div id='border'></div>
            <p id='grandTotal'>
              <span id='total'>Total:</span>
              <span>$180.00</span>
            </p>
          </div>
          <div id='buttons'>
            <button
              id='continueShopping'
              onClick={() => setOverlayState(false)}
            >
              CONTINUE SHOPPING
            </button>
            <button id='checkout'>CHECKOUT</button>
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
