import React from 'react'
import { Image } from 'components/common'

const OfflineContainer = (): JSX.Element => {
  const handleRefreshPage = (): void => {
    const link = window.location.href
    window.location.replace(link)
  }

  return (
    <div className="mt-110 mb-20 max-w-xl m-auto p-12">
      <Image
        src={`/images/404-page.svg`}
        alt={`ofline-page`}
        className="max-w-100"
      />

      <div className="text-center mt-8">
        <h3>Tidak ada koneksi internet</h3>
        <p>Periksa kembali koneksi kamu.</p>
        <button
          onClick={handleRefreshPage}
          className="main-btn pricing_btn w-1/2"
        >
          Coba lagi
        </button>
      </div>
    </div>
  )
}

export default OfflineContainer
