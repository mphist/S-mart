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
import { useFilterState } from '../../atoms/filters'

export type SizeFilterProps = {}

function SizeFilter({}: SizeFilterProps) {
  const [filter, setFilter] = useFilterState()
  const size = filter.size

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8

  const sizes = ['XS', 'S', 'L', 'XL', 'XXL']

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }
  const handleChange = (e: SelectChangeEvent<typeof size>) => {
    const {
      target: { value },
    } = e
    setFilter(
      // On autofill we get a the stringified value.
      typeof value === 'string'
        ? { ...filter, size: value.split(',') }
        : { ...filter, size: value }
    )
  }
  return (
    <FormControl sx={{ minWidth: 80 }}>
      <InputLabel
        id='sizeFilter'
        sx={
          size!.length > 0
            ? {
                fontWeight: 'bold !important',
                margin: '0 -0.641px !important',
              }
            : {}
        }
      >
        Size
      </InputLabel>

      <Select
        labelId='sizeFilter'
        multiple
        value={size}
        onChange={handleChange}
        input={<OutlinedInput label='Size' />}
        // renderValue={(selected) => selected.join(', ')}
        renderValue={() => ''}
        MenuProps={MenuProps}
      >
        {sizes.map((size_) => (
          <MenuItem key={size_} value={size_}>
            <Checkbox
              checked={size!.indexOf(size_) > -1}
              sx={{ color: 'black !important' }}
            />
            <ListItemText primary={size_} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SizeFilter
