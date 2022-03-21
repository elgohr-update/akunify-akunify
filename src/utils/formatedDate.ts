const formatedDate = (strDate: string): string => {
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
  const splitDate = strDate.split('-')

  return `${splitDate[2]} ${months[Number(splitDate[1]) - 1]} ${splitDate[0]}`
}

export default formatedDate
