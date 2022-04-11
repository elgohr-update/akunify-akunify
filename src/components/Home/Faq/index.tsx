import React from 'react'

import { Accordion } from 'components/common'

const Faq: React.FC = () => {
  const faqs = [
    {
      title: 'Apa saja metode pembayaran yang tersedia?',
      content:
        'Saat ini kamu dapat melakukan pembayaran melalui transfer ke rekening BCA, Bank Jago, & Jenius.',
    },
    {
      title: 'Bagaimana cara konfirmasi pembayaran?',
      content: `Kamu dapat melakukan konfirmasi pembayaran via Whatsapp ke nomor 0851-7152-5500 atau dengan cara <a class="text-turquoise-70" href="//s.id/akunify-konfirmasi" target="_blank" rel="noreferrer">klik disini</a>`,
    },
    {
      title: 'Kapan masa berlangganan aktif?',
      content:
        'Admin akan memverifikasi pembayaran kamu paling lambat 1x24 jam dan masa berlangganan terhitung ketika Admin memberikan akun sharing, link invitation atau mengundang kamu ke grup premium.',
    },
    {
      title: 'Bagaimana jika saya lupa melakukan pembayaran?',
      content:
        'Tenang, kami berikan masa tenggang hingga 2x24 jam dari tanggal jatuh tempo. Jika telah melewati 2x24 jam kamu akan dikeluarkan dari grup premium.',
    },
  ]
  return (
    <section id="faqs" className="work_area bg-gray pt-120 pb-110">
      <div className="container">
        <div className="row justify-center">
          <div className="w-ull lg:w-1/2">
            <div className="section_title text-center pb-6">
              {/* <h5 className="sub_title">Frequently Asked Questions (FAQ)</h5> */}
              <h4 className="main_title">Pertanyaan Tentang Akunify</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="work_wrapper relative p-8 md:p-0">
          <Accordion data={faqs} />
        </div>
      </div>
    </section>
  )
}

export default Faq
