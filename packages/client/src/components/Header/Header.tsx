import { css } from '@emotion/react'
import Disclaimer from '../Disclaimer/Disclaimer'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

export type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header css={header}>
      <Disclaimer />
      <Logo />
      <Navigation />
    </header>
  )
}

const header = css`
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 134px;
  letter-spacing: 1px;
`

export default Header
