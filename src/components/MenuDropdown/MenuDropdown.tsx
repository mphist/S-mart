import { css } from '@emotion/react'
import { useMenuDropdownState, useTimerState } from '../../atoms/menuDropdown'

export type MenuDropdownProps = {}

function MenuDropdown({}: MenuDropdownProps) {
  const [menuDropdownState, setMenuDropdownState] = useMenuDropdownState()
  const [, setTimerState] = useTimerState()

  return (
    <div
      css={menuDropdown}
      onMouseLeave={() => {
        const timer = setTimeout(
          () => setMenuDropdownState({ ...menuDropdownState, show: false }),
          300
        )
        setTimerState(timer)
      }}
    >
      {menuDropdownState.id}
    </div>
  )
}

const menuDropdown = css`
  position: fixed;
  width: 100%;
  height: 15rem;
  /* left: 50%;
  margin-left: -35%; //negative half of width */
  top: 10%;
  border: 1px solid lightgray;
  background: white;
`

export default MenuDropdown
