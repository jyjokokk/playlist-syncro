export type JSONFileContent = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | JSONFileContent
    | string[]
    | number[]
    | boolean[]
}
