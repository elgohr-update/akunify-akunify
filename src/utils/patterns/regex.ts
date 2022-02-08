/* eslint-disable no-useless-escape */
export const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const regexName = /^[a-zA-Z '.-]{0,}$/
export const regexNumber = /^\d*$/
export const regexPhoneNumber = /^(\+62\d{8,15}|62\d{8,15}|0\d{8,15})$/