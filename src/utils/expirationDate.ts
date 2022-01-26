const expirationDate = (days: number = 60) => {
  let expires = new Date()

  expires.setTime(+expires + days * 86400000)

  return expires
}

export default expirationDate
