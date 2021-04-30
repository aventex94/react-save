import { ADD_PRODUCT } from './types'

export const showProducts = (products) =>({
    payload:products,
    type: ADD_PRODUCT,
})
