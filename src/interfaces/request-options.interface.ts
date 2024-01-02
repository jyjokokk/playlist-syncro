import { ContentType, Method } from '../constants/request-options.const'

export type HeaderDefault =
  | Record<string, string>
  | Record<'Content-Type', ContentType>

export interface RequestOptions {
  endpoint?: string
  mode?: string
  cache?: string
  credentials?: string
  redirect?: string
  referrerPolicy?: string
  body?: string
  method: Method
  data?: unknown
  contentType?: ContentType
  headers?: HeaderDefault
}
