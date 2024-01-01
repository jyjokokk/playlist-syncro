import {
  type ContentType,
  CONTENT_TYPES,
  METHOD
} from '../../constants/request-options.const'
import { type RequestOptions } from '../../interfaces/request-options.interface'

export class HTTP {
  constructor(private readonly baseUrl = '') {}

  async get<K extends string, V>(
    endpoint: string,
    headerOptions?: HeadersInit
  ): Promise<Record<K, V>> {
    const r = await this.request({
      endpoint,
      method: METHOD.GET,
      headerOptions
    })
    return r.json() as Record<K, V>
  }

  //TODO: Better post or request method (so it will handle URLEncoded cases properly)
  //      - Replace 'data' param for 'request' method with just 'body', handle body
  //        transformation in the 'post' method
  async post<K extends string, V>(
    endpoint: string,
    data: unknown,
    headerOptions?: HeadersInit
  ): Promise<Record<K, V>> {
    const r = await this.request({
      endpoint,
      method: METHOD.POST,
      headerOptions,
      data
    })
    return (await r.json()) as Record<K, V>
  }

  private async request(options: RequestOptions): Promise<Response> {
    const { endpoint, method, data, contentType, headerOptions } = options
    try {
      const contentOption = this.resolveContentType(contentType)
      const headers = {
        ...contentOption,
        ...headerOptions
      }
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined
      })
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`)
      }
      return response
    } catch (error) {
      console.error('Fetch Error:', error)
      throw error
    }
  }

  private resolveContentType(contentType: ContentType): {
    'Content-Type': ContentType
  } {
    if (!contentType) {
      return { 'Content-Type': CONTENT_TYPES.APPLICATION.JSON }
    }
    return {
      'Content-Type': contentType
    }
  }
}
