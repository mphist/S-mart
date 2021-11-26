import { atom, useRecoilState } from 'recoil'

export const bagState = atom({ key: 'bagState', default: { quantity: 0 } })

export const useBagState = () => useRecoilState(bagState)
