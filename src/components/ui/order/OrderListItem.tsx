'use client';

import {TItem} from "@/store/order/order.atoms";

export const OrderListItem = ({ item } : { item: TItem }) => {
    return (
        <li className='flex gap-5 py-[8px] px-[12px] rounded-2xl border border-gray-300'>
            <div className='w-[62px] h-[62px] bg-[#D9D9D9]'></div>
            <div className='grow flex flex-col justify-between'>
                <div className='flex gap-[8px] items-center h-[22px] w-full'>
                    <p className='text-[18px]'>{item.name}</p>
                    {item.event &&
                        <div className='rounded-[10px] bg-event-orange text-white font-thin px-[8px] py-[3px] text-[12px]'>이벤트</div>
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-[3px]'>
                        <button>
                            -
                        </button>
                        <p>
                            {0}
                        </p>
                        <button>
                            +
                        </button>
                    </div>
                    <p>{0}원</p>
                </div>
            </div>
        </li>
    )
}