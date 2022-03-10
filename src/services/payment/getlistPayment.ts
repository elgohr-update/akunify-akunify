import { fetchData } from 'utils/fetch-data'

interface IParams {
  with_image?: boolean
}
const getListPayment = async ({ with_image }: IParams): Promise<any> => {
  '/payment-options?populate=image&filters[is_active][$eq]=true'
  const apiUrl = with_image
    ? `/payment-options?populate=image&filters[is_active][$eq]=true`
    : `/payment-options?filters[is_active][$eq]=true`
  try {
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

export default getListPayment
