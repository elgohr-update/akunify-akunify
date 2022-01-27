import React from 'react'

const Banner: React.FC = () => {
  return (
    <section id="why" className="about_area pt-120 relative">
      <div className="about_image flex items-end justify-end">
        <div className="image lg:pr-13">
          <img src="assets/images/about.svg" alt="about" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-end">
          <div className="w-full lg:w-1/2">
            <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
              <div className="section_title pb-9">
                <h5 className="sub_title">Why Choose Us</h5>
                <h4 className="main_title">Your Goal is Our Achievement</h4>
              </div>
              <p>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus. </p>
              <ul className="about_list pt-3">
                <li className="flex mt-5">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                  </div>
                </li>
                <li className="flex mt-5">
                  <div className="about_check">
                    <i className="lni lni-checkmark-circle"></i>
                  </div>
                  <div className="about_list_content pl-5 pr-2">
                    <p>Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
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