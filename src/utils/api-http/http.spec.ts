import { CONTENT_TYPES } from '../../constants/request-options.const'
import { HTTP } from './http.util'
import { UriEncodeObject } from '../url-encode.util'

// jest.mock('node-fetch')

const url = 'https://test.url.com'
const data = {
  id: 1,
  content: 'mock'
}
const getParams = {
  headers: { 'Content-Type': 'application/json' },
  method: 'GET'
}

const postParams = {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify(data)
}

const urlEncodedForm = {
  client_code: 'client_code',
  number: '1'
}
const urlEncodedParams = {
  headers: { 'Content-Type': CONTENT_TYPES.APPLICATION.FORM_URLENCODED },
  method: 'POST',
  body: UriEncodeObject(urlEncodedForm)
}

let instance
beforeEach(() => {
  const consoleErrorSpy = jest.spyOn(console, 'error')
  consoleErrorSpy.mockImplementation(jest.fn())

  instance = new HTTP()
})

describe('get', () => {
  it('calls fetch with GET', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(data)
    })
    const r = await instance.get({ url })
    expect(r).toStrictEqual(data)
    expect(global.fetch).toHaveBeenCalledWith(url, getParams)
  })
  it('handles errors', async () => {
    const expectedError = new Error('HTTP Error: 401')
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      error: true,

      json: jest.fn().mockResolvedValue(data)
    })
    await expect(instance.get({ url })).rejects.toThrow(expectedError)
  })
})

describe('post', () => {
  it('calls fetch with POST', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(data)
    })
    const r = await instance.post({ url, data })
    expect(r).toStrictEqual(data)
    expect(global.fetch).toHaveBeenCalledWith(url, postParams)
  })
  it('transforms request body according to content-type', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(data)
    })

    const params = {
      'Content-Type': CONTENT_TYPES.APPLICATION.FORM_URLENCODED
    }

    const r = await instance.post({ url, params, data: urlEncodedForm })
    expect(r).toStrictEqual(data)
    expect(global.fetch).toHaveBeenCalledWith(url, urlEncodedParams)
  })
  it('handles errors', async () => {
    const expectedError = new Error('HTTP Error: 401')
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      error: true,

      json: jest.fn().mockResolvedValue(data)
    })
    const params = {
      'Content-Type': CONTENT_TYPES.APPLICATION.FORM_URLENCODED
    }
    await expect(
      instance.post({ url, params, data: urlEncodedForm })
    ).rejects.toThrow(expectedError)
  })
})
