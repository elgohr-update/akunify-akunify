export const currencyFormater = (value: string | number) => {
  if (!value) {
    return 'Rp0'
  }
  return 'Rp'+value
    .toString()
    .replace(/^0+/, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(/[A-Za-z]/g, '')
}