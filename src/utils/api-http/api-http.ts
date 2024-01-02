import http from './http.util'

interface Props {
  endpoint: string
  variables?: unknown
  data?: any
}

export abstract class ApiHTTP {
  private dependencies: {
    http: typeof http
  } = { http }

  constructor(private readonly baseUrl = '') {}

  async get({ endpoint, variables }: Props): Promise<any> {
    const { http } = this.dependencies
    const url = this.resolveUrl(endpoint)
    const r: any = await http.get({
      url,
      params: variables
    })
    return r
  }

  async post<T>({ endpoint, data, variables }: Props): Promise<T> {
    const { http } = this.dependencies
    const url = this.resolveUrl(endpoint)
    const r: any = await http.post({
      url,
      params: variables,
      data
    })
    return r as T
  }

  protected resolveUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`
  }
}
