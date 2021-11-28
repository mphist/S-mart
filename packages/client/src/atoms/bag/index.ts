import { atom, useRecoilState } from 'recoil'
import { ItemType } from '../../utils/shoppingBag'

type BagStateType = {
  totalQuantity: number
  totalPrice: number
  items: {
    [key: string]: ItemType[]
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
