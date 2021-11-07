import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

export type TypeFilterProps = {}

function TypeFilter({}: TypeFilterProps) {
  const [type, setType] = useState('')
  return (
    <FormControl sx={{ minWidth: 80 }}>
      {!type && (
        <InputLabel id='typeFilter' shrink={false}>
          Type
        </InputLabel>
      )}
      <Select
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
      </Select>
    </FormControl>
  )
}

export default TypeFilter
