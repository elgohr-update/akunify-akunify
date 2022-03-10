import React, { useState, useEffect } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

import { getListServices } from 'services/service'

import { validation } from 'utils/index'

interface ISearchMember {
  handleSubmit: (data: any) => void
  showRadio: boolean
  onChangeStatus: (status: any) => void
  status: string
}

interface IFormState {
  phone_number: string
  service_id: string
}
interface IError {
  phone_number: string | undefined
  service_id: string | undefined
}

const SearchMember: React.FC<ISearchMember> = ({
  handleSubmit,
  onChangeStatus,
  showRadio,
  status,
}) => {
  const [services, setServices] = useState<any[]>([])
  const [formState, setFormState] = useState<IFormState>({
    phone_number: '',
    service_id: '',
  })
  const [errors, setErrors] = useState<IError>({
    phone_number: '',
    service_id: '',
  })

  useEffect(() => {
    getServicesList()
  }, [])

  const getServicesList = async () => {
    try {
      const response = await getListServices({ with_image: false })
      setServices(response)
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

    setErrors({
      phone_number: phone_number,
      service_id: service_id,
    })

    return !(
      (phone_number !== '' && phone_number !== undefined) ||
      (service_id !== '' && service_id !== undefined)
    )
  }

  const handleSubmitSearch = (): void => {
    const isValid = checkIsValidInput()

    if (isValid) {
      handleSubmit(formState)
    } else {
    }
  }

  return (
    <div className="px-4 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6 pb-8">
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          No HP <span className="text-flamengo-60">*</span>
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            autoComplete="given-name"
            className={
              errors.phone_number !== '' && errors.phone_number !== undefined
                ? 'input-form-sm-error'
                : 'input-form-sm-default'
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
        {errors.phone_number !== '' && errors.phone_number !== undefined && (
          <span className="font-light text-xs text-flamengo-60">
            {errors.phone_number}
          </span>
        )}
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Layanan <span className="text-flamengo-60">*</span>
        </label>
        <div className="mt-1 mb-0">
          <select
            name="service_id"
            id="service_id"
            autoComplete="given-name"
            className={
              errors.service_id !== '' && errors.service_id !== undefined
                ? 'input-form-sm-error'
                : 'input-form-sm-default'
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
            {services?.length > 0 &&
              services.map((service: any, i: number) => (
                <option value={String(service.id)} key={`opt-serv-${i}`}>
                  {service?.attributes?.name}
                </option>
              ))}
          </select>
          {errors.service_id !== '' && errors.service_id !== undefined && (
            <span className="font-light text-xs text-flamengo-60">
              {errors.service_id}
            </span>
          )}
        </div>
      </div>
      {status === 'idle' && (
        <div className="sm:col-span-6">
          <button
            type="button"
            className=" bg-white py-1 font-light px-3 text-turquoise-60 border border-turquoise-60 rounded-sm justify-between mt-0 disabled:cursor-not-allowed"
            onClick={() => handleSubmitSearch()}
          >
            <div className="flex flex-wrap justify-center items-center">
              <SearchIcon className="h-5 w-5 text-turquoise-60 mr-2" /> Cari
            </div>
          </button>
        </div>
      )}

      {showRadio && (
        <div className="sm:col-span-6">
          <div className="flex flex-wrap justify-center">
            <div className="align-middle mr-6">
              <input
                className="h-4 w-4 border-gray-40 transition duration-200 mr-2"
                type="radio"
                name="type"
                id="renewal"
                value="renew"
                onChange={() => onChangeStatus('renew')}
                defaultChecked
              />
              <label
                className="inline-block text-gray-70 font-medium"
                htmlFor="renewal"
              >
                Renewal
              </label>
            </div>
            <div className="align-middle">
              <input
                className="h-4 w-4 border-gray-40 transition duration-200 mr-2 pt-1"
                type="radio"
                name="type"
                id="unsubscribe"
                value="unsubscribe"
                onChange={() => onChangeStatus('unsubscribe')}
              />
              <label
                className="inline-block text-gray-70 font-medium pb-3"
                htmlFor="unsubscribe"
              >
                Unsubscribe
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchMember
