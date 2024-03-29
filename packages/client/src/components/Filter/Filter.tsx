import { css } from '@mui/styled-engine'
import SizeFilter from '../SizeFilter/SizeFilter'
import TypeFilter from '../TypeFilter/TypeFilter'

export type FilterProps = {
  catalogType: string
  gender: string
}

function Filter({ catalogType, gender }: FilterProps) {
  return (
    <section css={filterHeader}>
      <div css={filterHeaderLeft}>
        <TypeFilter catalogType={catalogType} gender={gender} />
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
    padding: 0 !important;
    label {
      position: relative;
      color: black;
    }
  }
  .MuiSelect-select {
    padding: 0;
  }
  .MuiSelect-outlined {
    padding-right: 0 !important;
  }
  .MuiOutlinedInput-root {
    all: unset;
    height: 3rem;
    width: 6rem;
    position: relative;
    right: 2rem;
    /* border: 1px solid black; */
    /* padding: 0 !important;
    margin: 0 !important; */
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
  .MuiCheckbox-colorPrimary {
    color: red;
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
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`
export default Filter
