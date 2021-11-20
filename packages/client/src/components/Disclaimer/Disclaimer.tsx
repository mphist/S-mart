import { css } from '@mui/styled-engine'

export type DisclaimerProps = {}

function Disclaimer({}: DisclaimerProps) {
  return (
    <div css={disclaimer}>
      <p>
        S-mart was built for a demonstration purpose. You are not able to
        purchase any items here.
      </p>
    </div>
  )
}

const disclaimer = css`
  color: white;
  background: black;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    line-height: 1rem;
    font-size: 80%;
  }
`

export default Disclaimer
