const getUserDetail = (data: any[]): Object => {
  if (data?.length > 0) {
    const user = data[0]
    if (user?.id > 0) {
      return {
        member_id: user.id,
        name_alias: user?.attributes?.name_alias,
        encrypted_id: user?.attributes?.encrypted_id,
      }
    } else {
      return true
    }
  } else {
    return {}
  }
}

export default getUserDetail
