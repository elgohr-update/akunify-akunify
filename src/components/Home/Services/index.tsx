import React, { Fragment } from 'react'
import Link from 'next/link'
import { Image } from 'components/common'

import { getImageUrl, currencyFormater } from 'utils/index'

interface IServicesProps {
  data: any[]
  meta?: any
}

const Services: React.FC<IServicesProps> = ({ data = [] }) => {
  return (
    <Fragment>
      <section id="services" className="work_area bg-gray pt-120">
        <div className="container">
          <div className="row justify-center">
            <div className="w-ull lg:w-1/2">
              <div className="section_title text-center pb-6">
                <h4 className="main_title">Layanan</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="work_wrapper relative p-0 md:px-16">
            <div className="row work_active md:px-14 sm:p-0 justify-center">
              {data.length > 0 &&
                data.map((service, index) => (
                  <div
                    className="w-full lg:w-1/4 pt-4"
                    key={`service-${index}`}
                  >
                    <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                        <div className="work_image">
                          <Image
                            src={getImageUrl(service.attributes?.image)}
                            alt="work"
                            className="w-full aspect-video"
                            withNext
                            layout="responsive"
                            width={100}
                            height={62}
                          />
                        </div>
                        <div className="work_content">
                          <div className="min-h-[64px]">
                            <h4 className="work_title text-xl md:text-2xl">
                              <a href="#">
                                {String(service.attributes?.name).substring(
                                  0,
                                  25
                                )}
                              </a>
                            </h4>
                            {service.attributes?.preorder && (
                              <div className="bg-yellow-100 text-yellow-600 text-xs font-semibold p-1 rounded-sm max-w-fit">
                                Preorder
                              </div>
                            )}
                          </div>

                          <p className="mt-2">
                            <span className="font-semibold text-turquoise-90">
                              {currencyFormater(service.attributes?.price)}
                            </span>
                            {' / '}
                            bulan
                          </p>
                          <Link
                            href="/subscribe/[service_id]/[slug]"
                            as={`/subscribe/${service.id}/${service.attributes?.short_url}`}
                          >
                            <button className={`main-btn w-full pricing_btn`}>
                              Mulai Berlangganan
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Modal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)} title={selectedService.attributes?.id}>
        <div className="px-18 mb-4">
          <img src={ getImageUrl(selectedService.attributes?.image, 'medium') } alt="work" className="w-full aspect-video" />
        </div>
        <div className="text-center my-4">
          <h5>{ currencyFormater(selectedService.attributes?.price) }</h5>
        </div>
        <ReactMarkdown>
          { selectedService.attributes?.description }
        </ReactMarkdown>
        <Link href="/subscribe/[service_id]" as={`/subscribe/${selectedService?.id}`}>
          <a className="main-btn pricing_btn w-full">Daftar Berlangganan</a>
        </Link>
      </Modal> */}
    </Fragment>
  )
}

export default Services
