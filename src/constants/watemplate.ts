const watemplate = {
  successPayment: `Halo kak {member_name},
    Terimakasih atas pembayarannya yang telah dilakukan.
    Layanan {service_name} kamu akan aktif hingga tanggal *{active_date}*`,
  pendingPayment: `Halo kak {member_name},
    Terimakasih telah berlangganan akunify.com.
    Segera lakukan pembayaran untuk menikmati layanan {service_name} kamu dengan detail sebagai berikut :
    Nominal Pembayaran : *_{payment_amount}_*
    *_Bank Jago_*
    No.Rek : 105459400976
    a.n. Angga Setia Pradana
    *_BCA_*
    No.Rek : 5710070077
    a.n. Angga Setia Pradana
    *_BTPN / Jenius_*
    No.Rek : 90011179560
    a.n. Angga Setia Pradana
    *_BRI_*
    No.Rek : XXXXXXXXX
    a.n. Angga Setia Pradana
    Setelah melakukan pembayaran, Silahkan lakukan konfirmasi dengan cara mengirimkan bukti transfer. Masa berlangganan akan aktif setelah proses pembayaran disetujui, dan akan berakhir dalam waktu 1 bulan.
    Terimakasih`,
  unsubscribe: `Halo kak {member_name},
    Mohon maaf, layanan [Nama service] kamu telah dihentikan, dan kamu telah dikeluarkan dari grup.
    Silahkan lakukan pendaftaran kembali di halaman https://akunify.com jika ingin tetap menikmati layanan {service_name} kamu
    Terimakasih`,
}

export default watemplate
