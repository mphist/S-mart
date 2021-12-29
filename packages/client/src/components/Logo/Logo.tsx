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
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    margin-right: 35rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`

export default Logo
