// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>
