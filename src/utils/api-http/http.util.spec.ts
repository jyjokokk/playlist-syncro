import { HTTP } from './http.util'

const dependencies: any = {
  fetch() {
    calls.fetch = true
    return { json() {} }
  }
}

let calls: any
let instance: HTTP
beforeEach(() => {
  instance = new HTTP(dependencies)
  calls = {}
})

describe('get', () => {
  it('call fetch', async () => {
    await instance.get('url')
    expect(calls.fetch).toBe(true)
  })
})

describe('post', () => {
  it('call fetch', async () => {
    await instance.post('url', {})
    expect(calls.fetch).toBe(true)
  })
})
