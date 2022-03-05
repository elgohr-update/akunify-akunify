import minMax from '../rules/minMax'
import pattern from '../rules/patterns'

const register = (
  value: string,
  otherValue?: string
): Record<string, unknown> => ({
  fullname: {
    rules: [
      {
        validation: minMax.required(value, 'Nama lengkap tidak boleh kosong.'),
      },
    ],
  },
  name: {
    rules: [
      {
        validation: minMax.required(value, 'Nama lengkap tidak boleh kosong.'),
      },
    ],
  },
  email: {
    rules: [
      { validation: minMax.required(value, 'Email tidak boleh kosong.') },
      { validation: pattern.email(value, 'Hanya diisi dengan format email.') },
      {
        validation: minMax.maxLength(
          50,
          value,
          'Email terlalu panjang (maksimal 50 karakter).'
        ),
      },
    ],
  },
  phone_number: {
    rules: [
      {
        validation: minMax.required(
          value,
          'Nomor HP/WhatsApp tidak boleh kosong.'
        ),
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

export default register
