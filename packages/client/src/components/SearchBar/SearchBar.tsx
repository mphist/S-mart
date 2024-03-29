import React from 'react'
import { css } from '@mui/styled-engine'
import { useCallback, useEffect, useRef, useState } from 'react'
import searchIcon from '../../assets/search_icon.png'
import useSearchEffect from '../../hooks/useSearchEffect'
import MobileSearch from '../MobileSearch/MobileSearch'
import SearchInput from '../SearchInput/SearchInput'

export type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
  const { searchState, setSearchState } = useSearchEffect()
  const [timer, setTimer] = useState<NodeJS.Timeout>()
  const ref = useRef<HTMLInputElement>(null)

  const closeSearchBar = useCallback(
    (e: MouseEvent) => {
      const id = (e.target as Element).id
      if (id !== 'searchInput' && id !== 'searchBtn')
        setSearchState((searchState) => ({
          ...searchState,
          regularOpen: false,
        }))
    },
    [setSearchState]
  )

  const handleClickSearch = () => {
    const el = document.querySelector('#mobileSearchBar')
    if (el) {
      el.id = 'mobileSearchBar__open'
    }
    setSearchState({
      ...searchState,
      regularOpen: true,
      mobileOpen: true,
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState({ ...searchState, name: e.target.value })
  }

  useEffect(() => {
    if (searchState.regularOpen) {
      console.log('search open', ref.current)
      ref.current?.focus()

      window.addEventListener('click', closeSearchBar)
      return () => {
        window.removeEventListener('click', closeSearchBar)
      }
    }
  }, [searchState, setSearchState, closeSearchBar])

  return (
    <div css={searchBarWrapper}>
      <div css={searchBar(searchState.regularOpen, document.body.scrollHeight)}>
        <SearchInput
          ref={ref}
          searchState={searchState}
          handleSearch={handleSearch}
        />
        <img
          id='searchBtn'
          src={searchIcon}
          alt='search_btn'
          onClick={handleClickSearch}
        />
      </div>
      <MobileSearch handleSearch={handleSearch} />
    </div>
  )
}

const searchBarWrapper = css`
  #mobileSearchBar__open {
    transform: translateX(0.5%);
  }
`

const searchBar = (openSearch: boolean, height: number) => css`
  img {
    position: relative;
    left: 1rem;
    /* position: absolute;
    right: 570px;
    top: 73px; */
  }
  input {
    @media screen and (max-width: 767px) {
      display: none;
    }
    visibility: hidden;
    width: 0;
    position: relative;
    /* position: absolute;
    top: 4.2rem; */
    ${height > 797
      ? css`
          /* right: 34.7rem; */
          right: -44px;
        `
      : css`
          /* right: 35.2rem; */
          right: -44px;
        `}
    /* transition: width 0.5s ease-out; */
    padding: 0.1rem 0.5rem;
    padding-right: 2rem;
    font-size: 0.8rem;
    border: 1px solid black;
    &:focus {
      outline: none;
    }
    ${openSearch &&
    css`
      visibility: visible;
      width: 7rem;
      height: 19px;
    `}
  }
`

export default SearchBar
