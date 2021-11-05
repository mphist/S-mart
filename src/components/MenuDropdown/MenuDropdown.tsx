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
            <Menu category='CLOTHING' id={id} />
            <Menu category='SHOES' id={id} />
            <Menu category='ACCESSORIES' id={id} />
          </div>
        )
      }
      case 'women': {
        return (
          <div css={category}>
            <Menu category='CLOTHING' id={id} />
            <Menu category='SHOES' id={id} />
            <Menu category='ACCESSORIES' id={id} />
          </div>
        )
      }
      case 'kids': {
        return (
          <div css={kidsCategory}>
            <div css={left}>
              <div css={category}>
                <Menu category='CLOTHING_BOYS' id={id} />
                <Menu category='SHOES_BOYS' id={id} />
              </div>
              <div css={category}>
                <Menu category='CLOTHING_GIRLS' id={id} />
                <Menu category='SHOES_GIRLS' id={id} />
              </div>
            </div>
            <div css={right}>
              <div css={category}>
                <Menu category='ACCESSORIES_KIDS' id={id} />
              </div>
            </div>
          </div>
        )
      }
      case 'jewelry': {
        return (
          <div css={category}>
            <Menu category='EARRINGS' id={id} />
            <Menu category='RINGS' id={id} />
            <Menu category='BRACELETS' id={id} />
            <Menu category='WATCHES' id={id} />
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

const kidsCategory = css`
  display: flex;
  /* justify-content: center;
  align-items: center; */
`

const left = css`
  display: flex;
  flex-direction: column;
`
const right = css``

const category = css`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`

const menuDropdown = css`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 20rem;
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
