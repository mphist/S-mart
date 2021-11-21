import { css } from '@mui/styled-engine'
import { useEffect, useRef, useState } from 'react'
import searchIcon from '../../assets/search_icon.png'

export type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
  const [openSearch, setOpenSearch] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (openSearch) ref.current?.focus()
    window.addEventListener('click', (e) => {
      const id = (e.target as Element).id
      if (id !== 'searchInput' && id !== 'searchBtn') setOpenSearch(false)
    })
  }, [openSearch])

  return (
    <div css={searchBar(openSearch)}>
      <input id='searchInput' type='text' ref={ref} placeholder='Search' />
      <img
        id='searchBtn'
        src={searchIcon}
        alt='search_btn'
        onClick={() => setOpenSearch(true)}
      />
    </div>
  )
}

const searchBar = (openSearch: boolean) => css`
  img {
    position: relative;
  }
  input {
    visibility: hidden;
    width: 0;
    position: absolute;
    top: 5.05rem;
    right: 35rem;
    transition: width 0.5s ease-out;
    padding: 0.1rem 0.5rem;
    padding-right: 2rem;
    font-size: 0.8rem;
    &:focus {
      outline: none;
    }
    ${openSearch &&
    css`
      visibility: visible;
      width: 7rem;
      height: 1.5rem;
    `}
  }
`

export default SearchBar
