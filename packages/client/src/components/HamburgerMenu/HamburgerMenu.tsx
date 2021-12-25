import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'
export type HamburgerMenuProps = {}

function HamburgerMenu({}: HamburgerMenuProps) {
  return (
    <div css={hamburgerMenu}>
      <FontAwesomeIcon icon={faBars} />
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
