import React, { ForwardedRef, forwardRef } from 'react'
import { SearchState } from '../../atoms/search'

export type SearchInputProps = {
  searchState: SearchState
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput(
  { searchState, handleSearch }: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      id='searchInput'
      type='text'
      ref={ref}
      value={searchState.name}
      placeholder='Search'
      onChange={handleSearch}
    />
  )
}

export default forwardRef<HTMLInputElement, SearchInputProps>(SearchInput)
