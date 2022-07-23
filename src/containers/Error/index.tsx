import React from 'react'
import { useRouter } from 'next/router'

import { Image } from 'components/common'

interface IErrorProps {
  code: number | string
}

const ErrorContainer = ({ code }: IErrorProps): JSX.Element => {
  const router = useRouter()

  const handleClickHome = (): void => {
    router.push('/')
  }

  return (
    <div className="mt-110 mb-20 max-w-xl m-auto p-12">
      <Image
        src={`/images/${code}-page.svg`}
        alt={`${code}-error-page`}
        className="max-w-100"
        width={480}
        height={320}
        withNext
      />

      <div className="text-center mt-8">
        <button
          onClick={handleClickHome}
          className="main-btn pricing_btn w-3/5"
        >
          Kembali ke Homepage
        </button>
      </div>
    </div>
  )
}

export default ErrorContainer
