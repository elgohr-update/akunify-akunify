import React, { useState } from 'react'

import { NotificationModal } from 'components/Commons'
import {
  SearchMember,
  Unsubscribe,
  NewSubscribtion,
  RenewSubscribtion,
} from 'components/Admin'

import { subscribtionDetail } from 'services/subscribtion'

enum Status {
  idle,
  subscribe,
  unsubscribe,
  renew,
}

type ErrorMessageState = {
  show: boolean
  title: string
  type: 'error' | 'success' | 'warning'
  message: string
}

const AdminContainer: React.FC = () => {
  const [notification, setNotification] = useState<ErrorMessageState>({
    show: false,
    title: '',
    type: 'error',
    message: '',
  })
  const [member, setMember] = useState<any>({})
  const [status, setStatus] = useState<keyof typeof Status>('idle')
  const [phone, setPhone] = useState<string>('')

  const closeNotification = (): void => {
    setNotification({ show: false, type: 'success', title: '', message: '' })
  }

  const handleSearchMember = async (data: any): Promise<any> => {
    try {
      const response: any = await subscribtionDetail(data)
      const member = response?.data?.data
      if (member.length) {
        setPhone(data.phone_number)
        setMember(member[0])
        setStatus(member[0]?.attributes?.is_active ? 'renew' : 'subscribe')
      } else {
        setNotification({
          show: true,
          type: 'error',
          title: 'Oops!',
          message: 'Data member tidak ditemukan!',
        })
      }
    } catch (error) {
      throw error
    }
  }

  const handleChangeStatus = (status: keyof typeof Status): void => {
    setStatus(status)
  }

  const resetConfirmation = (): void => {
    setStatus('idle')
    setMember({})
  }

  const showNotification = (message: string, type: string) => {
    setNotification({
      show: true,
      type: type === 'error' ? 'error' : 'success',
      title: type === 'error' ? 'Oops!' : 'Success!',
      message: message,
    })
  }

  return (
    <section className="max-w-3xl my-12 m-auto pt-20">
      <div className="md:p-8 sm:p-6 xs:p-4">
        <div className="mt-2 border-2 border-turquoise-60 p-2 rounded-md">
          <div className="text-center my-2">
            <h3 className="main_title mb-4">Subscribtion Confirmation</h3>
          </div>

          <SearchMember
            handleSubmit={(data) => handleSearchMember(data)}
            showRadio={member?.attributes?.is_active || false}
            onChangeStatus={(status: keyof typeof Status) =>
              handleChangeStatus(status)
            }
            status={status}
          />

          {status === 'subscribe' && (
            <NewSubscribtion
              member={member}
              handleReset={() => resetConfirmation()}
              showNotificationModal={(msg: string, type: string) =>
                showNotification(msg, type)
              }
              phone={phone}
            />
          )}
          {status === 'renew' && (
            <RenewSubscribtion
              member={member}
              handleReset={() => resetConfirmation()}
              showNotificationModal={(msg: string, type: string) =>
                showNotification(msg, type)
              }
              phone={phone}
            />
          )}
          {status === 'unsubscribe' && (
            <Unsubscribe
              member={member}
              handleReset={() => resetConfirmation()}
              showNotificationModal={(msg: string, type: string) =>
                showNotification(msg, type)
              }
              phone={phone}
            />
          )}
        </div>
      </div>

      <NotificationModal
        open={notification.show}
        title={notification.title}
        type={notification.type}
        message={notification.message}
        setOpen={() => closeNotification()}
      />
    </section>
  )
}

export default AdminContainer
