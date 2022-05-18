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
          <div className="flex flex-wrap">
            <div className="w-1/4 p-2 text-center">
              <Image
                src={getImageUrl(service?.attributes?.image)}
                alt="Layanan image"
              />
            </div>
            <div className="w-3/4 p-2">
              <h6>{service?.attributes.name}</h6>
              <p className="font-bold text-gray-70">
                {currencyFormater(service?.attributes.price)}
              </p>
            </div>
          </div>

          <Description
            isShow={showMore}
            content={service?.attributes?.description}
            handleChangeShow={() => setShowMore(!showMore)}
          />

          <div className="flex flex-wrap justify-between mt-2">
            <p className="font-semibold text-turquoise-90">Total pembayaran</p>
            <p className="text-turquoise-90">
              {currencyFormater(service?.attributes.price)}/bulan
            </p>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap">
              <span className="mr-2">Bagikan: </span>
              <div>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={36} round={true} className="h-8" />
                </FacebookShareButton>

                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={36} round={true} className="h-8" />
                </WhatsappShareButton>

                <TelegramShareButton url={shareUrl}>
                  <TelegramIcon size={36} round={true} className="h-8" />
                </TelegramShareButton>

                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={36} round={true} className="h-8" />
                </TwitterShareButton>

                <button onClick={() => copyClipboard()}>
                  <Image
                    src="/images/share/link.png"
                    alt="share link copy"
                    className="h-8 mx-1"
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
