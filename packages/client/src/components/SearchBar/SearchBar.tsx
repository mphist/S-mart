import { css } from '@mui/styled-engine'
import { useCallback, useEffect, useRef, useState } from 'react'
import searchIcon from '../../assets/search_icon.png'
import useSearchEffect from '../../hooks/useSearchEffect'

export type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
  const { searchState, setSearchState } = useSearchEffect()
  const [timer, setTimer] = useState<NodeJS.Timeout>()
  const ref = useRef<HTMLInputElement>(null)

  const closeSearchBar = useCallback(
    (e: MouseEvent) => {
      const id = (e.target as Element).id
      if (id !== 'searchInput' && id !== 'searchBtn')
        setSearchState({ ...searchState, open: false })
    },
    [setSearchState, searchState]
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState({ ...searchState, name: e.target.value })
  }

  useEffect(() => {
    if (searchState.open) ref.current?.focus()
    window.addEventListener('click', closeSearchBar)
    return () => {
      window.removeEventListener('click', closeSearchBar)
    }
  }, [searchState, setSearchState, closeSearchBar])

  return (
    <div css={searchBar(searchState.open, document.body.scrollHeight)}>
      <input
        id='searchInput'
        type='text'
        ref={ref}
        value={searchState.name}
        placeholder='Search'
        onChange={handleSearch}
      />
      <img
        id='searchBtn'
        src={searchIcon}
        alt='search_btn'
        onClick={() => setSearchState({ ...searchState, open: true })}
      />
    </div>
  )
}

const searchBar = (openSearch: boolean, height: number) => css`
  img {
    position: relative;
    left: 1rem;
    /* position: absolute;
    right: 570px;
    top: 73px; */
  }
  input {
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
