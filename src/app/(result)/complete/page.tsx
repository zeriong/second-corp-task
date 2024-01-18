'use client';

import Image from 'next/image';
import {useEffect, useRef} from 'react';
import {useRouter} from 'next/navigation';
import {ordersState} from '@/store/order/order.atoms';
import {useResetRecoilState} from 'recoil';

export default function Page() {
    const router = useRouter();
    const resetOrdersState= useResetRecoilState(ordersState);

    // 주문 성공 시 주문 초기화 이후 3초 경과 시 주문 페이지로 이동
    useEffect(() => {
        resetOrdersState(); // 주문 초기화
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
                alt='check_icon'
            />
            <p>주문이 완료되었습니다.</p>
        </div>
    )
}