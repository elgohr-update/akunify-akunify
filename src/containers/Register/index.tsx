import React, { useEffect, useState } from 'react'

import {
  validation,
  getImageUrl,
  currencyFormater
} from 'utils/index'

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
    phone_number: ''
  })
  const [error, setError] = useState<ErrorState>({
    fullname: '',
    email: '',
    phone_number: ''
  })

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      service_id: service?.id
    }))
  }, [service?.id])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    const isPhoneField = name === 'phone_number'
    const phone = isPhoneField ? value.replace(/^0+/, '') : value

    setFormState((prevState) => ({
      ...prevState,
      [name]: isPhoneField ? phone : value
    }))

    setError((prevState) => ({
      ...prevState,
      [name]: validation(
        'register',
        name,
        isPhoneField ? '0'+phone : value
      )
    }))
  }

  const checkIsValidInput = (): boolean => {
    setError({
      fullname: validation('register', 'fullname', formState.fullname),
      email: validation('register', 'email', formState.email),
      phone_number: validation('register', 'phone_number', '0'+formState.phone_number)
    })

    return (error.fullname !== '' && error.fullname !== undefined) || (error.email !== '' && error.email !== undefined) || (error.phone_number !== '' && error.phone_number !== undefined)
  }

  const handleSubmitRegister = () => {
    const isValid = checkIsValidInput()
  }

  return (
    <section className="max-w-3xl my-12 m-auto">
      <div className="p-16">
        <div className="section_title pb-9">
          <h1 className="main_title mb-4">Daftar layanan Akunify</h1>
          <h5 className="sub_title border-b">Silahkan isi terlebih dahulu sebelum melakukan pemesanan.</h5>
        </div>
        <div className="my-4">
          <div className="flex flex-wrap justify-between items-center pr-1">
            <h5 className="text-turquoise-90">Layanan yang dipesan</h5>
            <p className="text-turquoise-50 cursor-pointer text-sm">Ubah paket</p>
          </div>
          <div className="rounded-md p-6 shadow-md mt-4 border">
            <div className="flex flex-wrap border-b mb-4 py-4">
              <div className="w-1/4 p-2 text-center">
                <img src={ getImageUrl(service?.attributes?.image, 'thumbnail') } alt="Layanan image" />
              </div>
              <div className="w-3/4 p-2">
                <h6>{ service?.attributes.name }</h6>
                <p className="font-bold text-gray-70">{ currencyFormater(service?.attributes.price) }</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>Total pembayaran</div>
              <div>{ currencyFormater(service?.attributes.price) }</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Pilih masa berlaku
              </label>
              <div className="mt-1">
                <select
                  name="masa_berlaku"
                  className="py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm"
                  disabled
                >
                  <option value="1">1 Bulan</option>
                  <option value="1">6 Bulan</option>
                  <option value="1">12 Bulan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h5 className="text-turquoise-90">Informasi Pengguna</h5>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoComplete="given-name"
                  className={error.fullname !== '' && error.fullname !== undefined ? errorClass : defaultClass }
                  onChange={handleChangeInput}
                  value={formState.fullname}
                />
                { error.fullname !== '' && error.fullname !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">{ error.fullname }</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className={error.email !== '' && error.email !== undefined ? errorClass : defaultClass }
                  onChange={handleChangeInput}
                  value={formState.email}
                />
                { error.email !== '' && error.email !== undefined && (
                  <span className="font-light text-xs text-flamengo-60">{ error.email }</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Nomor whatsapp (Pastikan nomor sudah benar dan aktif)
              </label>
              <div className="mt-1 flex">
                <span
                  className={`inline-flex items-center px-3 rounded-l-md ${error.phone_number !== '' && error.phone_number !== undefined ? 'bg-flamengo-60' : 'bg-turquoise-50'} text-m-30 text-white font-bold`}
                >
                  +62
                </span>
                <input
                  type="string"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                  className={error.phone_number !== '' && error.phone_number !== undefined ? errorClass : defaultClass }
                  onChange={handleChangeInput}
                  value={formState.phone_number}
                />
              </div>
              { error.phone_number !== '' && error.phone_number !== undefined && (
                <span className="font-light text-xs text-flamengo-60">{ error.phone_number }</span>
              )}
            </div>
            <div className="sm:col-span-6">
              <div className="mt-1 flex">
                <div className="flex items-center h-5">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    className="focus:ring-turquoise-50 h-4 w-4 border border-turquoise-40 rounded"
                  />
                  <label htmlFor="agreement" className="font-medium text-gray-70 ml-2">
                    Saya menyetujui aturan yang dibuat oleh Akunify.com
                  </label>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <button
                type="button"
                className="main-btn pricing_btn w-full"
                onClick={() => handleSubmitRegister()}
              >
                Lanjut ke pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterContainer