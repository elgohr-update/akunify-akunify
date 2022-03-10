import { fetchData } from 'utils/fetch-data'

interface IRegisterMember {
  member: number
  service: number
}

const subscribeService = async (body: IRegisterMember): Promise<boolean> => {
  try {
    const response: any = await fetchData({
      url: `/member-subscriptions`,
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

export default subscribeService
