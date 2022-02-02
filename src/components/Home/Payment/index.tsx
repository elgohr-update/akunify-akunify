import React from 'react';

const Payment: React.FC = () => {
  const paymentList = [
    { title: 'BCA', img: '/images/payment/payment-bank-bca.png' },
    { title: 'BRI', img: '/images/payment/payment-bank-bri.png' },
    { title: 'Jenius', img: '/images/payment/payment-jenius.png' },
    { title: 'Gopay', img: '/images/payment/payment-gopay.png' },
    { title: 'Ovo', img: '/images/payment/payment-ovo.png' },
    { title: 'Dana', img: '/images/payment/payment-dana.png' },
    { title: 'ShopeePay', img: '/images/payment/payment-shopee-pay.png' },
    { title: 'Bank Jago', img: '/images/payment/payment-bank-jago.png' },
  ]

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
          { paymentList.map((item, i) => (
            <div key={`payment-${i}`} className="md:w-1/6 sm:w-1/2 xs:w-1/4 p-3 mx-4">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Payment;