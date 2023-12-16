import { parseBoolean } from './parseBoolean.util'

describe('parseBoolean', () => {
  it('returns true if input is string for true', () => {
    const r = parseBoolean('true')
    expect(r).toBe(true)
  })
  it('returns true if input is string for 1', () => {
    const r = parseBoolean('1')
    expect(r).toBe(true)
  })
  it('returns false if input string is anything else', () => {
    const r = parseBoolean('false')
    expect(r).toBe(false)
  })
})
