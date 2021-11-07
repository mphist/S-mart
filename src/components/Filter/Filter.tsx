import { css } from '@mui/styled-engine'
import TypeFilter from '../TypeFilter/TypeFilter'

export type FilterProps = {}

function Filter({}: FilterProps) {
  return (
    <section css={filterHeader}>
      <div css={filterHeaderLeft}>
        <TypeFilter />
      </div>
      <div css={filterHeaderRight}></div>
    </section>
  )
}

const filterHeaderLeft = css`
  display: flex;

  .MuiOutlinedInput-root {
    border-radius: 0;
  }
  .Mui-focused {
    color: black !important;
    border: 1px solid black;
  }
  .MuiInputLabel-outlined {
    border: none;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`
const filterHeaderRight = css``

const filterHeader = css`
  display: flex;
`
export default Filter
