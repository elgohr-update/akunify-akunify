import React from 'react'


const Header: React.FC = () => {
  return (
    <section className="header_area">
      <div className="navbar-area bg-white">
        <div className="container relative">
          <div className="row items-center">
            <div className="w-full">
              <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                <a className="navbar-brand mr-5" href="index.html">
                    <img src="assets/images/logo.svg" alt="Logo" />
                </a>
                <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                  <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#services">Services</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#work">Projects</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
        <div className="hero_shape shape_1">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_2">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_3">
          <img src="assets/images/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_4">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_6">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_7">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_8">
          <img src="assets/images/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_9">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_10">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_11">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        <div className="hero_shape shape_12">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>

        <div className="container">
          <div className="row">
            <div className="w-full lg:w-1/2">
              <div className="header_hero_content pt-150 lg:pt-0">
                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Sharing Subscription Services, <span className="text-theme-color">Akunify</span></h2>
                <p className="mt-8 lg:mr-8">
                  Yuk! berlangganan layanan premium seperti Netflix, Youtube dan Spotify dengan cara patungan dengan pengguna lain tanpa perlu repot cari teman patungan.
                </p>
                <div className="hero_btn mt-10">
                  <a className="main-btn" href="#0">Daftar sekarang</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_shape hidden lg:block"></div>

        <div className="header_image flex items-center">
          <div className="image 2xl:pl-25">
            <img src="assets/images/header-image.svg" alt="Header Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header