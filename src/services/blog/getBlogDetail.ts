import { fetchData } from 'utils/fetch-data'

interface IParams {
  slug: string
  with_image?: boolean
}
const getBlogDetail = async ({ slug, with_image }: IParams): Promise<any> => {
  try {
    const apiUrl = with_image
      ? `/blogs?filters[slug]=${slug}&populate=image`
      : `/blogs?filters[slug]=${slug}`
    const response: any = await fetchData({
      url: apiUrl,
      method: 'GET',
    })

    const { data } = response
    return {
      status: 200,
      data: data?.data[0],
    }
  } catch (error: any) {
    return {
      status: error?.response?.status,
      data: null,
    }
  }
}

export default getBlogDetail
