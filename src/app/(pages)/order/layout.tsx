import type { Metadata } from 'next'
import React from 'react';
import {OrderControl} from "@/components/ui/order/OrderControl";


export const metadata: Metadata = {
    title: '반장창고 - 주문',
}

export default async function OrderLayout(props: { children: React.ReactNode }) {
    return (
        <div className='w-full h-full'>
            <div className="h-full pb-[160px]">
                <div className="h-full overflow-y-auto pb-[10px]">
                    {props.children}
                </div>
            </div>
            <div className="transform">
                <OrderControl/>
            </div>
        </div>
    )
}
