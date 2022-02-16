import React from 'react'

import { Image } from 'components/Commons'

import { getImageUrl } from 'utils/index'

interface IPaymentProps {
  data: any[]
  meta?: any
}

const Payment: React.FC<IPaymentProps> = ({ data = [] }) => {
  return (
    <section id="payment" className="work_area bg-gray pt-120 pb-14">
      <div className="container">
        <div className="row justify-center">
          <div className="w-ull lg:w-1/2">
            <div className="section_title text-center pb-8">
              <h5 className="sub_title">Metode Pembayaran</h5>
              <h4 className="main_title">Metode Pembayaran Akunify</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-10">
          {data.length > 0 &&
            data.map((item, i) => (
              <div
                key={`payment-${i}`}
                className="md:w-1/6 sm:w-1/2 xs:w-1/3 p-3 mx-4 xs:mx-0"
              >
                <Image
                  src={getImageUrl(item.attributes.image, 'thumbnail')}
                  alt={item.title}
                />
              </div>
            ))}
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Payment
