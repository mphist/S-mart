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
import { useState } from 'react'

export type TypeFilterProps = {}

function TypeFilter({}: TypeFilterProps) {
  const [type, setType] = useState<string[]>([])

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8

  const types = ['Hoodies', 'Sweaters', 'Shirts', 'Pants', 'Jackets']

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
    setType(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  return (
    <FormControl sx={{ minWidth: 80 }}>
      <InputLabel
        id='typeFilter'
        sx={
          type.length > 0
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
            <Checkbox checked={type.indexOf(type_) > -1} />
            <ListItemText primary={type_} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default TypeFilter
