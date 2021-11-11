import { isSizeValid } from '../../components/ProductDescription/ProductDescription'

describe('Test ProductDescription component', () => {
  it('isSizeValid should return true if size is passed as input', () => {
    expect(isSizeValid('xs')).toBe(true)
  })
  it('isSizeValid should return false if empty string is passed as input', () => {
    expect(isSizeValid('')).toBe(false)
  })
})
