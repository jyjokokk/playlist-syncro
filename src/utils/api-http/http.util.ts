import { CONTENT_TYPES, METHOD } from '../../constants/request-options.const'
import {
  HTTPGetProps,
  HTTPPostProps,
  HeaderTypes
} from '../../interfaces/http-props.interface'
import { UriEncodeObject } from '../url-encode.util'

export class HTTP {
  async get<T>({ url, params }: HTTPGetProps): Promise<T | Response> {
    const headers: HeadersInit = { ...this.doHeaders(params) }
    const method = METHOD.GET
    try {
      const response = await fetch(url, { method, headers })
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  }

  async post<T>({ url, data, params }: HTTPPostProps): Promise<T | Response> {
    const headers: HeadersInit = { ...this.doHeaders(params) }
    const method = METHOD.POST
    const body = this.resolveBody(params, data)
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      })
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  }

  private doHeaders(params: HeaderTypes): HeaderTypes {
    if (!params || !params['Content-Type']) {
      return {
        ...params,
        'Content-Type': CONTENT_TYPES.APPLICATION.JSON
      }
    }
    const cType = params['Content-Type']
    if (cType) {
      return {
        ...params,
        'Content-Type': cType
      }
    }
  }

  private resolveBody(params: HeaderTypes, body: any): BodyInit {
    const contentType = params
      ? params['Content-Type']
      : CONTENT_TYPES.APPLICATION.JSON
    switch (contentType) {
      case CONTENT_TYPES.APPLICATION.JSON:
        return JSON.stringify(body)
      case CONTENT_TYPES.APPLICATION.FORM_URLENCODED:
        if (typeof body === 'string') {
          return body
        }
        if (Array.isArray(body)) {
          return new URLSearchParams(body)
        }
        return UriEncodeObject(body)
    }
  }
}

const http = new HTTP()
export default http
