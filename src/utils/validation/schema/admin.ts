import minMax from '../rules/minMax'
import pattern from '../rules/patterns'

const admin = (
  value: string,
  otherValue?: string
): Record<string, unknown> => ({
  service_id: {
    rules: [
      {
        validation: minMax.required(value, 'Layanan tidak boleh kosong.'),
      },
    ],
  },
  phone_number: {
    rules: [
      {
        validation: minMax.required(value, 'Nomor HP tidak boleh kosong.'),
      },
      {
        validation: pattern.whatsAppEmail(
          value,
          'Hanya diisi dengan nomor Whatsapp.'
        ),
      },
      {
        validation: minMax.maxLength(
          15,
          value,
          'Nomor Whatsapp terlalu panjang (maksimal 15 karakter).'
        ),
      },
    ],
  },
})

export default admin
