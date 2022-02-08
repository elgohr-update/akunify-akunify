/**
 * Pattern of field on kanvas
 */
 import { isEmail, isWhatsapp, isName, isNumber } from '../../patterns'

 const pattern = {
   email: function (value: string, error: string): null | string {
     return isEmail(value) ? null : error
   },
   whatsAppEmail: function (value: string, error: string): null | string {
     return isEmail(value) || isWhatsapp(value) ? null : error
   },
   whatsAppOnly: function (value: string, error: string): null | string {
     return isWhatsapp(value) ? null : error
   },
   zeroValue: function (value: string | number, error: string): null | string {
     if (value === '0' || value === 0) {
       return error
     }

     return null
   },
   multiple: function (
     value: string,
     mod: number,
     error: string
   ): null | string {
     if (Number(value) % mod === 0) {
       return null
     }

     return error
   },
   isNotStartsWith: function (value: string, error: string): null | string {
     return value.startsWith('$') ? error : null
   },
   name: function (value: string, error: string): null | string {
     return isName(value) ? null : error
   },
   number: function (value: string, error: string): null | string {
     return isNumber(value) ? null : error
   },
   mod1k: function (value: string, error: string): null | string {
     return +value % 1000 > 0 ? error : null
   },
   isEqual: function (
     value: string,
     error: string,
     otherValue?: string
   ): null | string {
     return value === otherValue ? null : error
   },
 }

 export default pattern