import dayjs from 'dayjs'

const formatedDate = (strDate: string, withTime?: boolean): string => {
  const date = dayjs(strDate).format('YYYY-MM-DD HH:mm')
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const separateDateTime = date.split(' ')
  const splitDate = separateDateTime[0].split('-')

  return `${splitDate[2]} ${months[Number(splitDate[1]) - 1]} ${splitDate[0]} ${
    withTime ? separateDateTime[1] + 'WIB' : ''
  }`
}

export default formatedDate
