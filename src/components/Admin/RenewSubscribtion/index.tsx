import React, { useState, useEffect } from 'react'

import { getListPayment } from 'services/payment'
import { sendWaMessage } from 'services/external/whatsapp'

// Constant
import watemplate from 'constants/watemplate'

import { formatedDate, checkHasEmptyValue } from 'utils/index'
import { decryptData } from 'utils/encrypt'
import { fetchData } from 'utils/fetch-data'

interface IRenewSubscribe {
  member: any
  handleReset: () => void
  showNotificationModal: (msg: string, type: string) => void
  phone: string
}

interface IFormRenew {
  amount: string
  payment_option: number
  member_subscription: number
  transaction_date: string
  transaction_type: string
  start_date: string
  end_date: string
}

const RenewSubscribtion: React.FC<IRenewSubscribe> = ({
  member,
  handleReset,
  showNotificationModal,
  phone,
}) => {
  const [payments, setPayments] = useState<any[]>([])
  const [formData, setFormData] = useState<IFormRenew>({
    amount: member?.attributes?.service?.data?.attributes?.price,
    payment_option: 0,
    member_subscription: member.id,
    transaction_date: '',
    transaction_type: 'renew',
    start_date: member?.attributes?.end_date,
    end_date: '',
  })

  useEffect(() => {
    getPaymentOption()
  }, [])

  useEffect(() => {
    setFormData({
      amount: member?.attributes?.service?.data?.attributes?.price,
      payment_option: 0,
      member_subscription: member.id,
      transaction_date: '',
      transaction_type: 'renew',
      start_date: member?.attributes?.end_date,
      end_date: '',
    })
  }, [member.id])

  const getPaymentOption = async (): Promise<any> => {
    try {
      const response = await getListPayment({ with_image: false })
      setPayments(response)
    } catch (error) {
      throw error
    }
  }

  const handleChangeInput = (event: any) => {
    const { name, value } = event.target
    setFormData(() => ({
      ...formData,
      [name]: value,
    }))
  }

  const handleSubmitSubscribtion = async () => {
    try {
      if (checkHasEmptyValue(formData)) {
        showNotificationModal('Lengkapi datanya dulu dong pak!', 'error')
      } else {
        await fetchData({
          url: `/transactions`,
          method: 'POST',
          data: {
            data: {
              amount: formData.amount,
              payment_option: formData.payment_option,
              member_subscription: formData.member_subscription,
              transaction_date: formData.transaction_date,
              transaction_type: formData.transaction_type,
            },
          },
          auth: {
            token: process.env.NEXT_PUBLIC_BEARER_TOKEN,
          },
        })

        await fetchData({
          url: `/member-subscriptions/${formData.member_subscription}`,
          method: 'PUT',
          data: {
            data: {
              start_date: formData.start_date,
              end_date: formData.end_date,
            },
          },
          auth: {
            token: process.env.NEXT_PUBLIC_BEARER_TOKEN,
          },
        })
        sendWaNotification()
        showNotificationModal(
          'Nah mantab sukses nih pak! balik kerja lagi sana',
          'success'
        )
        handleReset()
      }
    } catch (error: any) {
      const errorCode = error?.response?.status || '200'
      showNotificationModal(
        `Waduh coba lagi pak kayanya ada yg salah, error code: ${errorCode}`,
        'error'
      )
    }
  }

  const sendWaNotification = async (): Promise<any> => {
    const userData = decryptData(
      member?.attributes?.member?.data?.attributes?.encrypted_id
    )
    const message = watemplate.successPayment
      .replace('{member_name}', userData?.name)
      .replace('{active_date}', formatedDate(formData.end_date))
      .replaceAll(
        '{service_name}',
        member?.attributes?.service?.data?.attributes?.name
      )

    await sendWaMessage(phone, message)
  }

  return (
    <div className="px-4 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6 pb-8">
      <div className="sm:col-span-6">
        <label
          htmlFor="nama_pelanggan"
          className="block text-md font-semibold text-gray-70"
        >
          Nama Pelanggan
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="nama_pelanggan"
            id="nama_pelanggan"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={
              member?.attributes?.member?.data?.attributes?.name_alias || ''
            }
            disabled
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="subscribtion_id"
          className="block text-md font-semibold text-gray-70"
        >
          Subscribtion ID
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={member?.id || ''}
            disabled
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="subscribtion_id"
          className="block text-md font-semibold text-gray-70"
        >
          Group
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="group"
            id="group"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={member?.attributes?.group?.data?.attributes?.name || ''}
            disabled
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="start_date"
          className="block text-md font-semibold text-gray-70"
        >
          Start Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="start_date"
            id="start_date"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={formData.start_date}
            disabled
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="end_date"
          className="block text-md font-semibold text-gray-70"
        >
          End Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="end_date"
            id="end_date"
            autoComplete="given-name"
            className="input-form-sm-default"
            onChange={handleChangeInput}
            value={formData.end_date}
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="payment_option"
          className="block text-md font-semibold text-gray-70"
        >
          Payment Method
        </label>
        <div className="mt-1">
          <select
            id="payment_option"
            name="payment_option"
            autoComplete="given-name"
            className="input-form-sm-default"
            onChange={handleChangeInput}
            value={formData.payment_option}
          >
            <option value="0">Select payment</option>
            {payments?.length > 0 &&
              payments?.map((item: any, i: number) => (
                <option value={item.id} key={`payment-opt-${i}`}>
                  {item.attributes.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="transaction_date"
          className="block text-md font-semibold text-gray-70"
        >
          Transaction Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="transaction_date"
            id="transaction_date"
            autoComplete="given-name"
            className="input-form-sm-default"
            onChange={handleChangeInput}
            value={formData.transaction_date}
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <div className="flex flex-wrap justify-center mt-4">
          <button
            id="submit-confirm"
            type="button"
            className="rounded text-white bg-turquoise-60 p-2 mx-1"
            onClick={() => handleSubmitSubscribtion()}
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded text-turquoise-60 bg-white p-2 mx-1 border border-turquoise-60"
            onClick={() => handleReset()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default RenewSubscribtion
