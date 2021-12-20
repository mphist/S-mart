import { css } from '@mui/styled-engine'

export type DisclaimerProps = {}

function Disclaimer({}: DisclaimerProps) {
  return (
    <div css={disclaimer}>
      {/* <p> */}
      <span>
        S-mart was built for a demonstration purpose. You are not able to
        purchase any items here.
      </span>
      <span>
        &nbsp; <a href='https://www.sportchek.ca/'>SportChek</a> has the rights
        to the images and description of all products on this app.
      </span>
      {/* </p> */}
    </div>
  )
}

const disclaimer = css`
  color: white;
  background: black;
  width: 100%;
  /* position: absolute;
  left: 0px;
  right: 0px;
  top: 0px; */
  text-align: center;
  padding: 0.5rem 0;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    line-height: 1rem;
    font-size: 80%;
  }
  span {
    font-size: 80%;
  }
`

export default Disclaimer
