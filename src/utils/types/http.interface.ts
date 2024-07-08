/* istanbul ignore file */
export interface ErrorResponse {
  error?: Error
  data: any
}

type HttpContentType =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | string

export interface HttpGetProps {
  url: string
  accessToken?: string
  params?: HeaderParams
}

export interface HttpPostProps {
  url: string
  accessToken?: string
  params?: HeaderParams
  body?: any
  contentType?: HttpContentType
}

export interface HeaderParams {
  contentType?: HttpContentType
  accessToken?: string
  [key: string]: any
}

export interface ApiProps {
  url: string
  variables?: unknown
  contentType?: HttpContentType
}
