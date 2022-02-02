import React from 'react'
import {
  NewsPaper
} from 'components/Commons/Icons'

import {
  getImageUrl,
  currencyFormater
} from 'utils/index'

interface IServicesProps {
  data: any[];
  meta?: any;
}

const Services: React.FC<IServicesProps> = ({ data=[] }) => {
  return (
    <section id="services" className="work_area bg-gray pt-120 pb-14">
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
        <div className="work_wrapper relative p-0 md:p-12">
          <div className="row work_active md:px-8 sm:p-0 justify-center">
            { (data.length > 0) && data.map((service, index) => (
              <div className="w-full lg:w-3/12 p-4" key={`service-${index}`}>
                <div className="single_item mx-auto">
                  <div className="single_work mx-3">
                    <div className="work_image">
                      <img src={ getImageUrl(service.attributes.image, 'thumbnail') } alt="work" className="w-full" />
                    </div>
                    <div className="work_content">
                      <a href="#" className="arrow">
                        <NewsPaper />
                      </a>
                      <h4 className="work_title text-xl md:text-2xl">
                        <a href="#">{ service.attributes.name }</a>
                      </h4>
                      <p className="mt-2">
                        { currencyFormater(service.attributes.price) }
                      </p>
                      <a href="" className="main-btn pricing_btn w-full">Mulai Berlangganan</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services