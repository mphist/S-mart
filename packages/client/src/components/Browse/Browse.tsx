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
    // make child's width wider than parent's
    width: 99.5vw; //minus the scrollbar width
    position: relative;
    left: calc(-50vw + 50%);
    img {
      /* background-size: cover; */
      width: 100%;
      margin: 0 auto;
    }
  }
`

export default Browse
