import { fetchData } from 'utils/fetch-data'

interface IParams {
  service_id: number | string
}

const getListGroup = async ({ service_id }: IParams): Promise<any> => {
  try {
    const response: any = await fetchData({
      url: `/groups?populate=service,member_subscriptions.member&filters[service][id][$eq]=1&filters[member_subscriptions][is_active][$eq]=true`,
      method: 'GET',
    })
    const { data = [] } = response.data
    const result: any[] = []

    // filter data if member is not more than max subscribtion & is_active true
    data.map((item: any) => {
      const max_member =
        item?.attributes?.service?.data?.attributes?.max_member || 0
      let subscribed = 0

      // check is member subscribe active
      if (item?.attributes?.member_subscriptions?.data?.length > 0) {
        item?.attributes?.member_subscriptions?.data.map((member: any) => {
          if (member.attributes.is_active) {
            subscribed++
          }
        })
      }

      if (subscribed < max_member) {
        result.push({
          id: item.id,
          name: item.attributes.name,
        })
      }
    })

    return result
  } catch (error: any) {
    return error
  }
}

export default getListGroup
