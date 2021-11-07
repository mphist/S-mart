import { css } from '@mui/styled-engine'
import SizeFilter from '../SizeFilter/SizeFilter'
import TypeFilter from '../TypeFilter/TypeFilter'

export type FilterProps = {}

function Filter({}: FilterProps) {
  return (
    <section css={filterHeader}>
      <div css={filterHeaderLeft}>
        <TypeFilter />
        <SizeFilter />
      </div>
      <div css={filterHeaderRight}></div>
    </section>
  )
}

const filterHeaderLeft = css`
  display: flex;

  /* .MuiOutlinedInput-root {
    border-radius: 0;
    :hover {
      border: 1px solid black;
      margin: 0 -1px;
    }
  }
  .Mui-focused {
    color: black !important;
    border: 1px solid black;
    margin: 0 -1px;
  }
  .MuiInputLabel-outlined {
    border: none;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  } */
  .MuiFormControl-root {
    flex-direction: row;
    label {
      position: relative;
      color: black;
    }
  }
  .MuiOutlinedInput-root {
    all: unset;
    height: 3rem;
    width: 6rem;
    position: relative;
    right: 2rem;
  }
  .Mui-focused {
  }
  .MuiInputLabel-outlined {
    all: unset;
    position: relative;
    top: 0.7rem;
    left: 1.5rem;
  }
  .MuiOutlinedInput-notchedOutline {
    all: unset;
  }
  .MuiSelect-iconOpen {
  }
  /* .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  } */
`
const filterHeaderRight = css``

const filterHeader = css`
  display: flex;
`
export default Filter
