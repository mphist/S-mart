import { css } from '@emotion/react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

export type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header css={header}>
      <Logo />
      <Navigation />
    </header>
  )
}

const header = css`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 134px;
`

export default Header
