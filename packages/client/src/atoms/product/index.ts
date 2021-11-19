import { atom, useRecoilState } from 'recoil'

export const productState = atom({
  key: 'productState',
  default: { color: '' },
})

export const useProductState = () => useRecoilState(productState)
