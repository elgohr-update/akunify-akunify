import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SnackBar from 'my-react-snackbar'
import useCopyToClipboard from 'hooks/copyClipboard'
import {
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'
import { InformationCircleIcon } from '@heroicons/react/outline'

import { Image } from 'components/common'
import Description from 'components/Subscribe/Description'

import { getImageUrl, currencyFormater } from 'utils/index'

interface IOrderDetail {
  service: {
    attributes: IAttribute
  }
  showMore: boolean
  setShowMore: (bool: boolean) => void
}

interface IAttribute {
  name: string
  image: string
  description: string
  price: number | string
  preorder: boolean
  is_active: boolean
}
const OrderDetail: React.FC<IOrderDetail> = ({
  service,
  showMore,
  setShowMore,
}) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [value, copy] = useCopyToClipboard()

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
  const shareTitle = `Yuk, berlangganan ${
    service?.attributes.name
  } cuma dengan Rp${currencyFormater(
    service?.attributes?.price || 0
  )}/bulan. Berlangganan murah, praktis dan terpercaya hanya di akunify.`

  const copyClipboard = () => {
    copy(shareUrl)
    setOpen(true)
  }

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 2500)
      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <div>
      <SnackBar
        open={open}
        message={'Success copied to clipboard!'}
        position="top-center"
        color="#23D5D0"
        closeOnClick={false}
      />

      <div className="my-4">
        <div className="flex flex-wrap justify-between items-center pr-1">
          <h5 className="text-turquoise-90">Layanan yang dipesan</h5>
          {/* <p className="text-turquoise-50 cursor-pointer text-sm">Ubah paket</p> */}
        </div>
        <div className="rounded-md p-6 shadow-md mt-4 border">
          <div className="flex flex-wrap mb-4">
            <div className="w-1/4 p-2 text-center">
              <Image
                src={getImageUrl(service?.attributes?.image)}
                alt={service?.attributes.name}
                withNext
                width={240}
                height={120}
              />
            </div>
            <div className="w-3/4 p-2">
              <h6>{service?.attributes.name}</h6>
              <p className="font-bold text-gray-70">
                {currencyFormater(service?.attributes.price)}
              </p>
              {service.attributes?.preorder && (
                <div className="bg-yellow-100 text-yellow-600 text-xs font-semibold p-1 rounded-sm max-w-fit">
                  Preorder
                </div>
              )}
            </div>
          </div>

          {service?.attributes?.preorder && service?.attributes?.is_active && (
            <div className="bg-yellow-100 w-full border border-yellow-200 rounded-md p-2 mb-2 mx-1">
              <div className="text-yellow-500 items-center text-sm inline">
                Untuk layanan preorder, pembayaran dilakukan setelah kuota dalam
                satu grup terpenuhi
              </div>
            </div>
          )}

          {!service?.attributes?.is_active && (
            <div className="bg-red-100 w-full border border-red-300 rounded-md p-2 text-sm mb-2 mx-1">
              <div className="ml-2 text-red-500">
                Mohon maaf, untuk sementara layanan tidak dapat dipesan.
              </div>
            </div>
          )}

          <Description
            isShow={showMore}
            content={service?.attributes?.description}
            handleChangeShow={() => setShowMore(!showMore)}
          />

          <div className="flex flex-wrap justify-between mt-2">
            <p className="font-semibold text-turquoise-90">Total pembayaran</p>
            <p className="text-turquoise-90 font-bold">
              {currencyFormater(service?.attributes.price)}/bulan
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Bagikan: </span>
              <div className="items-center pt-2">
                <FacebookShareButton url={shareUrl} title={shareTitle}>
                  <FacebookIcon size={36} round={true} className="h-8 mr-1" />
                </FacebookShareButton>

                <WhatsappShareButton url={shareUrl} title={shareTitle}>
                  <WhatsappIcon size={36} round={true} className="h-8 mr-1" />
                </WhatsappShareButton>

                <TelegramShareButton url={shareUrl} title={shareTitle}>
                  <TelegramIcon size={36} round={true} className="h-8 mr-1" />
                </TelegramShareButton>

                <TwitterShareButton url={shareUrl} title={shareTitle}>
                  <TwitterIcon size={36} round={true} className="h-8 mr-1" />
                </TwitterShareButton>

                <button onClick={() => copyClipboard()}>
                  <Image
                    src="/images/share/link.png"
                    alt="share link copy"
                    className="h-8 ml-1"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
