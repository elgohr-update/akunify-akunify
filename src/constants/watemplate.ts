const watemplate = {
  newSubscribtion: `Halo kak {member_name},\n\nTerimakasih atas pembayarannya yang telah dilakukan.\n\nLayanan {service_name} kamu terhitung aktif setelah Admin mengirimkan akses akun sharing ataupun link invitation paling lambat 1x24 Jam dari sekarang.`,
  successPayment: `Halo kak {member_name},\n\nTerimakasih atas pembayarannya yang telah dilakukan.\nLayanan {service_name} kamu akan aktif hingga tanggal *{active_date}*`,
  pendingPayment: `Halo kak {member_name},\n\nTerimakasih telah berlangganan akunify.com.\nSegera lakukan pembayaran untuk menikmati layanan {service_name} kamu dengan detail sebagai berikut :\nNominal Pembayaran : *_{payment_amount}_*\n\n*_BCA_*\nNo.Rek : 5710159256\na.n. Angga Setia Pradana\n\n*_Mandiri_*\nNo.Rek : 1640004345304\na.n. Angga Setia Pradana\n\n*_Bank Jago_*\nNo.Rek : 105459400976\na.n. Angga Setia Pradana\n\n*_BTPN / Jenius_*\nNo.Rek : 90011179560\na.n. Angga Setia Pradana\n\nSetelah melakukan pembayaran, Silahkan lakukan konfirmasi dengan cara mengirimkan bukti transfer. Masa berlangganan akan aktif setelah proses pembayaran disetujui, dan akan berakhir dalam waktu 1 bulan.\n\nTerimakasih`,
  unsubscribe: `Halo kak {member_name},\n\nMohon maaf, layanan {service_name} kamu telah dihentikan, dan kamu telah dikeluarkan dari grup.\nSilahkan lakukan pendaftaran kembali di halaman https://akunify.com jika ingin tetap menikmati layanan {service_name} kamu\n\nTerimakasih`,
}

export default watemplate
