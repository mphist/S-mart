import { atom, useRecoilState } from 'recoil'

type FilterState = {
  type: string[]
  size: string[]
  color: string[]
  categories: string[]
  [key: string]: string[]
}
export const filterState = atom<FilterState>({
  key: 'filterState',
  default: { type: [], size: [], color: [], categories: [] },
})

export const useFilterState = () => useRecoilState(filterState)
