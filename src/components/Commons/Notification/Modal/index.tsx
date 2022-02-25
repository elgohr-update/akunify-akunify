import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { ExclamationIcon } from '@heroicons/react/outline'

interface INotifModal {
  open: boolean
  type: 'error' | 'success' | 'warning' | 'confirmation'
  title: string
  message: string
  buttonText?: string
  setOpen: (bool?: boolean) => void
}

const attribute = {
  error: {
    background: 'bg-red-100',
  },
  success: {
    background: 'bg-green-100',
  },
  warning: {
    background: 'bg-yellow-100',
  },
  confirmation: {
    background: 'bg-orange-100',
  },
}

const NotificationModal: React.FC<INotifModal> = ({
  open,
  type,
  title,
  message,
  buttonText,
  setOpen,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex justify-center min-h-screen pt-4 px-4 pb-200 items-center text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-1 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div
                  className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${attribute[type].background}`}
                >
                  {type === 'success' ? (
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <ExclamationIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{message}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-turquoise-60 text-base font-medium text-white hover:bg-turquoise-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise-50 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  {buttonText || 'Tutup'}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NotificationModal
