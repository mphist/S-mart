import { css } from '@emotion/react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'react'
import { useSearchState } from '../../atoms/search'
import MobileSearchResults from '../MobileSearchResults/MobileSearchResults'
import SearchInput from '../SearchInput/SearchInput'

export type MobileSearchProps = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function MobileSearch({ handleSearch }: MobileSearchProps) {
  const ref = useRef<HTMLInputElement>(null)
  const [searchState, setSearchState] = useSearchState()

  useEffect(() => {
    if (searchState.mobileOpen) {
      ref.current?.focus()
    }
  }, [searchState])

  return (
    <div css={mobileSearchBar(searchState.mobileOpen)} id='mobileSearchBar'>
      <div id='mobileSearchInput'>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{
            position: 'fixed',
            top: '7px',
            left: '7px',
            width: '13px',
            height: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => {
            setSearchState({
              ...searchState,
              mobileOpen: false,
            })
          }}
        />
        <SearchInput
          ref={ref}
          searchState={searchState}
          handleSearch={handleSearch}
        />
        <MobileSearchResults />
      </div>
    </div>
  )
}

const mobileSearchBar = (openSearch: boolean) => css`
  ${!openSearch &&
  css`
    display: none;
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;

  #mobileSearchInput {
    width: 100%;
    text-align: center;
    #searchInput {
      letter-spacing: 0.5px;
      position: fixed;
      right: 0;
      left: 30px;
      width: 94%;
      height: 1.5rem;
      padding: 3px;
      padding-left: 10px;
      &:focus {
        outline: none;
      }
    }
  }
`
export default MobileSearch
