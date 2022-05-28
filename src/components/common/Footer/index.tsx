import React from 'react'
import Link from 'next/link'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'

import { Image } from 'components/common'

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer_area bg-black relative z-10">
      <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
        <Image src="/images/logo-akunify.png" alt="logo akunify" />
      </div>
      <div className="container">
        <div className="footer_widget pt-18 pb-120">
          <div className="row justify-center">
            <div className="w-full md:w-1/2 lg:w-3/12">
              <div className="footer_about mt-13 mx-3">
                <div className="footer_logo">
                  <a href="#">
                    <Image src="/images/logo-akunify.png" alt="logo akunify" />
                  </a>
                </div>
                <div className="footer_content mt-8">
                  <p className="text-white">
                    Platform layanan Berlangganan Bersama seperti Netflix,
                    Youtube dan Spotify dengan cara patungan dengan pengguna
                    lain.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="footer_link_wrapper flex sm:flex-wrap xs:flex-wrap mx-3">
                <div className="footer_link w-1/2 md:pl-13 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">
                    Akunify.com
                  </h2>
                  <ul className="link pt-4">
                    <li>
                      <Link href={`/tnc`}>
                        <a className="text-white mt-4 hover:text-primary">
                          Terms & Condition
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer_link lg:w-1/2 md:w-1/2 xs:w-full md:pl-11 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">
                    Reach Us
                  </h2>
                  <ul className="link pt-4">
                    <Link
                      href={`https://api.whatsapp.com/send/?phone=6285171525500&text=Hai%20Admin%20saya%20mau%20tanya`}
                      passHref
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <li className="flex items-center mt-4 w-full">
                          <span>
                            <PhoneIcon className="w-5 h-5 mr-2 text-turquoise-50" />
                          </span>
                          <span className="text-white hover:text-primary">
                            0851-7152-5500
                          </span>
                        </li>
                      </a>
                    </Link>
                    <li className="flex items-center mt-4 w-full">
                      <span>
                        <MailIcon className="w-5 h-5 mr-2 text-turquoise-50" />
                      </span>
                      <span className="text-white hover:text-primary">
                        info.akunify@gmail.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="w-full md:w-2/3 lg:w-4/12">
              <div className="footer_subscribe mt-13 mx-3">
                <h2 className="footer_title text-xl font-semibold text-white">Newsletter</h2>
                <div className="subscribe_form text-right mt-9 relative">
                  <form action="#">
                    <input type="text" placeholder="Enter email" className="w-full py-5 px-6 bg-white text-black rounded-full border-none"/>
                    <button className="main-btn subscribe-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
          <div className="footer_social pt-4 mx-3 text-center">
            <ul className="flex justify-center sm:justify-start">
              <li className="mr-3">
                <a
                  href="https://www.facebook.com/Akunify-102410452354811"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/images/socmed/facebook.svg"
                    alt="Akunify Facebook"
                  />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.instagram.com/akunify/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/images/socmed/instagram.svg"
                    alt="Akunify Instagram"
                  />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://twitter.com/akunify"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/images/socmed/twitter.svg"
                    alt="Akunify Twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
