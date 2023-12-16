export function parseBoolean(bool: string): boolean {
  if (parseInt(bool) === 1) {
    return true
  }
  if (bool === 'true') {
    return true
  }
  return false
}
