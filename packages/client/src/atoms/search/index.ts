import { atom, useRecoilState } from 'recoil'

export type SearchState = {
  regularOpen: boolean
  mobileOpen: boolean
  name: string
}
export const searchState = atom<SearchState>({
  key: 'searchState',
  default: { regularOpen: false, mobileOpen: false, name: '' },
})

export const useSearchState = () => useRecoilState(searchState)
