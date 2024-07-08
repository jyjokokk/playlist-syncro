import axios from 'axios'
import {
  ErrorResponse,
  HeaderParams,
  HttpPostProps
} from './types/http.interface'

const dependencies = {
  httpClient: axios
}
type Depencies = typeof dependencies

export class HTTP {
  constructor(private dependencies: Depencies) {}

  async get<T>({ url, params }: HttpPostProps): Promise<T | ErrorResponse> {
    const { httpClient } = this.dependencies
    try {
      const headers = this.constructHeaders(params)
      const response = await httpClient.get(url, { headers, params })
      return response.data
    } catch (error) {
      return this.handleError(error)
    }
  }

  async post<T>(payload: HttpPostProps): Promise<T | ErrorResponse> {
    const { httpClient } = this.dependencies
    const { url, body, params } = payload
    const headers = this.constructHeaders(params)
    try {
      const response = await httpClient.post(url, body, { headers })
      return response.data
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: Error): ErrorResponse {
    console.error(`HTTP error during request: ${error}`)
    return { error, data: error?.message || null }
  }

  constructHeaders(params: HeaderParams): Record<string, string> {
    const headers = {
      'Content-Type': 'application/json'
    }
    if (params?.contentType) {
      headers['Content-Type'] = params?.contentType
    }
    if (params?.accessToken) {
      headers['Authorization'] = `Bearer ${params.accessToken}`
    }
    return headers
  }
}

export default new HTTP(dependencies)
