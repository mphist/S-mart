import { atom, useRecoilState } from 'recoil'

export const overlayState = atom({
  key: 'overlayState',
  default: false,
})

export const useOverlayState = () => useRecoilState(overlayState)
