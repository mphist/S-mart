import { css } from '@emotion/react'
import Product from '../Product/Product'
import { Product as ProductType } from '../../graphql/types'
import useGetNewOrBestProductsEffect from '../../hooks/useGetNewOrBestProductsEffect'

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
  if (!newArrivals && !bestSellers) {
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

    @media screen and (max-width: 600px) {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 600px) {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 992px) {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    li {
      border: 1px solid lightgray;
      width: 16rem;
      height: 24rem;
      margin: 0.5rem auto;

      @media screen and (min-width: 992px) {
        width: 90%;
        height: 100%;
      }

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

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1530px) {
      grid-template-columns: repeat(4, 1fr);
    }

    /* @media screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    } */

    li {
      border: 1px solid lightgray;
      /* width: 22.2rem; */
      /* height: 28rem; */

      @media screen and (max-width: 600px) {
        width: 17rem;
        margin: 0.5rem auto;
      }
      @media screen and (min-width: 600px) {
        width: 17rem;
        margin: 0.5rem auto;
      }
      @media screen and (min-width: 768px) {
        width: 19rem;
        margin: 0 auto;
        margin-top: 10px;
      }
      @media screen and (min-width: 992px) {
        width: 18.5rem;
        margin: 0 auto;
        margin-top: 10px;
      }
      /* @media screen and (min-width: 1025px) {
        width: 18.7rem;
        margin: 0 auto;
        margin-top: 10px;
      } */
      @media screen and (min-width: 1050px) {
        width: 19.5rem;
        margin: 0 auto;
        margin-top: 10px;
      }
      @media screen and (min-width: 1080px) {
        width: 20rem;
        margin: 0 auto;
        margin-top: 10px;
      }
      @media screen and (min-width: 1460px) {
        width: 22.2rem;
      }
      cursor: pointer;
      :hover {
        border: 1px solid black;
      }
    }
  }
`

const productList = css`
  margin: 4rem 0;
  width: 90rem;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin-right: 2rem;
    h2 {
      text-align: center;
      font-size: 100%;
    }
  }
  @media screen and (min-width: 600px) {
    max-width: 100%;
    margin-right: 2rem;
    h2 {
      text-align: center;
      font-size: 100%;
    }
  }
  @media screen and (min-width: 992px) {
    max-width: 100%;
    h2 {
      text-align: center;
      font-size: 100%;
    }
  }
`

export default ProductList
