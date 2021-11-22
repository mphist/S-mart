import { css } from '@emotion/react'
import Product from '../Product/Product'
import { Product as ProductType } from '../../graphql/types'
import useGetNewOrBestProductsEffect from '../../hooks/useGetNewOrBestProductsEffect'
import { useEffect, useState } from 'react'

export type ProductListProps = {
  category?: string
  products?: ProductType[]
}

function ProductList({ category, products }: ProductListProps) {
  const { newArrivals, bestSellers, errorNew } = useGetNewOrBestProductsEffect()
  if (errorNew) {
    alert('Our server is currently down. We will be right back!')
    return null
  }
  if (category) {
    return (
      <section css={productList}>
        <h2>{category}</h2>
        <div css={list}>
          <ul>
            {category === 'NEW ARRIVALS'
              ? newArrivals?.map((item, key) => (
                  <Product item={item} key={key} />
                ))
              : bestSellers?.map((item, key) => (
                  <Product item={item} key={key} />
                ))}
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
          </ul>
        </div>
      </section>
    )
  } else {
    const items = products
    return (
      <section css={productList}>
        <div css={listForCatalog}>
          <ul>
            {/* <Product />
            <Product />
            <Product />
            <Product /> */}
            {items?.map((item, key) => (
              <Product item={item} key={key} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
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
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
    li {
      border: 1px solid lightgray;
      width: 22.2rem;
      /* height: 28rem; */
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
