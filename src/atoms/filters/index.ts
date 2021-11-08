import { atom, useRecoilState } from 'recoil'

type FilterState = {
  type: string[]
  size: string[]
  color: string[]
  [key: string]: string[]
}
const filterState = atom<FilterState>({
  key: 'filterState',
  default: { type: [], size: [], color: [] },
})

export const useFilterState = () => useRecoilState(filterState)
