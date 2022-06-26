import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SnackBar from 'my-react-snackbar'
import { DocumentDuplicateIcon } from '@heroicons/react/outline'

import { Image } from 'components/common'

import { getImageUrl, currencyFormater } from 'utils/index'

import { usePaymentOption } from 'hooks/index'
import useCopyToClipboard from 'hooks/copyClipboard'

interface ThanksContainerProps {
  service: {
    id: number
    attributes: any
  }
}

const Thankyou: React.FC<ThanksContainerProps> = ({ service }) => {
  const router = useRouter()
  const { paymentOptions }: any = usePaymentOption()
  const [value, copy] = useCopyToClipboard()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 2500)
      return () => clearTimeout(timer)
    }
  }, [open])

  const copyClipboard = (account: string) => {
    copy(account)
    setOpen(true)
  }

  console.group('service', paymentOptions)

  const handleClickHome = (): void => {
    router.push('/')
  }

  return (
    <>
      <SnackBar
        open={open}
        message={'Success copied to clipboard!'}
        position="top-center"
        color="#23D5D0"
        closeOnClick={false}
      />
      <div className="mt-20 mb-20 max-w-4xl m-auto md:p-12 sm:p-5 xs:p-5 text-center">
        <Image
          src={`/images/thankyou-page.svg`}
          alt={`thankyou-error-page`}
          className="max-w-100 mx-auto md:w-3/5 lg:w-3/5 sm:w-11/12 mb-10"
          withNext
          layout="responsive"
          width={100}
          height={80}
        />

        <p className="text-turquoise-80 text-sm md:text-base mt-6">
          Silahkan selesaikan pembayaran sesuai dengan tagihan yang dikirim
          melalui aplikasi Whatsapp kamu. Pembayaran kamu akan diverifikasi
          dalam waktu 1x24 Jam
        </p>

        <div className="text-left mt-10 border-t pt-5">
          <p className="font-bold text-lg text-turquoise-90 mb-2 flex items-center space-x-2">
            Total Pembayaran:{' '}
            <span className="text-turquoise-70 ml-2">
              {currencyFormater(service?.attributes?.price || 0)}
            </span>
            <DocumentDuplicateIcon
              className="h-4 text-turquoise-70"
              onClick={() => {
                copyClipboard(service?.attributes?.price || 0)
              }}
            />
          </p>
          <p className="font-semibold text-sm text-turquoise-90">
            Silahkan lakukan transfer ke rekening :{' '}
          </p>

          <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 my-3">
            {paymentOptions?.data?.length > 0 &&
              paymentOptions.data.map((item: any, i: number) => (
                <div
                  className="p-4 border-[0.5px] items-center rounded-md border-turquoise-60 flex"
                  key={`pay-opt-${i}`}
                >
                  <div className="md:w-1/4 xs:w-1/4 md:p-2 lg:p-2 mr-2">
                    <Image
                      src={getImageUrl(item.attributes.image)}
                      alt="thank you page"
                      layout="responsive"
                      width={100}
                      height={80}
                    />
                  </div>
                  <div className="w-full pl-2">
                    <div className="flex flex-wrap justify-between">
                      <span className="font-bold text-turquoise-80 md:text-lg xs:text-sm mr-5">
                        {item.attributes.account_number}{' '}
                      </span>
                      <DocumentDuplicateIcon
                        className="w-6 h-6 text-turquoise-70 cursor-pointer"
                        onClick={() =>
                          copyClipboard(item.attributes.account_number)
                        }
                      />
                    </div>
                    <p className="font-semibold text-turquoise-80 md:text-base xs:text-xs">
                      a.n {item.attributes.account_name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleClickHome}
            className="main-btn pricing_btn w-1/2"
          >
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </>
  )
}

export default Thankyou
