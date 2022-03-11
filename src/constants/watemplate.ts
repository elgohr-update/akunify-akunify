const watemplate = {
  successPayment: `Halo kak {member_name},
    \nTerimakasih atas pembayarannya yang telah dilakukan.
    \nLayanan {service_name} kamu akan aktif hingga tanggal *{active_date}*`,
  pendingPayment: `Halo kak {member_name},
    \nTerimakasih telah berlangganan akunify.com.
    \nSegera lakukan pembayaran untuk menikmati layanan {service_name} kamu dengan detail sebagai berikut :
    \n
    \nNominal Pembayaran : *_{payment_amount}_*
    \n
    \n*_Bank Jago_*
    \nNo.Rek : 105459400976
    \na.n. Angga Setia Pradana
    \n
    \n*_BCA_*
    \nNo.Rek : 5710070077
    \na.n. Angga Setia Pradana
    \n*_BTPN / Jenius_*
    \nNo.Rek : 90011179560
    \na.n. Angga Setia Pradana
    \n*_BRI_*
    \nNo.Rek : XXXXXXXXX
    \na.n. Angga Setia Pradana
    \n
    \nSetelah melakukan pembayaran, Silahkan lakukan konfirmasi dengan cara mengirimkan bukti transfer. Masa berlangganan akan aktif setelah proses pembayaran disetujui, dan akan berakhir dalam waktu 1 bulan.
    \nTerimakasih`,
  unsubscribe: `Halo kak {member_name},
    \nMohon maaf, layanan [Nama service] kamu telah dihentikan, dan kamu telah dikeluarkan dari grup.
    \nSilahkan lakukan pendaftaran kembali di halaman https://akunify.com jika ingin tetap menikmati layanan {service_name} kamu
    \n
    \nTerimakasih`,
}

export default watemplate
