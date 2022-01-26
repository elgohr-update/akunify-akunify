// eslint-disable @typescript-eslint/no-explicit-any
// prettier-ignore
export const eventTracker = (data: Record<string, unknown>): void => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(data)
}
