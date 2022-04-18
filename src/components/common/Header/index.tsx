import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Image } from 'components/common'

const Header: React.FC = () => {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState<string>('home')
  const [mobileHide, setMobileHide] = useState<boolean>(true)

  const handleSetActiveMenu = (menu: 'home' | 'services' | 'faqs'): void => {
    setActiveMenu(menu)
    setMobileHide(true)
  }

  return (
    <section className="header_area">
      <div className="navbar-area bg-white">
        <div className="container relative">
          <div className="row items-center">
            <div className="w-full">
              <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                <Link href={`/`}>
                  <a className="navbar-brand mr-5">
                    <Image
                      src="/images/logo-akunify.png"
                      alt="Logo akunify.com"
                      className="w-200 sm:w-100"
                    />
                  </a>
                </Link>
                <button
                  className="block navbar-toggler focus:outline-none lg:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => setMobileHide(!mobileHide)}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className={`absolute left-0 z-20 ${
                    mobileHide ? 'hidden' : ''
                  } w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none`}
                  id="navbarOne"
                >
                  <ul
                    id="nav"
                    className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                  >
                    {router.pathname !== '/' && (
                      <li className="nav-item ml-5 lg:ml-11">
                        <Link href={`/`}>
                          <a className={`page-scroll`}>Home</a>
                        </Link>
                      </li>
                    )}
                    {router.pathname === '/' && (
                      <>
                        <li className="nav-item ml-5 lg:ml-11">
                          <a
                            className={`page-scroll ${
                              activeMenu === 'home' ? 'active' : ''
                            }`}
                            href="#home"
                            onClick={() => handleSetActiveMenu('home')}
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item ml-5 lg:ml-11">
                          <a
                            className={`page-scroll ${
                              activeMenu === 'services' ? 'active' : ''
                            }`}
                            href="#services"
                            onClick={() => handleSetActiveMenu('services')}
                          >
                            Services
                          </a>
                        </li>
                        <li className="nav-item ml-5 lg:ml-11">
                          <a
                            className={`page-scroll ${
                              activeMenu === 'faqs' ? 'active' : ''
                            }`}
                            href="#faqs"
                            onClick={() => handleSetActiveMenu('faqs')}
                          >
                            FAQ
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
