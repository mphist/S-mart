import { css } from '@emotion/react'
import Disclaimer from '../Disclaimer/Disclaimer'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import SearchResults from '../SearchResults/SearchResults'

export type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header css={header}>
      <Disclaimer />
      <div className='subHeader'>
        <HamburgerMenu />
        <Logo />
        <Navigation />
        <SearchResults />
      </div>
    </header>
  )
}

const header = css`
  /* height: 7rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  /* line-height: 134px; */
  letter-spacing: 1px;

  .subHeader {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    .subHeader {
    }
  }
`

export default Header
