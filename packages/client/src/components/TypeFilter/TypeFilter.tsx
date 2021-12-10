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
import useTypeFilterEffect from '../../hooks/useTypeFilterEffect'
import { storeFilterInSession } from '../../utils/storeFilterInSession'

export type TypeFilterProps = {
  catalogType: string
  gender: string
}

function TypeFilter({ catalogType, gender }: TypeFilterProps) {
  let types: string[] = []
  switch (catalogType) {
    case 'clothing':
      types = ['Hoodies & Sweaters', 'Shirts', 'Pants', 'Jackets']
      break
    case 'shoes':
      types = [
        'Sneakers',
        'Running Shoes',
        'Tennis Shoes',
        'Basketball Shoes',
        'Boots',
      ]
      break
  }
  const { filter, setFilter } = useTypeFilterEffect(gender)
  const session = sessionStorage.getItem('filter')
  let storedFilter: string[] = []
  if (session) {
    storedFilter = JSON.parse(session)
  }
  const type =
    storedFilter && storedFilter.length > filter.type.length
      ? storedFilter
      : filter.type

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const handleChange = (e: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = e

    storeFilterInSession(value)

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

export default TypeFilter
