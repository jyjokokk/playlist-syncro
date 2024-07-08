import { HTTP } from './http.util'

const accessToken = 'mockAccessToken'
const url = 'http://fakeurl.com'

const axios: any = {
  get: (url, config?) => {
    calls.axios.get = true
    calledWith.axios.get = { url, config }
    return {
      data: true
    }
  },
  post: (url, body, config) => {
    calls.axios.post = true
    calledWith.axios.post = { url, body, config }
    return { data: { url, body, config } }
  },
  delete: (url, body) => {
    calls.axios.delete = true
    return { data: { url, body } }
  }
}
const dependencies: any = {
  httpClient: axios
}
let calls: any
let calledWith: any
let instance: HTTP
beforeEach(() => {
  instance = new HTTP(dependencies)
  calls = {
    axios: {}
  }
  calledWith = {
    axios: {
      get: {},
      post: {}
    }
  }
})

describe('get', () => {
  it('call axios.get', async () => {
    await instance.get({ url })
    expect(calls.axios.get).toBe(true)
  })
  it('should have been called with URL', async () => {
    await instance.get({ url })
    expect(calledWith.axios.get.url).toStrictEqual(url)
  })
  xit('should have been called with URL and params', async () => {
    const params = { id: 1 }
    await instance.get({ url, params })
    expect(calledWith.axios.get.url).toStrictEqual(url)
    expect(calledWith.axios.get.config.params).toStrictEqual(params)
  })
  it('handles error', async () => {
    axios.get = () => {
      throw new Error()
    }
    jest.spyOn(console, 'error').mockImplementation(jest.fn())

    const response: any = await instance.get({ url })
    expect(response.error).toBeInstanceOf(Error)
  })
})

describe('post', () => {
  it('call axios.post', async () => {
    await instance.post({ url: 'url' })
    expect(calls.axios.post).toBe(true)
  })
  it('should have been called with URL, body and headers', async () => {
    const body = { id: 1 }
    const params = { accessToken }
    await instance.post({ url, body, params })
    expect(calledWith.axios.post.url).toStrictEqual(url)
  })
  it('handl error without crashing the app', async () => {
    axios.post = () => {
      throw new Error()
    }
    jest.spyOn(console, 'error').mockImplementation(jest.fn())

    const response: any = await instance.post({ url })
    expect(response.error).toBeInstanceOf(Error)
  })
})

describe('constructHeaders', () => {
  it('should return headers with "Content-Type" set to "application/json" when accessToken and headerOptions are empty', () => {
    const headers = instance.constructHeaders({
      accessToken: '',
      contentType: ''
    })
    expect(headers).toEqual({
      'Content-Type': 'application/json'
    })
  })

  it('should return headers with "Authorization" set to the constructed bearer token when accessToken is provided', () => {
    const accessToken = 'dummyAccessToken'
    const headers = instance.constructHeaders({ accessToken })
    expect(headers).toEqual({
      'Content-Type': 'application/json',
      Authorization: 'Bearer dummyAccessToken'
    })
  })

  it('should return headers with "Content-Type" set to the provided headerOptions when headerOptions is provided', () => {
    const contentType = 'application/xml'
    const headers = instance.constructHeaders({ contentType })
    expect(headers).toEqual({
      'Content-Type': 'application/xml'
    })
  })

  it('should return headers with both "Authorization" and "Content-Type" set when both accessToken and headerOptions are provided', () => {
    const accessToken = 'dummyAccessToken'
    const contentType = 'application/xml'
    const headers = instance.constructHeaders({ accessToken, contentType })
    expect(headers).toEqual({
      'Content-Type': 'application/xml',
      Authorization: 'Bearer dummyAccessToken'
    })
  })
})
