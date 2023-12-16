import { add } from '.'

describe('add', () => {
  it('takes two numbers and returns their sum', () => {
    const r = add(1, 1)
    expect(r).toBe(2)
  })
})
