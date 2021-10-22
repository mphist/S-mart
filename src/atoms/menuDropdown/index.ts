import { atom, useRecoilState } from 'recoil'

type MenuDropdownState = {
  id: string | null
  show: boolean
}

export const menuDropdownState = atom<MenuDropdownState>({
  key: 'menuDropdownState',
  default: { id: null, show: false },
})

export const useMenuDropdownState = () => useRecoilState(menuDropdownState)
