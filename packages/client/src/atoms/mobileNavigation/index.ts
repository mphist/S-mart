import { atom, useRecoilState } from 'recoil'

export const mobileNavigationState = atom({
  key: 'mobileNavigationState',
  default: { typeOpen: false, categoryOpen: false },
})

export const useMobileNavigationState = () =>
  useRecoilState(mobileNavigationState)
