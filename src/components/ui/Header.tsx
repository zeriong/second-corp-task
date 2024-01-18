'use client'

import Image from "next/image";

export const Header = () => {
    return (
        <header className='flex items-center bg-black p-3 shadow-[1px_2px_4px_2px_rgba(0,0,0,0.25)]'>
            <Image
                src='/assets/images/logo_sm.svg'
                width={95}
                height={32}
                alt="order_page_brand_logo"
            />
        </header>
    )
}