'use server'

import {redirect} from "next/navigation";
import {sleep} from "@/utils/common.utils";
import {TOrder} from "@/store/order/order.atoms";

export const orderAction = async (orders: TOrder[]) => {
    // 주문 처리로직 작성...
    await sleep(1500) // 처리 지연 연출

    // result 를 처리 결과로 가정
    const result = true;

    if (result) {
        redirect('/complete');
    } else {
        redirect('/error');
    }
}