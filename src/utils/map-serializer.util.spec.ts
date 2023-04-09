import MapSerializer from './map-serializer.util'

const map = new Map([
  [
    'a',
    {
      b: {
        c: new Map([['d', 'text']]),
      },
    },
  ],
])
const jsonInput = JSON.stringify(['elem'])

describe('MapSerializer', () => {
  let instance

  beforeEach(() => {
    instance = new MapSerializer()
  })

  it('instance should be an instanceof MapSerializer', () => {
    expect(instance instanceof MapSerializer).toBeTruthy()
  })

  describe('.stringify', () => {
    it('should have a method stringify()', () => {
      instance.stringify(map)
      expect(instance.stringify).toBeDefined()
    })

    it('stringifys a Map object', () => {
      const r = instance.stringify(map)
      expect(typeof r === 'string').toBeTruthy()
    })
  })

  describe('.parse', () => {
    it('should have a method parse()', () => {
      const mapStr = instance.stringify(map)
      instance.parse(mapStr)
      expect(instance.parse).toBeDefined()
    })
    it('parses a stringified map object', () => {
      const str = instance.stringify(map)
      const r = instance.parse(str)
      expect(r instanceof Map).toBeTruthy()
    })
    it('returns the parsed JSON if not in correct Map format', () => {
      const r = instance.parse(jsonInput)
      expect(r instanceof Map).toBeFalsy()
      expect(r).toStrictEqual(['elem'])
    })
  })
})
