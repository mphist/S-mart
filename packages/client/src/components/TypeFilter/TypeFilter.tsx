import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect } from 'react'
import { useFilterState } from '../../atoms/filters'
import useProductsQueryEffect from '../../hooks/useProductsQueryEffect'

export type TypeFilterProps = {}

function TypeFilter({}: TypeFilterProps) {
  const [filter, setFilter] = useFilterState()
  const { type: initialType, category } = useProductsQueryEffect()
  const type = filter.type

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8

  const types = ['Hoodies & Sweaters', 'Shirts', 'Pants', 'Jackets']

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  useEffect(() => {
    setFilter({ ...filter, type: [parseCategory(category)] })
  }, [category])

  const handleChange = (e: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = e
    setFilter(
      // On autofill we get a the stringified value.
      typeof value === 'string'
        ? { ...filter, type: value.split(',') }
        : { ...filter, type: value }
    )
  }
  return (
    <FormControl sx={{ minWidth: 80 }}>
      <InputLabel
        id='typeFilter'
        sx={
          type!.length > 0
            ? {
                height: '2rem !important',
                fontWeight: 'bold !important',
                margin: '0 -0.641px !important',
              }
            : {}
        }
      >
        Type
      </InputLabel>

      {/* <Select
        labelId='typeFilter'
        value={type}
        sx={{ height: 50 }}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value='hoodies'>Hoodies</MenuItem>
        <MenuItem value='sweaters'>Sweaters</MenuItem>
        <MenuItem value='shirts'>Shirts</MenuItem>
        <MenuItem value='pants'>Pants</MenuItem>
        <MenuItem value='jackets'>Jackets</MenuItem>
      </Select> */}
      <Select
        labelId='typeFilter'
        multiple
        value={type}
        onChange={handleChange}
        input={<OutlinedInput label='Type' />}
        // renderValue={(selected) => selected.join(', ')}
        renderValue={() => ''}
        MenuProps={MenuProps}
      >
        {types.map((type_) => (
          <MenuItem key={type_} value={type_}>
            <Checkbox
              checked={type!.indexOf(type_) > -1}
              sx={{ color: 'black !important' }}
            />
            <ListItemText primary={type_} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const parseCategory = (category: string) => {
  const arrAnd = category.split('&')
  const arrUnder = category.split('_')

  let string: string = ''
  if (arrAnd.length > 1) {
    arrAnd.forEach(
      (str) => (string += ' ' + str[0].toUpperCase() + str.slice(1) + ' &')
    )
  } else if (arrUnder.length > 1) {
    arrUnder.forEach(
      (str) => (string += ' ' + str[0].toUpperCase() + str.slice(1))
    )
    return string.slice(1)
  } else {
    return category[0]?.toUpperCase() + category.slice(1)
  }
  const cat = string.slice(1, string.length - 2)
  return cat
}

export default TypeFilter
