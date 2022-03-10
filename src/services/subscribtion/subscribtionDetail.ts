import { fetchData } from 'utils/fetch-data'

interface IRegisterMember {
  phone_number: string | number
  service_id: string | number
}

const subscribtionDetail = async ({
  phone_number,
  service_id,
}: IRegisterMember): Promise<boolean> => {
  try {
    const response: any = await fetchData({
      url: `/member-subscriptions?populate=service,member,group&filters[is_unsubscribe][$eq]=false&filters[member][phone_number][$eq]=${phone_number}&filters[service][id][$eq]=${service_id}&sort=id:desc&pagination[pageSize]=1`,
      method: 'GET',
    })

    return response
  } catch (error) {
    throw error
  }
}

export default subscribtionDetail
