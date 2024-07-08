export interface ConfigLiterals {
  PORT: number
  IS_LOCAL: boolean
  IS_DEVELOPMENT: boolean
  IS_PRODUCTION: boolean
  HOSTNAME: string
  LOCAL_DATABASE_PATH: string
  CLIENT_ID: string
  CLIENT_SECRET: string
  ACCESS_TOKEN: string
  [key: string]: any
}

export type ConfigValueType = string | number | boolean

export interface Config {
  [key: string]: ConfigValueType
}
