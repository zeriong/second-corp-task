'use client';

import {Submit} from '@/components/Submit';
import {totalOrderState} from '@/store/order/order.selectors';
import {useRecoilValue} from 'recoil';
import {numberSeparator} from '@/utils/common.utils';

export const OrderControl = () => {
    const totalState = useRecoilValue(totalOrderState);
        return (
        <form className='flex flex-col justify-between fixed left-0 bottom-0 w-full h-[170px] bg-white p-[25px] rounded-t-2xl shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-col items-end'>
                <div>
                    총 수량: {totalState.totalQuantity}개
                </div>
                <div>
                    총 가격: {numberSeparator(totalState.totalPrice)}원
                </div>
            </div>
            <Submit
                disabled={totalState.totalQuantity === 0}
            >
                주문하기
            </Submit>
        </form>
        )
}