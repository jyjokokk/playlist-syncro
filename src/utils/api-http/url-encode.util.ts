export function urlencodeObject(obj: Record<string, string | number>): string {
  const strings = Object.keys(obj).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  })
  return strings.join('&')
}
