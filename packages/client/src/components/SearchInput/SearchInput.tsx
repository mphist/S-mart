import { SearchState } from '../../atoms/search'

export type SearchInputProps = {
  ref: React.RefObject<HTMLInputElement>
  searchState: SearchState
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput({ ref, searchState, handleSearch }: SearchInputProps) {
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

export default SearchInput
