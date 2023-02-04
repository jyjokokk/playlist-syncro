type StringIndexed = { [key: string]: any };
type NumberIndexed = { [key: number]: any };

export function shallowCopy<T>(obj: T): T {
  const shallowCopy = { ...obj };
  return shallowCopy;
}

export function clone<T>(obj: T): T {
  const deepCopy = structuredClone(obj);
  return deepCopy;
}

export const copy = clone;

export function deepCopyJson<T>(obj: T): T {
  const deepCopy = JSON.stringify(obj);
  return JSON.parse(deepCopy);
}

export function pickProperties(
  obj: StringIndexed | NumberIndexed,
  ...props: string[]
) {
  return props.reduce((result: Object, prop) => {
    result[prop] = obj[prop];
    return result;
  }, {});
}

export default class ObjectUtils {
  public shallowCopy = shallowCopy;
  public clone = clone;
  public copy = copy;
  public deepCopyJson = deepCopyJson;
  public pickProperties = pickProperties;
}
