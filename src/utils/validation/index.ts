import register from './schema/register'
import admin from './schema/admin'

export const returnSchema = (
  schema: string,
  value: string,
  otherValue?: string
): Record<string, any> | null => {
  switch (schema) {
    case 'register':
      return register(value, otherValue)
    case 'admin':
      return admin(value, otherValue)
    default:
      return null
  }
}

const validation = (
  schema: string,
  field: string,
  value: string,
  otherValue?: string
): string | undefined => {
  const schemaFunc = returnSchema(schema, value, otherValue)
  if (schemaFunc) {
    return schemaFunc[field].rules
      .filter((item: any) => {
        return item.validation !== null
      })
      .map((obj: any) => {
        return obj.validation
      })[0]
  }
}

export default validation
