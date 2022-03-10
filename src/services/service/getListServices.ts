import { fetchData } from 'utils/fetch-data'

interface IParams {
  with_image?: boolean
}
const getListServices = async ({ with_image }: IParams): Promise<any> => {
  try {
    const apiUrl = with_image ? `/services?populate=image` : `/services`
    const response: any = await fetchData({
      url: apiUrl,
      method: 'GET',
    })
    const { data } = response.data
    return data
  } catch (error: any) {
    return error
  }
}

export default getListServices
