export const pageview = (url: string): void => {
  window &&
    window.dataLayer &&
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
}
