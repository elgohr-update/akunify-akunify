export const promiseTimeout = (ms = 2000): Promise<number> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
