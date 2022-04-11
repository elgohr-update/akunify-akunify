import React from 'react'
import { Image } from 'components/common'

const Banner: React.FC = () => {
  return (
    <div
      id="home"
      className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center"
    >
      <div className="hero_shape shape_1">
        <Image src="assets/images/shape/shape-1.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_2">
        <Image src="assets/images/shape/shape-2.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_3">
        <Image src="assets/images/shape/shape-3.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_4">
        <Image src="assets/images/shape/shape-4.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_6">
        <Image src="assets/images/shape/shape-1.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_7">
        <Image src="assets/images/shape/shape-4.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_8">
        <Image src="assets/images/shape/shape-3.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_9">
        <Image src="assets/images/shape/shape-2.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_10">
        <Image src="assets/images/shape/shape-4.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_11">
        <Image src="assets/images/shape/shape-1.svg" alt="shape" />
      </div>
      <div className="hero_shape shape_12">
        <Image src="assets/images/shape/shape-2.svg" alt="shape" />
      </div>

      <div className="container">
        <div className="row">
          <div className="w-full lg:w-1/2">
            <div className="header_hero_content pt-150 lg:pt-0">
              <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                Sharing Subscription Services,{' '}
                <span className="text-theme-color">Akunify</span>
              </h2>
              <p className="mt-8 lg:mr-8">
                Yuk! berlangganan layanan premium seperti Netflix, Youtube dan
                Spotify dengan cara patungan dengan pengguna lain tanpa perlu
                repot cari teman patungan.
              </p>
              <div className="hero_btn mt-10">
                <a className="main-btn page-scroll" href="#services">
                  Daftar sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_shape hidden lg:block"></div>

      <div className="header_image flex items-center">
        <div className="image 2xl:pl-25 w-full md:absolute md:mt-260">
          <Image src="/images/illustration/cinema.svg" alt="Header Image" />
        </div>
      </div>
    </div>
  )
}

export default Banner
