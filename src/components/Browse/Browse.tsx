import { css } from '@emotion/react'
import background from '../../assets/bg.jpg'

export type BrowseProps = {}

function Browse({}: BrowseProps) {
  return (
    <section css={browse}>
      {/* <CategoryMenu /> */}
      <div className='background'>
        <img src={background} alt='site background' />
      </div>
    </section>
  )
}

const browse = css`
  .background {
    width: 100%;
    margin: 0 auto;
    img {
      /* background-size: cover; */
      width: 100%;
      margin: 0 auto;
    }
  }
`

export default Browse
