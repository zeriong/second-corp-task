'use client';

import {TItem} from "@/store/order/order.atoms";
import {orderQuantityState} from '@/store/order/order.selectors';
import {useRecoilState} from 'recoil';
import {numberSeparator} from '@/utils/common.utils';

export const OrderListItem = ({ item } : { item: TItem }) => {
    const [quantity, addQuantity] = useRecoilState(orderQuantityState(item));
    return (
        <li className={`flex gap-5 py-[8px] px-[12px] rounded-[15px] border border-black/30 ${quantity > 0 ? 'bg-[#F75A2F] bg-opacity-10' : ''}`}>
            <div className='w-[62px] h-[62px] bg-[#D9D9D9]'></div>
            <div className='grow flex flex-col justify-between'>
                <div className='flex gap-[8px] items-center h-[22px] w-full'>
                    <p className='text-[18px]'>{item.name}</p>
                    {item.event &&
                        <div className='rounded-[10px] bg-event-orange text-white font-thin px-[8px] py-[3px] text-[12px]'>이벤트</div>
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <div className="flex gap-[4px]">
                        <button onClick={() => addQuantity(-1)}>
                            -
                        </button>
                        <p className='ml-[1px]'>
                        {quantity}
                        </p>
                        <button onClick={() => addQuantity(+1)}>
                            +
                        </button>
                    </div>
                    <p>{numberSeparator(item.price)}원</p>
                </div>
            </div>
        </li>
    )
}