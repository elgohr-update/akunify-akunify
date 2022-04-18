import React from 'react'
import { useRouter } from 'next/router'

import { Image } from 'components/common'

const Thankyou: React.FC = () => {
  const router = useRouter()

  const handleClickHome = (): void => {
    router.push('/')
  }

  return (
    <div className="mt-110 mb-20 max-w-4xl m-auto p-12 text-center">
      <Image
        src={`/images/thankyou-page.svg`}
        alt={`thankyou-error-page`}
        className="max-w-100 mx-auto w-10/12"
      />

      <p className=" text-turquoise-80 text-sm md:text-base">
        Silahkan selesaikan pembayaran sesuai dengan tagihan yang dikirim
        melalui aplikasi Whatsapp kamu. Setelah pembayaran selesai Admin akan
        melakukan verifikasi pembayaran kamu dalam waktu 1x24 Jam. Masa aktif
        langganan kamu adalah 1 bulan terhitung setelah Admin memberikan akun
        sharing atau mengundangmu ke grup Whatsapp akun premium
      </p>

      <div className="mt-8">
        <button
          onClick={handleClickHome}
          className="main-btn pricing_btn w-1/2"
        >
          Kembali ke Homepage
        </button>
      </div>
    </div>
  )
}

export default Thankyou
