import isEmpty from '../isEmpty'

const isUserAvailable = (data: any[], serviceId: number): boolean => {
  if (data?.length > 0) {
    if (data[0]?.attributes?.member_subscriptions?.data.length > 0) {
      const subscribedList = data[0]?.attributes?.member_subscriptions?.data
      const subscribed = subscribedList.filter(
        (item: any) =>
          item.attributes.service.data.id === serviceId &&
          item.attributes.is_active === true
      )

      return isEmpty(subscribed)
    } else {
      return true
    }
  } else {
    return true
  }
}

export default isUserAvailable
