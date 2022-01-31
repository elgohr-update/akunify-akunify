import React from 'react'

const RegisterContainer: React.FC = () => {
  return (
    <section className="max-w-3xl my-12 m-auto">
      <div className="p-16">
        <div className="section_title pb-9">
          <h1 className="main_title mb-4">Daftar layanan Akunify</h1>
          <h5 className="sub_title border-b">Silahkan isi terlebih dahulu sebelum melakukan pemesanan.</h5>
        </div>

        <div className="my-4">
          <div className="flex flex-wrap justify-between items-center pr-1">
            <h5 className="text-turquoise-90">Layanan yang dipesan</h5>
            <p className="text-turquoise-50 cursor-pointer text-sm">Ubah paket</p>
          </div>
          <div className="rounded-md p-6 shadow-md mt-4 border">
            <div className="flex flex-wrap border-b mb-4 py-4">
              <div className="w-1/4 p-2 text-center">
                <img src="/images/product/serv-spotify.png" alt="Layanan image" />
              </div>
              <div className="w-3/4 p-2">
                <h6>Spotify Premium - Paket premium user Host 12 bulan</h6>
                <p>Rp.119.000/tahun</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>Total pembayaran</div>
              <div>Rp.124.000</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Pilih masa berlaku
              </label>
              <div className="mt-1">
                <select
                  name="masa_berlaku"
                  className="py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm"
                >
                  <option value="1">1 Bulan</option>
                  <option value="1">6 Bulan</option>
                  <option value="1">12 Bulan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h5 className="text-turquoise-90">Informasi Pengguna</h5>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-70">
                Nomor whatsapp (Pastikan nomor sudah benar dan aktif)
              </label>
              <div className="mt-1 flex">
                <span className="inline-flex items-center px-3 rounded-l-md bg-turquoise-60 text-m-30 text-white font-bold">
                  +62
                </span>
                <input
                  type="email"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-4 px-3 border border-grey-70 focus:ring-turquoise-60 focus:border-turquoise-60 block w-full rounded-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="mt-1 flex">
                <div className="flex items-center h-5">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    className="focus:ring-turquoise-50 h-4 w-4 border border-turquoise-40 rounded"
                  />
                  <label htmlFor="agreement" className="font-medium text-gray-70 ml-2">
                    Saya menyetujui aturan yang dibuat oleh Akunify.com
                  </label>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <button className="main-btn pricing_btn w-full">
                Lanjut ke pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterContainer