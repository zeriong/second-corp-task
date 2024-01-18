'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function Page() {
    const router = useRouter();

    // 주문 실패 시 주문 초기화 하지 않고 3초 후 주문 페이지로 이동
    useEffect(() => {
        setTimeout(() => {
            router.push('/order');
        }, 3000);
    }, []);

    return (
        <div className='text-center'>
            주문에 실패하였습니다.<br/>
            다시 시도해주세요.
        </div>
    )
}