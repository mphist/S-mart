import { css } from '@emotion/react'

export type LogoProps = {}

function Logo({}: LogoProps) {
  return <div css={logo}>S-mart</div>
}

const logo = css`
  font-size: 2rem;
  width: 15rem;
  text-align: center;
`

export default Logo
