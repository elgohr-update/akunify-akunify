import { storageFactory } from './storageFactory'

export const local = storageFactory(() => localStorage)
export const session = storageFactory(() => sessionStorage)
