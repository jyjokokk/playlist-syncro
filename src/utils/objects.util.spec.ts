import {
  shallowCopyObject,
  cloneObject,
  jsonDeepCopyObject,
  pickProperties
} from './objects.util'

const KEYS = {
  id: 'id',
  name: 'name',
  spots: 'spots',
  genres: 'genres',
  category: 'category'
} as any
const VALUES = {
  id: 'id',
  name: 'Name One',
  spots: [1, 2, 3],
  genres: ['action', 'fantasy']
} as any
const keyList = [KEYS.name, KEYS.id, KEYS.spots] as string[]

const firstName = 'Terry'
const lastName = 'Pratchett'
const author = {
  firstName,
  lastName
}
const id = VALUES.id
const id2 = 'id2'
const spots = VALUES.spots
const name = VALUES.name
const name2 = 'Name two'
const genres = VALUES.genres
const category = {
  genres,
  author
}

const obj = {
  id,
  name,
  spots
}
const objWithCategory = {
  ...obj,
  category
}
const objWithCategoryShallow = { ...objWithCategory }
const obj2 = {
  id: id2,
  name: name2,
  spots,
  category
}

const numericObject = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: {
    5: 'five'
  }
}

describe('shallowCopy', () => {
  it('returns a shallow copy', () => {
    const r = shallowCopyObject(objWithCategory)
    expect(r).toMatchObject(objWithCategoryShallow)
  })
})

describe('clone', () => {
  it('returns a deep copy of an object', () => {
    const r = cloneObject(obj2)
    expect(r.category).not.toBe(category)
  })
})

describe('jsonDeepCopyObject', () => {
  it('it should return a copy of an object with plain data fields', () => {
    const r = jsonDeepCopyObject(obj)
    expect(r).toStrictEqual({
      [KEYS.id]: VALUES.id,
      [KEYS.name]: VALUES.name,
      [KEYS.spots]: VALUES.spots
    })
  })
})

describe('pickProperties', () => {
  it('returns an shallow object copy with only the given properties', () => {
    const r = pickProperties(obj, KEYS.name, KEYS.id)
    expect(r).toStrictEqual({ [KEYS.name]: VALUES.name, [KEYS.id]: VALUES.id })
  })

  it('works with an array of string keys', () => {
    const r = pickProperties(obj, keyList)
    expect(r).toEqual({
      [KEYS.id]: VALUES.id,
      [KEYS.name]: VALUES.name,
      [KEYS.spots]: VALUES.spots
    })
  })
  it('works with an array of numberic keys', () => {
    const r = pickProperties(numericObject, [1, 2, 3])
    expect(r).toEqual({
      1: 'one',
      2: 'two',
      3: 'three'
    })
  })

  it('works with rest parameter', () => {
    const r = pickProperties(obj, ...keyList)
    expect(r).toEqual({
      [KEYS.id]: VALUES.id,
      [KEYS.name]: VALUES.name,
      [KEYS.spots]: VALUES.spots
    })
  })
})
