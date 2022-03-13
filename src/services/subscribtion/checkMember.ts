import { fetchData } from 'utils/fetch-data'

const checkMember = async (phone_number: string): Promise<boolean> => {
  try {
    const response: any = await fetchData({
      url: `members?populate=member_subscriptions.service&filters[phone_number][$eq]=0${phone_number}`,
      method: 'GET',
    })
    const { data } = response.data
    return data
  } catch (error) {
    throw error
  }
}

export default checkMember
