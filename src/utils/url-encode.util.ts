export function UriEncodeObject(
  obj: Record<string, string | number | boolean>
): string {
  const strings = Object.keys(obj).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  })
  return strings.join('&')
}
