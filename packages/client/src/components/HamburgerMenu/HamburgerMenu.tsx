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
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 1.6rem;
  }
`

export default HamburgerMenu
