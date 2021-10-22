import React from 'react'
import { useRecoilValue } from 'recoil'
import { menuDropdownState } from '../../atoms/menuDropdown'
import Browse from '../Browse/Browse'
import MenuDropdown from '../MenuDropdown/MenuDropdown'

export type BodyProps = {}

function Body({}: BodyProps) {
  const { show } = useRecoilValue(menuDropdownState)

  return (
    <>
      {show ? <MenuDropdown /> : null}
      <Browse />
    </>
  )
}

export default Body
