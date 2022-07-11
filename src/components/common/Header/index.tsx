import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'

import { Image } from 'components/common'

import { getListServices } from 'services/service'

const Header: React.FC = () => {
  const router = useRouter()
  const [services, setServices] = useState<any[]>([])
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<string>('home')
  const [mobileHide, setMobileHide] = useState<boolean>(true)

  useEffect(() => {
    getServicesList()
  }, [])

  const getServicesList = async () => {
    try {
      const response = await getListServices({ with_image: false })
      setServices(response)
    } catch (error) {
      throw error
    }
  }

  const handleSetActiveMenu = (menu: 'home' | 'services' | 'faqs'): void => {
    setActiveMenu(menu)
    setShowDropdown(false)
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
                      alt="logo akunify"
                      className="w-200 sm:w-100"
                      withNext
                      layout="fixed"
                      width={180}
                      height={40}
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
                          <div className="inline-flex items-center">
                            <a
                              className={`page-scroll cursor-pointer ${
                                activeMenu === 'services' ? 'active' : ''
                              }`}
                              onClick={() => {
                                handleSetActiveMenu('services')
                                setShowDropdown(!showDropdown)
                              }}
                            >
                              Services
                            </a>
                            {showDropdown ? (
                              <ChevronUpIcon
                                className={`w-4 h-4 ml-2 ${
                                  activeMenu === 'services'
                                    ? 'text-turquoise-50'
                                    : ''
                                }`}
                              />
                            ) : (
                              <ChevronDownIcon
                                className={`w-4 h-4 ml-2 ${
                                  activeMenu === 'services'
                                    ? 'text-turquoise-50'
                                    : ''
                                }`}
                              />
                            )}
                          </div>
                          <ul
                            className={`${
                              showDropdown ? 'block' : 'hidden'
                            } dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-md shadow mt-1 m-0 bg-clip-padding border-none`}
                          >
                            {services.length > 0 &&
                              services.map((menu, i) => (
                                <li key={`submenu-${i}`}>
                                  <Link
                                    href={`/subscribe/${menu?.id}/${menu?.attributes?.short_url}`}
                                  >
                                    <a
                                      className="dropdown-item text-sm py-2 px-4 font-normal"
                                      onClick={() => setShowDropdown(false)}
                                    >
                                      {menu?.attributes?.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                          </ul>
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
