import { css } from '@mui/styled-engine'

export type OverlayProps = {}

function Overlay({}: OverlayProps) {
  return <div css={overlay}></div>
}

const overlay = css`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
`

export default Overlay
