import { generateRandomString } from './generate-random-string.util'

describe('generateRandomString', () => {
  it('returns a string of the specified length', () => {
    const length = 10
    const result = generateRandomString(length)
    expect(result.length).toBe(length)
  })

  it('returns a string containing only alphanumeric characters', () => {
    const length = 10
    const result = generateRandomString(length)
    const alphanumericRegex = /^[a-zA-Z0-9]+$/
    expect(alphanumericRegex.test(result)).toBe(true)
  })

  it('returns a different string each time it is called', () => {
    const length = 10
    const result1 = generateRandomString(length)
    const result2 = generateRandomString(length)
    expect(result1).not.toBe(result2)
  })
})
