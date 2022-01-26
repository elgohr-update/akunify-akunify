const fakeData = {
  data: {
    id: 38661,
    title: 'Dukungan Indonesia Untuk R80',
  },
}

export const fetchData = jest.fn(() => Promise.resolve(fakeData))
