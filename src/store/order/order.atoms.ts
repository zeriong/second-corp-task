import {atom} from 'recoil';

export type TItem = {
    id: string
    name: string
    event: number
    materialType: number
    price: number
}

export type TOrder = {
    itemId: string
    price: number
    quantity: number
}

export type TOrdersState = TOrder[]

export const ordersState = atom<TOrdersState>({
    key: 'orders',
    default: [],
});