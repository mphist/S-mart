import { css } from '@emotion/react'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import handbag from '../../assets/products/handbag_1.jpg'

export type BrowseProps = {}

function Browse({}: BrowseProps) {
  return (
    <section css={browse}>
      {/* <CategoryMenu /> */}
      <div className='newProduct'>
        <img src={handbag} alt='new product' />
      </div>
    </section>
  )
}

const browse = css`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  height: 20rem;

  .newProduct {
    width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
`

export default Browse
