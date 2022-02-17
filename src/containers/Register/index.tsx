import Description from 'components/Register/Description'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { validation, getImageUrl, currencyFormater } from 'utils/index'

const defaultClass = `py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm`
const errorClass = `py-4 px-3 border border-flamengo-60 focus:ring-flamengo-50 focus:border-flamengo-60 block w-full rounded-sm`

type FormState = {
  service_id: number
  fullname: string
  email: string
  phone_number: string
}

type ErrorState = {
  fullname: string | undefined
  email: string | undefined
  phone_number: string | undefined
}
interface RegisterContainerProps {
  service: {
    id: number
    attributes: any
  }
}

const RegisterContainer: React.FC<RegisterContainerProps> = (props) => {
  const { service } = props
  const [formState, setFormState] = useState<FormState>({
    service_id: service?.id,
    fullname: '',
    email: '',
    phone_number: '',
  })
  const [error, setError] = useState<ErrorState>({
    fullname: '',
    email: '',
    phone_number: '',
  })
  const [isAgree, setIsAgree] = useState<boolean>(false)
  const [isDisable, setIsDisable] = useState<boolean>(true)
  const [showMore, setShowMore] = useState<boolean>(false)

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      service_id: service?.id,
    }))
  }, [service?.id])

  useEffect(() => {
    const isNotValid = checkIsValidInput()
    setIsDisable(isNotValid || !isAgree)
  }, [formState.email, formState.phone_number, formState.fullname, isAgree])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    const isPhoneField = name === 'phone_number'
    const phone = isPhoneField ? value.replace(/^0+/, '') : value

    setFormState((prevState) => ({
      ...prevState,
      [name]: isPhoneField ? phone : value,
    }))

    setError((prevState) => ({
      ...prevState,
      [name]: validation('register', name, isPhoneField ? '0' + phone : value),
    }))
  }

  const checkIsValidInput = (): boolean => {
    const fullname = validation('register', 'fullname', formState.fullname)
    const email = validation('register', 'email', formState.email)
    const phone_number = validation(
      'register',
      'phone_number',
      '0' + formState.phone_number
    )

    return (
      (fullname !== '' && fullname !== undefined) ||
      (email !== '' && email !== undefined) ||
      (phone_number !== '' && phone_number !== undefined)
    )
  }

  const handleSubmitRegister = () => {
    console.log('isDisable', isDisable)
  }

  return (
    <section className="max-w-3xl my-12 m-auto">
      <div className="p-8">
        <div className="section_title pb-9">
          <h1 className="main_title mb-4">Daftar layanan Akunify</h1>
          <h5 className="sub_title border-b">
            Silahkan isi terlebih dahulu sebelum melakukan pemesanan.
          </h5>
        </div>
        <div className="my-4">
          <div className="flex flex-wrap justify-between items-center pr-1">
            <h5 className="text-turquoise-90">Layanan yang dipesan</h5>
            {/* <p className="text-turquoise-50 cursor-pointer text-sm">Ubah paket</p> */}
          </div>
          <div className="rounded-md p-6 shadow-md mt-4 border">
            <div className="flex flex-wrap">
              <div className="w-1/4 p-2 text-center">
                <img
                  src={getImageUrl(service?.attributes?.image, 'large')}
                  alt="Layanan image"
                />
              </div>
              <div className="w-3/4 p-2">
                <h6>{service?.attributes.name}</h6>
                <p className="font-bold text-gray-70">
                  {currencyFormater(service?.attributes.price)}
                </p>
              </div>
            </div>

            <Description
              isShow={showMore}
              content={service?.attributes?.description}
              handleChangeShow={() => setShowMore(!showMore)}
            />

            <div className="flex flex-wrap justify-between mt-2">
              <p className="font-semibold text-turquoise-90">
                Total pembayaran
              </p>
              <p className="text-turquoise-90">
                {currencyFormater(service?.attributes.price)}/bulan
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h5 className="text-turquoise-90">Informasi Pengguna</h5>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-70"
              >
                Nomor Whatsapp (Pastikan nomor sudah benar dan aktif)
              </label>
              <div className="mt-1 flex">
                <span
                  className={`inline-flex items-center px-3 rounded-l-md ${
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
                      ? errorClass
                      : defaultClass
                  }
                  onChange={handleChangeInput}
                  value={formState.phone_number}
                />
              </div>
              {error.phone_number !== '' &&
                error.phone_number !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">
                    {error.phone_number}
                  </span>
                )}
            </div>
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
                  onChange={handleChangeInput}
                  value={formState.email}
                />
                {error.email !== '' && error.email !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">
                    {error.email}
                  </span>
                )}
              </div>
            </div>
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
                  name="fullname"
                  id="fullname"
                  autoComplete="given-name"
                  className={
                    error.fullname !== '' && error.fullname !== undefined
                      ? errorClass
                      : defaultClass
                  }
                  onChange={handleChangeInput}
                  value={formState.fullname}
                />
                {error.fullname !== '' && error.fullname !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">
                    {error.fullname}
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
                    defaultChecked={isAgree}
                    onChange={(e) => {
                      setIsAgree(e.target.checked)
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
                disabled={isDisable}
              >
                Daftar layanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterContainer
