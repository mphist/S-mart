import { css } from '@emotion/react'
import useSearchEffect from '../../hooks/useSearchEffect'

export type SearchResultsProps = {}

function SearchResults({}: SearchResultsProps) {
  const { searchState, products } = useSearchEffect()
  if (!searchState.open) return null
  if (!products || products.length < 1) return null

  return (
    <div css={searchResults}>
      {products?.map((product) => (
        <div css={resultStyle}>
          <div id='searchImage'>
            <img
              src={Object.values(product.image)[0][0]}
              alt='searchResult-preview'
            />
          </div>
          <div id='searchText'>
            <div>{product.name}</div>
            <div>{`$${product.price}`}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const searchResults = css`
  width: 25rem;
  height: 14rem;
  background: tomato;
  position: absolute;
  top: 6rem;
  right: 19.3rem;
  overflow-y: scroll;
  animation: open 0.8s ease-in-out;
  @keyframes open {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`
const resultStyle = css`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  cursor: pointer;

  :nth-child(1) {
    margin: 0;
  }
  #searchImage {
    border: 1px solid black;
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #searchText {
    display: flex;
    flex-direction: column;
    width: 19rem;
    margin-left: 1rem;
    max-height: 100%;
    overflow: hidden;
  }
`

export default SearchResults
