import { WhyMe } from 'components/Home'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <section className="services_area pt-120" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full lg:w-1/2">
              <div className="section_title text-center pb-6">
                <h5 className="sub_title">About</h5>
                <h4 className="main_title">Work Process</h4>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-write"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Research</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-bulb"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Prototype</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-checkmark-circle"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Build</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyMe />

      <section id="services" className="services_area pt-120 pb-120">
        <div className="container">
          <div className="row justify-center">
              <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                      <h5 className="sub_title">What We Do</h5>
                      <h4 className="main_title">Our Services</h4>
                  </div>
              </div>
          </div>
          <div className="row justify-center">
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-layout"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                      <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Web Design</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-bullhorn"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Digital Marketing</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-mobile"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Mobile Apps</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-seo"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">SEO Consultancy</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-layers"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Graphic Design</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-briefcase"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                    <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                  </svg>
                </div>
                <div className="services_content mt-5 xl:mt-10">
                  <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Business Consultancy</h3>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="work_area bg-gray pt-120 pb-120">
        <div className="container">
          <div className="row justify-center">
            <div className="w-ull lg:w-1/2">
              <div className="section_title text-center pb-6">
                <h5 className="sub_title">Works</h5>
                <h4 className="main_title">Some of Our Recent Works</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="work_wrapper relative">
            <div className="row work_active">
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-1.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">Marketing</a></h4>
                              <p className="mt-2">NoCodeAPI</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-2.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">Creative Design</a></h4>
                              <p className="mt-2">UIdeck</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-3.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">Web Design</a></h4>
                              <p className="mt-2">GrayGrids</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-4.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">Analysis</a></h4>
                              <p className="mt-2">Ayro UI</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-5.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">SMM</a></h4>
                              <p className="mt-2">LineIcons</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                  <div className="single_item mx-auto">
                      <div className="single_work mx-3">
                          <div className="work_image">
                              <img src="assets/images/work-2.jpg" alt="work" className="w-full" />
                          </div>
                          <div className="work_content">
                              <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                              <h4 className="work_title text-xl md:text-2xl"><a href="#">SEO</a></h4>
                              <p className="mt-2">PageBulb</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-3/12">
                <div className="single_item mx-auto">
                  <div className="single_work mx-3">
                    <div className="work_image">
                      <img src="assets/images/work-4.jpg" alt="work" className="w-full" />
                    </div>
                    <div className="work_content">
                        <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                        <h4 className="work_title text-xl md:text-2xl"><a href="#">Mobile App</a></h4>
                        <p className="mt-2">Rocket Internet LTD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





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

      <section id="team" className="team_area bg-gray pt-120 pb-120">
          <div className="container">
              <div className="row justify-center">
                  <div className="w-full lg:w-1/2">
                      <div className="section_title text-center pb-6">
                          <h5 className="sub_title">Team</h5>
                          <h4 className="main_title">Meet Our Team Members</h4>
                      </div>
                  </div>
              </div>
              <div className="team-wrapper relative">
                  <div className="row team_active">
                      <div className="w-full lg:w-4/12">
                          <div className="single_team_item mx-auto">
                              <div className="single_team mx-3">
                                  <div className="team_image relative">
                                      <img src="assets/images/team-1.jpg" alt="team" className="w-full" />
                                      <ul className="social absolute top-4 right-8">
                                          <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                      </ul>
                                  </div>
                                  <div className="team_content py-5 px-8 relative">
                                      <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Chris Dave</a></h4>
                                      <p className="mt-2 transition-all duration-300 group-hover:text-white">Founder and CEO</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="w-full lg:w-4/12">
                          <div className="single_team_item mx-auto">
                              <div className="single_team mx-3">
                                  <div className="team_image relative">
                                      <img src="assets/images/team-3.jpg" alt="team" className="w-full" />
                                      <ul className="social absolute top-4 right-8">
                                          <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                      </ul>
                                  </div>
                                  <div className="team_content py-5 px-8 relative">
                                      <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Sarah Doe</a></h4>
                                      <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="w-full lg:w-4/12">
                          <div className="single_team_item mx-auto">
                              <div className="single_team mx-3">
                                  <div className="team_image relative">
                                      <img src="assets/images/team-5.jpg" alt="team" className="w-full" />
                                      <ul className="social absolute top-4 right-8">
                                          <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                      </ul>
                                  </div>
                                  <div className="team_content py-5 px-8 relative">
                                      <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Rob Hope</a></h4>
                                      <p className="mt-2 transition-all duration-300 group-hover:text-white">Dr. Software Engineer</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="w-full lg:w-4/12">
                          <div className="single_team_item mx-auto">
                              <div className="single_team mx-3">
                                  <div className="team_image relative">
                                      <img src="assets/images/team-2.jpg" alt="team" className="w-full" />
                                      <ul className="social absolute top-4 right-8">
                                          <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                          <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                      </ul>
                                  </div>
                                  <div className="team_content py-5 px-8 relative">
                                      <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Micheal Jordan</a></h4>
                                      <p className="mt-2 transition-all duration-300 group-hover:text-white">Business Development Manager</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>





      <section id="blog" className="blog_area pt-120">
          <div className="container">
              <div className="row justify-center">
                  <div className="w-full lg:w-1/2">
                      <div className="section_title text-center pb-6">
                          <h5 className="sub_title">Blog</h5>
                          <h4 className="main_title">From The Blog</h4>
                      </div>
                  </div>
              </div>
              <div className="row justify-center lg:justify-start">
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src="assets/images/blog-1.jpg" alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">How to track your business revenue</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src="assets/images/blog-2.jpg" alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">Improving products depending on feedback</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src="assets/images/blog-3.jpg" alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">How to diversify your audience</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>





      <section id="contact" className="contact_area relative pt-18 pb-120">
        <div className="contact_image flex items-center justify-end">
          <div className="image lg:pr-13">
              <img src="assets/images/contact.svg" alt="about" />
          </div>
        </div>

          <div className="container">
              <div className="row justify-end">
                  <div className="w-full lg:w-1/2">
                      <div className="contact_wrapper mt-11">
                          <div className="section_title pb-4">
                              <h5 className="sub_title">Contact</h5>
                              <h4 className="main_title">Get In Touch</h4>
                              <p>Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                          </div>

                          <div className="contact_form">
                              <form id="contact-form" action="assets/php/contact.php" method="POST">
                                  <div className="row">
                                      <div className="w-full md:w-1/2">
                                          <div className="mx-3">
                                              <div className="single_form mt-8">
                                                  <input name="name" id="name" type="text" placeholder="Name" className="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="w-full md:w-1/2">
                                          <div className="mx-3">
                                              <div className="single_form mt-8">
                                                  <input name="email" id="email" type="email" placeholder="Email" className="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="w-full">
                                          <div className="mx-3">
                                              <div className="single_form mt-8">
                                                  <textarea name="message" id="message" placeholder="Message" rows={5} className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                      <p className="form-message mx-3"></p>
                                      <div className="w-full">
                                          <div className="mx-3">
                                              <div className="single_form mt-8">
                                                  <button type="submit" className="main-btn contact-btn">Submit</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <a href="#" className="scroll-top"><i className="lni lni-chevron-up"></i></a>
      <section className="">
          <div className="container">
              <div className="row">
                  <div className="col-lg-">

                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default HomeContainer
