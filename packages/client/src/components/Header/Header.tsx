import { css } from '@emotion/react'
import Disclaimer from '../Disclaimer/Disclaimer'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import SearchResults from '../SearchResults/SearchResults'

export type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header css={header}>
      <Disclaimer />
      <Logo />
      <Navigation />
      <SearchResults />
    </header>
  )
}

const header = css`
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  /* line-height: 134px; */
  letter-spacing: 1px;
`

export default Header
