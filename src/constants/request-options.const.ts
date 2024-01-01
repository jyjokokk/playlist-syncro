export const CONTENT_TYPES = {
  APPLICATION: {
    JSON: 'application/json',
    JAVASCRIPT: 'application/javascript',
    PDF: 'application/pdf',
    LD_JSON: 'application/ld+json',
    XML: 'application/xml',
    ZIP: 'application/zip',
    FORM_URLENCODED: 'application/x-www-form-urlencoded'
  },
  TEXT: {
    CSS: 'text/css',
    CSV: 'text/csv',
    HTML: 'text/html',
    PLAIN: 'text/plain',
    XML: 'text/xml'
  }
} as const

export type ContentType =
  | (typeof CONTENT_TYPES.APPLICATION)[keyof typeof CONTENT_TYPES.APPLICATION]
  | (typeof CONTENT_TYPES.TEXT)[keyof typeof CONTENT_TYPES.TEXT]

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const

export type Method = keyof typeof METHOD
