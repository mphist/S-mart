import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import useSearchEffect from '../../hooks/useSearchEffect'

export type SearchResultsProps = {}

function SearchResults({}: SearchResultsProps) {
  const { searchState, products } = useSearchEffect()
  if (!searchState.open) return null
  if (!products || products.length < 1) return null

  return (
    <div css={searchResults(document.body.scrollHeight)}>
      {products?.map((product) => (
        <div css={resultStyle}>
          <Link
            to={`/product/${product.name.replaceAll(' ', '-').toLowerCase()}-${
              product.id
            }`}
          >
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
          </Link>
        </div>
      ))}
    </div>
  )
}

const searchResults = (scrollHeight: number) => css`
  width: 24.9rem;
  height: 14rem;
  position: absolute;
  top: 7.5rem;
  right: 16.2rem;

  @media screen and (min-width: 993px) {
    right: 4.25rem;
    top: 7.6rem;
  }
  @media screen and (min-width: 1253px) {
    top: 6.2rem;
    right: 16.25rem;
  }

  @media screen and (max-width: 993px) {
    right: 4.25rem;
    top: 7.4rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

  /* ${scrollHeight > 797
    ? css`
        right: 19.3rem;
      `
    : css`
        right: 19.8rem;
      `} */
  overflow-y: scroll;
  animation: open 0.8s ease-in-out;
  z-index: 5;
  background: white;
  border: 1px solid black;
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
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  a {
    width: 100%;
    display: flex;
    color: black;
    text-decoration: none;
  }

  :nth-child(1) {
    margin: 0;
  }
  #searchImage {
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
