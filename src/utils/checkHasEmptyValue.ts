const checkHasEmptyValue = (data: any): boolean => {
  const object = data
  let hasEmpty = false

  for (var key in object) {
    if (
      object[key] === null ||
      object[key] === undefined ||
      object[key] === '' ||
      object[key] === '0' ||
      object[key] === 0
    ) {
      hasEmpty = true
      break
    }
  }

  return hasEmpty
}

export default checkHasEmptyValue
