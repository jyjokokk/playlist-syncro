const validArrayTypes = [
  'string',
  'number',
  'bigint',
  'boolean',
  'symbol',
  'undefined',
  'object',
  'function',
] as const;
type ArrayType = (typeof validArrayTypes)[number];

export function isArrayOfType<T>(
  arr: T[],
  type: ArrayType,
  checkEmpty: boolean = false,
): boolean {
  if (checkEmpty && isEmptyArray(arr)) {
    return false;
  }
  if (!Array.isArray(arr)) {
    return false;
  }
  if (!validArrayTypes.includes(type)) {
    throw new Error(`${type} is not a valid Array type!`);
  }
  return arr.every((element) => {
    return typeof element === type;
  });
}

export function isStringArray<T>(arr: T[]): boolean {
  return isArrayOfType(arr, 'string');
}

export function isNumberArray<T>(arr: T[]): boolean {
  return isArrayOfType(arr, 'number');
}

export function isEmptyArray<T>(arr: T[]): boolean {
  return arr.length < 1;
}

export function isBooleanArray<T>(arr: T[]): boolean {
  return isArrayOfType(arr, 'boolean');
}
