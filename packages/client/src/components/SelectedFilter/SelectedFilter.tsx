import { css } from '@mui/styled-engine'
import { useFilterState } from '../../atoms/filters'

export type SelectedFilterProps = {}

export const isEmpty = (obj: Object) => {
  let i = 0
  Object.values(obj).forEach((arr) => (i += arr.length))
  return i === 0
}

function SelectedFilter({}: SelectedFilterProps) {
  const [filter, setFilter] = useFilterState()

  const clearAllFilters = () => {
    setFilter({ type: [], size: [], color: [] })
  }

  const removeSelectedFilter = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const {
      currentTarget: { id },
    } = e
    const type = id.split('-')[0]
    const name = id.split('-')[1]
    setFilter({
      ...filter,
      [type]: [...filter[type]!.filter((name_) => name_ !== name)],
    })
  }
  return (
    <div css={selectedFilter}>
      {filter.type?.map((type) => (
        <span id={`type-${type}`} onClick={removeSelectedFilter}>
          {type}
          <span>x</span>
        </span>
      ))}
      {filter.size?.map((size) => (
        <span id={`size-${size}`} onClick={removeSelectedFilter}>
          {size}
          <span>x</span>
        </span>
      ))}
      {filter.color?.map((color) => (
        <span id={`color-${color}`} onClick={removeSelectedFilter}>
          {color}
          <span>x</span>
        </span>
      ))}
      {!isEmpty(filter) && (
        <span id='clearAll' onClick={clearAllFilters}>
          Clear All
        </span>
      )}
    </div>
  )
}

const selectedFilter = css`
  margin-top: 1rem;
  span {
    margin: 0 0.5rem;
    padding: 0.2rem 0.7rem;
    background: #f0efef;
    border-radius: 10%;
    cursor: pointer;
    span {
      font-size: 80%;
      padding: 0;
      margin: 0;
      margin-left: 0.3rem;
    }
  }
  #clearAll {
    all: unset;
    text-decoration: underline;
    font-size: 0.85rem;
    background: white;
    margin-left: 1rem;
    cursor: pointer;
    span {
      background: white;
    }
  }
`

export default SelectedFilter
