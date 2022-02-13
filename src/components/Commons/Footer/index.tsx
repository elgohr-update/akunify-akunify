import React from 'react'
import Link from 'next/link'

import { Image } from 'components/Commons'

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
                    Platform layanan Berlangganan Bersama seperti Netflix, Youtube dan Spotify dengan cara patungan dengan pengguna lain.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="footer_link_wrapper flex flex-wrap mx-3">
                <div className="footer_link w-1/2 md:pl-13 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                  <ul className="link pt-4">
                    <li><a href="#" className="text-white mt-4 hover:text-primary">Company</a></li>
                    <li><a href="#" className="text-white mt-4 hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#" className="text-white mt-4 hover:text-primary">About</a></li>
                  </ul>
                </div>
                <div className="footer_link w-1/2 md:pl-13 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                  <ul className="link pt-4">
                    <li><a href="#" className="text-white mt-4 hover:text-primary">Support</a></li>
                    <li><a href="#" className="text-white mt-4 hover:text-primary">Contact</a></li>
                    <li>
                      <Link href={`/tnc`}>
                        <a className="text-white mt-4 hover:text-primary">Terms & Condition</a>
                      </Link>
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
                <a href="https://facebook.com/uideckHQ">
                  <Image src="/images/socmed/facebook.svg" alt="Akunify Facebook" />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://twitter.com/uideckHQ">
                  <Image src="/images/socmed/instagram.svg" alt="Akunify Instagram" />
                </a>
              </li>
              <li className="mr-3">
                <a href="#">
                  <Image src="/images/socmed/twitter.svg" alt="Akunify Twitter" />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://instagram.com/uideckHQ">
                  <Image src="/images/socmed/tiktok.svg" alt="Akunify Tiktok" />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="footer_copyright_content pt-4 text-center">
            <p className="text-white">Designed and Developed by <a href="https://uideck.com" rel="nofollow" className="text-white hover:text-primary">UIdeck</a> and <a href="https://tailwindtemplates.co" rel="nofollow" className="text-white hover:text-primary">Tailwind Templates</a></p>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer