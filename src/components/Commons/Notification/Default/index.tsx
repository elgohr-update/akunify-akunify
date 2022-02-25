import React from 'react'
import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

interface INotification {
  type: 'warning' | 'error' | 'success'
  message: string
}

const Notification: React.FC<INotification> = ({ type, message }) => {
  const attributes = {
    warning: {
      color: 'yellow-300',
      icon: <InformationCircleIcon className="h-8 w-8 mr-2 text-yellow-300" />,
    },
    error: {
      color: 'flamengo-40',
      icon: <ExclamationIcon className="h-8 w-8 mr-2 text-flamengo-40" />,
    },
    success: {
      color: 'turquoise-40',
      icon: <CheckCircleIcon className="h-8 w-8 mr-2 text-turquoise-40" />,
    },
  }
  return (
    <div
      className={`text-center font-light p-4 border border-${attributes[type].color} rounded-lg flex flex-wrap items-center justify-center`}
    >
      {attributes[type].icon}{' '}
      <p className={`text-${attributes[type].color}`}>{message}</p>
    </div>
  )
}

export default Notification
