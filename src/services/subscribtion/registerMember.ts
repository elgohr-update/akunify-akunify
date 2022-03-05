import { fetchData } from 'utils/fetch-data'

interface IRegisterMember {
  name: string
  name_alias: string
  email: string
  phone_number: string
}

const registerMember = async (body: IRegisterMember): Promise<boolean> => {
  try {
    const response: any = await fetchData({
      url: `/members`,
      method: 'POST',
      data: {
        data: body,
      },
    })

    return response
  } catch (error) {
    throw error
  }
}

export default registerMember
