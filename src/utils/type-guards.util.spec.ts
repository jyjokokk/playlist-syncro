import {
  isArrayOfType,
  isBooleanArray,
  isNumberArray,
  isStringArray,
  isEmptyArray,
} from './type-guards.util'

const stringArr = ['a', 'b', 'c']
const numberArr = [1, 2, 3]
const booleanArr = [true, false, true]
const mixedArr = [...stringArr, ...numberArr]
const emptyArr = []

describe('isArrayOfType', () => {
  it('should expose a function', () => {
    expect(isArrayOfType).toBeDefined()
  })

  it('checks array for for containing given value type only', () => {
    const r1 = isArrayOfType(stringArr, 'string')
    expect(r1).toBeTruthy()
  })

  it('checks for empty array', () => {
    const r1 = isArrayOfType(stringArr, 'string', true)
    expect(r1).toBeTruthy()
    const r2 = isArrayOfType(emptyArr, 'string', true)
    expect(r2).toBeFalsy()
  })
})

describe('isStringArray', () => {
  it('isStringArray should return expected output', () => {
    const r1 = isStringArray(stringArr)
    expect(r1).toBeTruthy()
    const r2 = isStringArray(mixedArr)
    expect(r2).toBeFalsy()
  })
})

describe('isNumberArray', () => {
  it('should return if array only contains numbers', () => {
    const r1 = isNumberArray(numberArr)
    expect(r1).toBeTruthy()
    const r2 = isNumberArray(mixedArr)
    expect(r2).toBeFalsy()
  })
})

describe('isBooleanArray', () => {
  it('should return if array only contains booleans', () => {
    const r1 = isBooleanArray(booleanArr)
    expect(r1).toBeTruthy()
    const r2 = isStringArray(mixedArr)
    expect(r2).toBeFalsy()
  })
})

describe('isEmptyArray', () => {
  it('isEmptyArray should return expected output', () => {
    const r = isEmptyArray(emptyArr)
    expect(r).toBeTruthy()
    const r1 = isEmptyArray(mixedArr)
    expect(r1).toBeFalsy()
  })
})
