import { isEmpty } from '../../components/SelectedFilter/SelectedFilter'

describe('Test SelectedFilter', () => {
  it('isEmpty returns true if an empty object is passed as an input', () => {
    expect(isEmpty({})).toBe(true)
  })
  it('isEmpty returns false if a non-empty object is passed as an input', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })
})
