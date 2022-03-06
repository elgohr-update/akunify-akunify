import React, { useState, useEffect } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

import { useService } from 'hooks/index'
import { subscribtionDetail } from 'services/subscribtion'

import { validation } from 'utils/index'

const defaultClass = `py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded`
const errorClass = `py-4 px-3 border border-flamengo-60 focus:ring-flamengo-50 focus:border-flamengo-60 block w-full rounded`

interface IFormState {
  phone_number: string
  service_id: string
}
interface IError {
  phone_number: string | unknown
  service_id: string | unknown
}

const AdminContainer: React.FC = () => {
  const { services }: any = useService()
  const [formState, setFormState] = useState<IFormState>({
    phone_number: '',
    service_id: '',
  })
  const [errors, setErrors] = useState<IError>({
    phone_number: '',
    service_id: '',
  })
  const [details, setDetails] = useState<any>()
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    const isNotValid = checkIsValidInput()
    setDisabled(!isNotValid)
  }, [formState.phone_number, formState.service_id])

  const getSubscribtionDetail = async (): Promise<any> => {
    try {
      const response: any = await subscribtionDetail(formState)
      setDetails(response.data)
    } catch (error) {
      throw error
    }
  }

  const checkIsValidInput = (): boolean => {
    const phone_number = validation(
      'admin',
      'phone_number',
      formState.phone_number
    )
    const service_id = validation(
      'admin',
      'service_id',
      String(formState.service_id)
    )

    return (
      (phone_number !== '' && phone_number !== undefined) ||
      (service_id !== '' && service_id !== undefined)
    )
  }

  return (
    <section className="max-w-3xl my-12 m-auto pt-20">
      <div className="md:p-8 sm:p-6 xs:p-4">
        <div className="mt-2 border-2 border-turquoise-60 p-2 rounded-md">
          <div className="text-center my-2">
            <h3 className="main_title mb-4">Subscribtion Confirmation</h3>
          </div>

          <div className="px-6 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6 pb-8">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-md font-semibold text-gray-70"
              >
                No HP
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                  className={
                    errors.phone_number !== '' &&
                    errors.phone_number !== undefined
                      ? errorClass
                      : defaultClass
                  }
                  onChange={(e) => {
                    const { value } = e.target
                    setFormState((prevState) => ({
                      ...prevState,
                      phone_number: value.replace(/\D/g, ''),
                    }))
                    setErrors((prevState) => ({
                      ...prevState,
                      phone_number: validation('admin', 'phone_number', value),
                    }))
                  }}
                  value={formState.phone_number}
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-md font-semibold text-gray-70"
              >
                Layanan
              </label>
              <div className="mt-1 mb-0">
                <select
                  name="service_id"
                  id="service_id"
                  autoComplete="given-name"
                  className={
                    errors.service_id !== '' && errors.service_id !== undefined
                      ? errorClass
                      : defaultClass
                  }
                  onChange={(e) => {
                    const { value } = e.target
                    setFormState((prevState) => ({
                      ...prevState,
                      service_id: value,
                    }))
                    setErrors((prevState) => ({
                      ...prevState,
                      service_id: validation('admin', 'service_id', value),
                    }))
                  }}
                  value={formState.service_id}
                >
                  <option value="">Pilih layanan</option>
                  {services?.data?.length > 0 &&
                    services.data.map((service: any, i: number) => (
                      <option value={String(service.id)} key={`opt-serv-${i}`}>
                        {service?.attributes?.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-6">
              <button
                type="button"
                className="pricing_btn justify-between main-btn mt-0 xs:w-full md:w-1/5 sm:w-1/3 disabled:bg-turquoise-70 disabled:cursor-not-allowed"
                onClick={() => getSubscribtionDetail()}
                disabled={disabled}
              >
                <div className="flex flex-wrap justify-center items-center">
                  <SearchIcon className="h-5 w-5 text-white mr-2" /> Cari
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminContainer
