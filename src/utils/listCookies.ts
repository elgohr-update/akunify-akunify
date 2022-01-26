import cookieKey from 'constants/cookie'

/**
 * List of cookies that will be deleted if the token is invalid
 * or expired or gets an error unauthorized
 */
export const listCookies = [
  cookieKey.IS_SET_TO_ANONYM,
  cookieKey.MEDICAL_DOCUMENT_CURRENT_STEP,
  cookieKey.USER_TOKEN,
  cookieKey.REFRESH_TOKEN,
  cookieKey.USER_SECONDARY_ID,
  cookieKey.VERIFICATION_IDENTITY_CURRENT_STEP,
  cookieKey.ONBOARDING_FINISH_STATUS,
  cookieKey.EXTERNAL_ID,
  cookieKey.SHA256_PHONE_NUMBER,
  cookieKey.SHA256_EMAIL,
  cookieKey.TOKEN_EXPIRATION,
]
