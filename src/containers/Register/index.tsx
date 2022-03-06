import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// Components
import { NotificationModal } from 'components/Commons'
import OrderDetail from 'components/Register/OrderDetail'

// Utils
import {
  isEmpty,
  validation,
  getUserDetail,
  getInitialName,
  isUserAvailable,
} from 'utils/index'

// Services
import { sendWaMessage } from 'services/external/whatsapp'
import {
  checkMember,
  registerMember,
  subscribeService,
} from 'services/subscribtion'

const defaultClass = `py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded`
const errorClass = `py-4 px-3 border border-flamengo-60 focus:ring-flamengo-50 focus:border-flamengo-60 block w-full rounded`

type ErrorState = {
  name: string | undefined
  email: string | undefined
  phone_number: string | undefined
}

type ErrorMessageState = {
  show: boolean
  title: string
  type: 'error' | 'success' | 'warning'
  message: string
}
interface RegisterContainerProps {
  service: {
    id: number
    attributes: any
  }
}

interface IUserDetail {
  is_checked: boolean
  is_available: boolean
  service_id: number
  member_id: number
  name: string
  name_alias: string
  email: string
  phone_number: string
  is_agreed: boolean
}

const initialUserDetail = {
  is_checked: false,
  is_available: false,
  service_id: 0,
  member_id: 0,
  name: '',
  name_alias: '',
  email: '',
  phone_number: '',
  is_agreed: false,
}

const RegisterContainer: React.FC<RegisterContainerProps> = (props) => {
  const { service } = props
  const router = useRouter()
  const [userDetail, setUserDetail] = useState<IUserDetail>(initialUserDetail)
  const [error, setError] = useState<ErrorState>({
    name: '',
    email: '',
    phone_number: '',
  })
  const [isDisable, setIsDisable] = useState<boolean>(true)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [notification, setNotification] = useState<ErrorMessageState>({
    show: false,
    title: '',
    type: 'error',
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setUserDetail((prevState) => ({
      ...prevState,
      service_id: service?.id || 0,
    }))
  }, [service?.id])

  useEffect(() => {
    const isNotValid = checkIsValidInput()
    if (userDetail.member_id > 0 && userDetail.is_agreed) {
      setIsDisable(false)
    } else {
      setIsDisable(isNotValid || !userDetail.is_agreed)
    }
  }, [
    userDetail.email,
    userDetail.phone_number,
    userDetail.name,
    userDetail.is_agreed,
    userDetail.member_id,
  ])

  const closeNotification = (): void => {
    setNotification({ show: false, type: 'success', title: '', message: '' })
  }

  const checkIsValidInput = (): boolean => {
    const fullname = validation('register', 'fullname', userDetail.name)
    const email = validation('register', 'email', userDetail.email)
    const phone_number = validation(
      'register',
      'phone_number',
      '0' + userDetail.phone_number
    )

    return (
      (fullname !== '' && fullname !== undefined) ||
      (email !== '' && email !== undefined) ||
      (phone_number !== '' && phone_number !== undefined)
    )
  }

  const clearAttributes = (): void => {
    setUserDetail((prevState) => ({
      ...prevState,
      phone_number: '',
      member_id: 0,
      is_checked: false,
      is_available: false,
      name: '',
      email: '',
      name_alias: '',
      is_agreed: false,
    }))
  }

  const showErrorMessage = (): void => {
    setNotification({
      show: true,
      type: 'error',
      title: 'Oops!',
      message: 'Registerasi layanan gagal, silahkan coba lagi nanti!',
    })
  }

  const searchUserByPhone = async (): Promise<any> => {
    setUserDetail((prevState) => ({
      ...prevState,
      is_checked: true,
    }))
    try {
      const response: any = await checkMember(userDetail.phone_number)

      const isAvailable = isUserAvailable(response, service?.id)
      const userData: any = getUserDetail(response)

      // check user status
      if (!isEmpty(userData)) {
        // if member already registered
        setUserDetail((prevState) => ({
          ...prevState,
          member_id: userData.member_id,
          name_alias: userData.name_alias,
          is_available: isAvailable,
        }))
      } else {
        // if member not registered
        setUserDetail((prevState) => ({
          ...prevState,
          member_id: 0,
          is_available: isAvailable,
        }))
      }
      setNotification({
        show: !isAvailable,
        type: 'error',
        title: 'Akun sudah terdaftar!',
        message:
          'Anda sudah berlangganan layanan berikut. Silahkan gunakan nomor handphone lain',
      })
    } catch (error) {
      setUserDetail((prevState) => ({
        ...prevState,
        is_available: false,
      }))
    }
  }

  const handleSubmitRegister = async () => {
    setLoading(true)
    try {
      if (userDetail.member_id > 0) {
        await submitService(userDetail.member_id, userDetail.service_id)
      } else {
        const memberResponse: any = await registerMember({
          name: userDetail.name,
          name_alias: userDetail.name_alias,
          email: userDetail.email,
          phone_number: `0${userDetail.phone_number}`,
        })

        if (memberResponse.status === 200) {
          await submitService(
            memberResponse.data.data.id,
            userDetail.service_id
          )
        }
      }
    } catch (error) {
      showErrorMessage()
      setLoading(false)
    }
  }

  const submitService = async (memberId: number, serviceId: number) => {
    try {
      const response: any = await subscribeService({
        member_id: memberId,
        service_id: serviceId,
      })

      if (response.status === 200) {
        setNotification({
          show: true,
          type: 'success',
          title: 'Success!',
          message:
            'Registerasi layanan berhasil, silahkan cek pesan Whatsapp anda!',
        })
        setLoading(false)
        sendWaNotification()
        clearAttributes()

        //redirect to thanks page
        const timer = setTimeout(
          () => router.push('/register/thankyou'),
          3 * 1000
        )
        return () => {
          clearTimeout(timer)
        }
      } else {
        showErrorMessage()
        setLoading(false)
      }
    } catch (error) {
      showErrorMessage()
      setLoading(false)
    }
  }

  const sendWaNotification = (): void => {
    sendWaMessage(`0${userDetail.phone_number}`, 'halo cok bisa gak nih cok')
  }

  return (
    <section className="max-w-3xl my-12 m-auto">
      <div className="p-8">
        <div className="section_title pb-9">
          <h1 className="main_title mb-4">Daftar layanan Akunify</h1>
          <h5 className="sub_title border-b">
            Silahkan lengkapi data berikut.
          </h5>
        </div>

        <OrderDetail
          service={service}
          showMore={showMore}
          setShowMore={(bool) => setShowMore(bool)}
        />

        <div className="mt-8">
          <h5 className="text-turquoise-90">Informasi Pengguna</h5>
          <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-70"
              >
                Nomor Whatsapp (Pastikan nomor sudah benar dan aktif)
              </label>
              <div className="mt-1 flex">
                <span
                  className={`inline-flex items-center px-3 rounded-l ${
                    error.phone_number !== '' &&
                    error.phone_number !== undefined
                      ? 'bg-flamengo-60'
                      : 'bg-turquoise-50'
                  } text-m-30 text-white font-bold`}
                >
                  +62
                </span>
                <input
                  type="string"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                  className={
                    error.phone_number !== '' &&
                    error.phone_number !== undefined
                      ? 'py-4 px-3 border border-flamengo-60 focus:ring-flamengo-50 focus:border-flamengo-60 block w-full rounded-r'
                      : 'py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-r'
                  }
                  onChange={(e) => {
                    const { value } = e.target
                    setUserDetail((prevState) => ({
                      ...prevState,
                      phone_number: value
                        .replace(/\D/g, '')
                        .replace(/(^0+)|(^62+)/, ''),
                    }))
                    setError((prevState) => ({
                      ...prevState,
                      phone_number: validation(
                        'register',
                        'phone_number',
                        '0' + value
                      ),
                    }))
                  }}
                  value={userDetail.phone_number}
                  disabled={userDetail.is_checked}
                />
              </div>
              {error.phone_number !== '' &&
                error.phone_number !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">
                    {error.phone_number}
                  </span>
                )}
            </div>

            {!userDetail.is_checked ? (
              <div className="sm:col-span-6 -mt-3">
                <button
                  type="button"
                  className="bg-turquoise-60 text-white p-2 rounded disabled:cursor-not-allowed disabled:bg-turquoise-70 text-sm"
                  onClick={() => searchUserByPhone()}
                  disabled={
                    userDetail.phone_number === '' ||
                    (error.phone_number !== '' &&
                      error.phone_number !== undefined)
                  }
                >
                  Lanjutkan
                </button>
              </div>
            ) : (
              <div className="sm:col-span-6 -mt-4">
                <button
                  className="text-turquoise-60 text-sm cursor-default"
                  onClick={() => clearAttributes()}
                >
                  Ganti nomor HP
                </button>
              </div>
            )}

            {userDetail.is_available && (
              <>
                {userDetail.member_id === 0 && (
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-70"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="given-name"
                        className={
                          error.email !== '' && error.email !== undefined
                            ? errorClass
                            : defaultClass
                        }
                        onChange={(e) => {
                          const { value } = e.target
                          setUserDetail((prevState) => ({
                            ...prevState,
                            email: value,
                          }))
                          setError((prevState) => ({
                            ...prevState,
                            email: validation('register', 'email', '0' + value),
                          }))
                        }}
                        value={userDetail.email}
                      />
                      {error.email !== '' && error.email !== undefined && (
                        <span className="font-light text-xs text-flamengo-60">
                          {error.email}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-70"
                  >
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className={
                        error.name !== '' && error.name !== undefined
                          ? errorClass
                          : defaultClass
                      }
                      onChange={(e) => {
                        const { value } = e.target
                        setUserDetail((prevState) => ({
                          ...prevState,
                          name: value,
                          name_alias: getInitialName(value),
                        }))
                        setError((prevState) => ({
                          ...prevState,
                          name: validation('register', 'name', value),
                        }))
                      }}
                      value={
                        userDetail.member_id > 0
                          ? userDetail.name_alias
                          : userDetail.name
                      }
                      disabled={userDetail.member_id > 0}
                    />
                    {error.name !== '' && error.name !== undefined && (
                      <span className="font-light text-xs text-flamengo-60">
                        {error.name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div className="mt-1 flex">
                    <div className="flex items-center h-5">
                      <input
                        id="agreement"
                        name="agreement"
                        type="checkbox"
                        className="focus:ring-turquoise-50 h-4 w-4 border border-turquoise-40 rounded"
                        defaultChecked={userDetail.is_agreed}
                        onChange={(e) => {
                          setUserDetail((prevState) => ({
                            ...prevState,
                            is_agreed: e.target.checked,
                          }))
                        }}
                      />
                      <label
                        htmlFor="agreement"
                        className="font-medium text-gray-70 ml-2"
                      >
                        Dengan mendaftar, saya menyetujui{' '}
                        <Link href="/tnc">
                          <a
                            className="text-blue-500"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Syarat dan Ketentuan
                          </a>
                        </Link>{' '}
                        yang berlaku di akunify.com
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <button
                    type="button"
                    className="main-btn pricing_btn w-full disabled:bg-turquoise-70 disabled:cursor-not-allowed"
                    onClick={() => handleSubmitRegister()}
                    disabled={isDisable || loading}
                  >
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <div
                          style={{ borderTopColor: 'transparent' }}
                          className="w-5 h-5 border-l-2 border-2 border-solid border-white rounded-full animate-spin mr-2"
                        ></div>
                        Harap tunggu . . .
                      </div>
                    ) : (
                      'Daftar Layanan'
                    )}
                  </button>
                </div>
              </>
            )}

            <NotificationModal
              open={notification.show}
              title={notification.title}
              type={notification.type}
              message={notification.message}
              setOpen={() => closeNotification()}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterContainer
