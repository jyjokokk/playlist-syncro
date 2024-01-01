import { ContentType, Method } from '../constants/request-options.const'

export interface RequestOptions {
  endpoint?: string
  mode?: string
  cache?: string
  credentials?: string
  redirect?: string
  referrerPolicy?: string
  body?: Record<string, unknown>
  method: Method
  data?: unknown
  contentType?: ContentType
  headerOptions?: HeadersInit
}
