import React from 'react'

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
  return (
    <div>
      <div className="my-4">
        <div className="flex flex-wrap justify-between items-center pr-1">
          <h5 className="text-turquoise-90">Layanan yang dipesan</h5>
          {/* <p className="text-turquoise-50 cursor-pointer text-sm">Ubah paket</p> */}
        </div>
        <div className="rounded-md p-6 shadow-md mt-4 border">
          <div className="flex flex-wrap">
            <div className="w-1/4 p-2 text-center">
              <img
                src={getImageUrl(service?.attributes?.image, 'large')}
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
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
