export interface RequestOptions {
  url?: string
  method: string
  mode?: string
  cache?: string
  credentials?: string
  headers?: Record<string, unknown>
  redirect?: string
  referrerPolicy?: string
  body?: Record<string, unknown>
}
