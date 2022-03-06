import { fetchData } from 'utils/fetch-data'

interface IParams {
  service_id: number | string
  short_url: string
}
const getServiceDetail = async ({
  service_id,
  short_url,
}: IParams): Promise<any> => {
  try {
    const response: any = await fetchData({
      url: `/services/${service_id}?populate=image`,
      method: 'GET',
    })
    const { data } = response
    if (data?.data?.attributes?.short_url === short_url) {
      return {
        status: 200,
        data: data?.data,
      }
    } else {
      return {
        status: 404,
        data: null,
      }
    }
  } catch (error: any) {
    return {
      status: error?.response?.status,
      data: null,
    }
  }
}

export default getServiceDetail
