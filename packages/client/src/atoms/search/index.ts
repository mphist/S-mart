import { atom, useRecoilState } from 'recoil'

export const searchState = atom({
  key: 'searchState',
  default: { open: false, name: '' },
})

export const useSearchState = () => useRecoilState(searchState)
