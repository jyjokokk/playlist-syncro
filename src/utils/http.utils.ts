import {
  CONTENT_TYPES,
  ContentType,
  METHOD,
  Method
} from '../constants/request-options.const'

interface RequestOptions {
  endpoint: string
  method: Method
  data?: unknown
  contentType?: ContentType
  headerOptions?: HeadersInit
}

export class HTTP {
  constructor(private readonly baseUrl = '') {}

  async get(endpoint: string, headerOptions?: HeadersInit): Promise<unknown> {
    return await this.request({
      endpoint,
      method: METHOD.GET,
      headerOptions
    })
  }

  async post(endpoint: string, headerOptions?: HeadersInit): Promise<unknown> {
    return await this.request({
      endpoint,
      method: METHOD.POST,
      headerOptions
    })
  }

  private async request(options: RequestOptions): Promise<unknown> {
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
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return (await response.json()) as unknown
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
