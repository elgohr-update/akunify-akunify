import React, { useState, useEffect } from 'react'

import { sendWaMessage } from 'services/external/whatsapp'

import { fetchData } from 'utils/fetch-data'
import { decryptData } from 'utils/encrypt'

// Constant
import watemplate from 'constants/watemplate'

interface IRenewSubscribe {
  member: any
  handleReset: () => void
  showNotificationModal: (msg: string, type: string) => void
  phone: string
}

interface IFormUnsubscribe {
  amount: string | number
  member_subscription: number
  transaction_date: string
  transaction_type: string
  is_active: boolean
  is_unsubscribe: boolean
}

const Unsubscribe: React.FC<IRenewSubscribe> = ({
  member,
  handleReset,
  showNotificationModal,
  phone,
}) => {
  const [formData, setFormData] = useState<IFormUnsubscribe>({
    amount: 0,
    member_subscription: member.id,
    transaction_date: '',
    transaction_type: 'unsubscribe',
    is_active: false,
    is_unsubscribe: true,
  })

  useEffect(() => {
    setFormData({
      amount: 0,
      member_subscription: member.id,
      transaction_date: getCurrentDate(),
      transaction_type: 'unsubscribe',
      is_active: false,
      is_unsubscribe: true,
    })
  }, [member.id])

  const getCurrentDate = (): string => {
    const today = new Date()
    return today.toISOString()
  }

  const handleSubmitUnSubscribtion = async () => {
    try {
      await fetchData({
        url: `/transactions`,
        method: 'POST',
        data: {
          data: {
            amount: formData.amount,
            member_subscription: formData.member_subscription,
            transaction_date: formData.transaction_date,
            transaction_type: formData.transaction_type,
          },
        },
        auth: {
          token: process.env.BEARER_TOKEN,
        },
      })

      await fetchData({
        url: `/member-subscriptions/${formData.member_subscription}`,
        method: 'PUT',
        data: {
          data: {
            is_active: false,
            is_unsubscribe: true,
          },
        },
        auth: {
          token: process.env.BEARER_TOKEN,
        },
      })
      sendWaNotification()
      showNotificationModal(
        'Nah mantab sukses nih pak! balik kerja lagi sana',
        'success'
      )
      handleReset()
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
    const message = watemplate.unsubscribe
      .replace('{member_name}', userData?.name)
      .replaceAll(
        '{service_name}',
        member?.attributes?.service?.data?.attributes?.name
      )

    await sendWaMessage(phone, message)
  }

  return (
    <div className="px-4 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6 pb-8">
      <div className="sm:col-span-6">
        <div className="flex flex-wrap justify-center mt-4">
          <button
            id="submit-confirm"
            type="button"
            className="rounded text-white bg-turquoise-60 p-2 mx-1"
            onClick={() => handleSubmitUnSubscribtion()}
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

export default Unsubscribe
