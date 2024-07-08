export function parseBoolean(bool: string): boolean {
  if (!bool) {
    return false
  }
  if (parseInt(bool) === 1) {
    return true
  }
  if (bool.toUpperCase() === 'TRUE') {
    return true
  }
  return false
}
