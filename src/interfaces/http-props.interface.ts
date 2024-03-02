import { ContentType } from '../constants/request-options.const'

export interface ContentParams {
  'Content-Type'?: ContentType
}

export type HeaderTypes = Partial<{ 'Content-Type': ContentType }>
// interface HeaderTypes extends HeadersInit {
//   'Content-Type'?: ContentType
// }

export interface HTTPGetProps {
  url: string
  params?: HeaderTypes
}

export interface HTTPPostProps extends HTTPGetProps {
  body: unknown
}

export interface HTTPPostFormProps extends HTTPGetProps {
  data: Record<string, string | number | boolean>
}
