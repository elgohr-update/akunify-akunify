const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const replaceWithChar = (str: string, char: string): string => {
  var censored = str[0] + str.slice(1).replace(/.(?!#)/g, '*')
  return censored
}

const getInitialName = (name: string): string => {
  if (name === '') {
    return ''
  }
  const expName = name.split(' ')
  let initialName = ''
  for (let i = 0; i < expName.length; i++) {
    const name = capitalizeFirstLetter(expName[i])
    initialName += replaceWithChar(name, '*') + ' '
  }

  return initialName
}

export default getInitialName
