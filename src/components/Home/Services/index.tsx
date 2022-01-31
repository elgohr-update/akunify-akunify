import React from 'react'
import {
  NewsPaper
} from 'components/Commons/Icons'

const Services: React.FC = () => {
  return (
    <section id="services" className="work_area bg-gray pt-120 pb-16">
      <div className="container">
        <div className="row justify-center">
          <div className="w-ull lg:w-1/2">
            <div className="section_title text-center pb-6">
              <h5 className="sub_title">Layanan Akunify</h5>
              <h4 className="main_title">Subscribtion Account</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="work_wrapper relative  p-11">
          <div className="row work_active px-8">
            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                    <img src="assets/images/work-1.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Nextflix</a></h4>
                    <p className="mt-2">NoCodeAPI</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                    <img src="assets/images/work-2.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Youtube Premium</a></h4>
                    <p className="mt-2">UIdeck</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                    <img src="assets/images/work-3.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Spotify Premium</a></h4>
                    <p className="mt-2">GrayGrids</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                    <img src="assets/images/work-4.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Disney+ Hotstar</a></h4>
                    <p className="mt-2">Ayro UI</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                      <img src="assets/images/work-5.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Kulina.id</a></h4>
                    <p className="mt-2">LineIcons</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 p-4">
              <div className="single_item mx-auto">
                <div className="single_work mx-3">
                  <div className="work_image">
                      <img src="assets/images/work-2.jpg" alt="work" className="w-full" />
                  </div>
                  <div className="work_content">
                    <a href="#" className="arrow">
                      <NewsPaper />
                    </a>
                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Microsoft 365</a></h4>
                    <p className="mt-2">PageBulb</p>
                    <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services