import { css } from '@emotion/react'
import { useMenuDropdownState, useTimerState } from '../../atoms/menuDropdown'
import Menu from '../Menu/Menu'

export type MenuDropdownProps = {
  id: string | null
}

function MenuDropdown({ id }: MenuDropdownProps) {
  const [, setMenuDropdownState] = useMenuDropdownState()
  const [, setTimerState] = useTimerState()

  const closeMenuDropdown = () => {
    const timer = setTimeout(
      () => setMenuDropdownState({ id: null, show: false }),
      300
    )
    setTimerState(timer)
  }

  const renderMenu = (id: string | null) => {
    switch (id) {
      case 'men': {
        return (
          <div css={category}>
            <Menu category='CLOTHING' />
            <Menu category='SHOES' />
            <Menu category='ACCESSORIES' />
          </div>
        )
      }

      default:
        return null
    }
  }

  return (
    <div css={menuDropdown} onMouseLeave={closeMenuDropdown}>
      {renderMenu(id)}
    </div>
  )
}

const category = css`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`

const menuDropdown = css`
  position: fixed;
  width: 100%;
  height: 16rem;
  /* left: 50%;
  margin-left: -35%; //negative half of width */
  top: 10%;
  border: 1px solid lightgray;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default MenuDropdown
