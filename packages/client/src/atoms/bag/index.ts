import { atom, useRecoilState } from 'recoil'

type BagStateType = {
  totalQuantity: number
  totalPrice: number
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
}

export const bagState = atom<BagStateType>({
  key: 'bagState',
  default: {
    totalQuantity: 0,
    totalPrice: 0,
    items: null,
  },
})

export const useBagState = () => useRecoilState(bagState)
