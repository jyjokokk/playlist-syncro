type StringIndexed = { [key: string]: any }
type NumberIndexed = { [key: number]: any }

export function shallowCopyObject<T>(obj: T): T {
  const shallowCopy = { ...obj }
  return shallowCopy
}

export function cloneObject<T>(obj: T): T {
  const deepCopy = structuredClone(obj)
  return deepCopy
}

export const copyObject = cloneObject

export function jsonDeepCopyObject<T>(obj: T): T {
  const deepCopy = JSON.stringify(obj)
  return JSON.parse(deepCopy)
}

export function pickProperties(
  obj: StringIndexed,
  ...props: readonly string[]
): StringIndexed
export function pickProperties(
  obj: NumberIndexed,
  ...props: readonly number[]
): StringIndexed
export function pickProperties(
  obj: NumberIndexed | StringIndexed,
  ...props: readonly any[]
): StringIndexed {
  const isNumlist = props.every((e) => typeof e === 'number')
  const propsList = isNumlist ? props.map((p: number) => p.toString()) : props
  return propsList.reduce((result: Object, prop) => {
    result[prop] = obj[prop]
    return result
  }, {})
}

export function pickPropertiesDeep(
  obj: StringIndexed,
  ...props: string[]
): StringIndexed

export function pickPropertiesDeep(
  obj: NumberIndexed,
  ...props: number[]
): StringIndexed

export function pickPropertiesDeep(
  obj: Object,
  ...props: any[]
): StringIndexed {
  const deep = cloneObject(obj)
  return pickProperties(deep, ...props)
}

export default class {
  public shallowCopy = shallowCopyObject
  public clone = cloneObject
  public copy = copyObject
  public jsonDeepCopy = jsonDeepCopyObject
  public pickProperties = pickProperties
  public pickPropertiesDeep = pickPropertiesDeep
}

const n = [5, 3, 4]
const s = ['aasd', 'dlfd', 'lla', 'los']
n.every((n) => n > 0)
s.every((s) => s.startsWith('a'))
