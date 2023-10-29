export type NativeKeyTypes = string | number | symbol
export type ObjectKeyTypes<T> = keyof T & NativeKeyTypes

export function shallowCopyObject<T>(obj: T): T {
  const shallowCopy = { ...obj }
  return shallowCopy
}

export function cloneObject<T>(obj: T): T {
  const deepCopy = structuredClone(obj) as T
  return deepCopy
}

export function cloneDeep<T>(obj: T): T {
  Object.keys(obj)
  return obj
}

export function jsonDeepCopyObject<T>(obj: T): T {
  const deepCopy = JSON.stringify(obj)
  return JSON.parse(deepCopy) as T
}

export function pickProperties<T, K extends keyof T>(
  obj: T,
  ...keylist: K[] | NativeKeyTypes[]
): Partial<T>
export function pickProperties<T, K extends keyof T>(
  obj: T,
  keylist: K[] | NativeKeyTypes[]
): Partial<T>
export function pickProperties<T, K extends keyof T>(
  obj: T,
  ...keylist: K[] | NativeKeyTypes[]
): Partial<T> {
  const result: Partial<T> = {}
  let keyArray = keylist
  if (keylist.length === 1 && Array.isArray(keylist[0])) {
    keyArray = keylist[0]
  }
  keyArray.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
  })
  return result
}
