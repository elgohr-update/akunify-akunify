import React from 'react'

const Product: React.FC = () => {
  return (
    <section id="pricing" className="pricing_area pt-120 pb-120">
      <div className="container">
        <div className="row justify-center">
          <div className="w-full lg:w-1/2">
            <div className="section_title text-center pb-6">
              <h5 className="sub_title">Pricing Plans</h5>
              <h4 className="main_title">Choose Your Plan</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w-full">
            <div className="pricing_menu mt-8 pb-8">
              <ul className="flex justify-center">
                <li className="nav-item">
                  <button className="active bg-gray text-body-color py-3 px-8 rounded-tl-full rounded-bl-full" data-tab-target="#monthlyPlan">Monthly</button>
                </li>
                <li className="nav-item">
                  <button className="bg-gray text-body-color py-3 px-8 rounded-tr-full rounded-br-full" data-tab-target="#yearlyPlan">Yearly</button>
                </li>
              </ul>
            </div>

            <div className="pricing_content mt-6_area">
              <div className="tab-content">
                <div className="active tab-pane" id="monthlyPlan" data-tab-content>
                  <div className="row justify-center">
                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Basic</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$19.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3 active">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Standard</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$39.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Premium</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$99.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="yearlyPlan" data-tab-content>
                  <div className="row justify-center">
                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Basic</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$99.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3 active">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Standard</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$199.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                      <div className="single_pricing text-center mt-8 mx-3">
                        <div className="pricing_title relative inline-block">
                          <h4 className="title group-hover:text-white">Premium</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                            <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f"/>
                          </svg>
                        </div>
                        <div className="pricing_content mt-6">
                          <span className="pricing_price font-bold text-black text-4xl">$499.00</span>
                          <p className="mt-4 leading-9">Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam voluptua vero eos  accusam et justo duo dolores </p>
                          <a href="" className="main-btn pricing_btn">Choose Plan</a>
                        </div>
                      </div>
                    </div>
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

export default Product