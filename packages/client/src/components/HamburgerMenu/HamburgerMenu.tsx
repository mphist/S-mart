import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'
import { useMobileNavigationState } from '../../atoms/mobileNavigation'
export type HamburgerMenuProps = {}

function HamburgerMenu({}: HamburgerMenuProps) {
  const [mobileNavigationState, setMobileNavigationState] =
    useMobileNavigationState()
  return (
    <div css={hamburgerMenu}>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() =>
          setMobileNavigationState({ ...mobileNavigationState, typeOpen: true })
        }
      />
    </div>
  )
}

const hamburgerMenu = css`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    left: 2rem;
    margin-top: 1.6rem;
  }
`

export default HamburgerMenu
