import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

export type LogoProps = {}

function Logo({}: LogoProps) {
  return (
    <div css={logo}>
      <Link to='/'>S-mart</Link>
    </div>
  )
}

const logo = css`
  font-size: 2rem;
  width: 12rem;
  text-align: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`

export default Logo
