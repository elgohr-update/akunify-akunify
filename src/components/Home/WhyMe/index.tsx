import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

import { Image } from 'components/common'

const Banner: React.FC = () => {
  return (
    <section id="why" className="about_area pt-120 relative">
      <div className="about_image flex items-end justify-end">
        <div className="image lg:pr-13 lg:pb-110 sm:pb-110 w-full">
          <Image src="/images/illustration/music-2.svg" alt="about akunify" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-end">
          <div className="w-full lg:w-1/2">
            <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
              <div className="section_title pb-9">
                <h5 className="sub_title">Kenapa harus Akunify?</h5>
                <h4 className="main_title">Dijamin amanah dan gak ribet!.</h4>
              </div>
              <p>
                Akunify punya banyak keunggulan lho, kamu tidak perlu khawatir
                lagi mau berlangganan karena Akunify memberikan semua fasilitas
                yang kamu butuhkan.{' '}
              </p>
              <ul className="about_list pt-3">
                <li className="flex mt-5">
                  <div className="">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise-70" />
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>
                      Akun yang diberikan adalah akun resmi sehingga kamu tidak
                      perlu ragu untuk berlangganan.
                    </p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise-70" />
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>
                      Ada banyak metode pembayaran yang bisa kamu pakai di
                      Akunify.
                    </p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise-70" />
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>
                      Kamu gak perlu ribet mencari teman patungan, biar kami
                      yang carikan.{' '}
                    </p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise-70" />
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>
                      Jangan takut kalo teman patungan kamu kurang/putus
                      layanan, biar kami yang nombokin!
                    </p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise-70" />
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>
                      Lupa bayar? jangan panik. Kami berikan masa tenggang
                      hingga 2x24 jam!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
