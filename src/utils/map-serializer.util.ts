export default class MapSerializer {
  private replacer<K, V>(_: any, value: Map<K, V>) {
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      }
    } else {
      return value
    }
  }

  private reviver(_: any, value) {
    if (typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value)
      }
    }
    return value
  }

  stringify<K, V>(map: Map<K, V>): String {
    return JSON.stringify(map, this.replacer)
  }

  parse(mapStr: string): Map<any, any> {
    console.log(mapStr)
    return JSON.parse(mapStr, this.reviver)
  }
}
