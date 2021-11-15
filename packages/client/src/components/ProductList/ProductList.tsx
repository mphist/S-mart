import { css } from '@emotion/react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from '../Product/Product'

export type ProductListProps = {
  category?: string
}

function ProductList({ category }: ProductListProps) {
  // if (category) {
  //   return (
  //     <section css={productList}>
  //       <h2>{category}</h2>
  //       <div css={list}>
  //         <ul>
  //           <Product />
  //           <Product />
  //           <Product />
  //           <Product />
  //           <Product />
  //         </ul>
  //       </div>
  //     </section>
  //   )
  // } else
  return (
    <section css={productList}>
      <div css={listForCatalog}>
        <ul>
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </section>
  )
}

const list = css`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    li {
      border: 1px solid lightgray;
      width: 16rem;
      height: 24rem;
      cursor: pointer;
      :hover {
        border: 1px solid black;
      }
    }
  }
`
const listForCatalog = css`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    li {
      border: 1px solid lightgray;
      width: 22.2rem;
      height: 28rem;
      cursor: pointer;
      :hover {
        border: 1px solid black;
      }
    }
  }
`

const productList = css`
  margin: 4rem 0;
`

export default ProductList
