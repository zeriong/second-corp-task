'use client';

import Image from 'next/image';
import {useEffect, useRef} from 'react';
import {useRouter} from 'next/navigation';
import {ordersState} from '@/store/order/order.atoms';
import {useResetRecoilState} from 'recoil';

export default function Page() {
    const router = useRouter();
    const resetOrdersState= useResetRecoilState(ordersState);

    useEffect(() => {
        // 주문 초기화
        resetOrdersState();
        // 3초 후 이동
        setTimeout(() => {
            router.push('/order');
        }, 3000);
    }, []);

    return (
        <div className='flex flex-col gap-3 items-center'>
            <Image
                src='/assets/icons/check_icon.svg'
                width={48}
                height={48}
                alt=''
            />
            <p>주문이 완료되었습니다.</p>
        </div>
    )
}