import { css } from '@mui/styled-engine'
import { Link } from 'react-router-dom'
import closeIcon from '../../assets/close_icon.png'
import { useBagState } from '../../atoms/bag'
import { ShoppingBag } from '../../utils/shoppingBag'

export type BagItemProps = {
  id: string
  item: {
    image: string
    name: string
    price: number
    quantity: number
    color: string
    size: string
  }
}

function BagItem({ id, item }: BagItemProps) {
  const linkName = `/product/'${item.name
    .replaceAll(' ', '-')
    .toLowerCase()}-${id}`

  const [, setBagState] = useBagState()

  const handleRemoveItem = () => {
    const bag = sessionStorage.getItem('bag')
    const bagObj = JSON.parse(bag!)
    bagObj.totalQuantity -= item.quantity
    bagObj.totalPrice -= item.quantity * item.price
    delete bagObj.items[id]

    const shoppingBag = new ShoppingBag(
      bagObj.totalQuantity,
      bagObj.totalPrice,
      bagObj.items
    )
    sessionStorage.setItem('bag', JSON.stringify(shoppingBag))
    setBagState(shoppingBag)
  }

  return (
    <div css={bagItem}>
      <div css={left}>
        <Link
          to={{
            pathname: linkName,
            state: { prevPath: 'shoppingBag', color: item.color },
          }}
        >
          <img src={item.image} alt='bag-item' />
        </Link>
      </div>
      <div css={right}>
        <div className='top'>
          <div id='text'>
            <Link to={linkName}>
              <p id='name'>{item.name}</p>
            </Link>
            <p id='color'>{item.color}</p>
            <p id='size'>{`SIZE: ${item.size}`}</p>
          </div>
          <div id='price'>{`$ ${
            item.price.toString().includes('.')
              ? item.price
              : item.price + '.00'
          }`}</div>
          <div id='button'>
            <img src={closeIcon} alt='close' onClick={handleRemoveItem} />
          </div>
        </div>
        <div className='bottom'>
          <p id='quantity'>{`Quantity: ${item.quantity}`}</p>
        </div>
      </div>
    </div>
  )
}

const left = css`
  height: 100%;
  width: 33%;
  img {
    height: 100%;
  }
`
const right = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: center; */
  /* align-items: center; */

  .top {
    display: flex;
    width: 100%;
    height: 20rem;
    /* justify-content: center; */
    /* align-items: center; */

    #text {
      margin-left: 1rem;
      width: 75%;
      a {
        outline: none;
        color: black;
        text-decoration: none;
      }
      #name {
        max-height: 3rem;
        overflow: hidden;
      }
      #color {
        max-width: 21rem;
        min-width: 21rem;
        overflow: hidden;
      }
    }

    #price {
      width: 15%;
      margin-top: 2rem;
      margin-left: 1rem;
    }

    #button {
      width: 10%;
      margin-left: 0.5rem;
      margin-top: 1rem;
      img {
        cursor: pointer;
      }
    }
  }

  .bottom {
    #quantity {
      margin-left: 1rem;
      margin-top: 2rem;
    }
  }
`

const bagItem = css`
  margin: 2rem 0;
  border: 1px solid gray;
  width: 45rem;
  height: 15rem;
  display: flex;
  /* align-items: center; */
`

export default BagItem
