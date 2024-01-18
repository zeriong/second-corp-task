'use client'

import Image from "next/image";
import {useParams} from "next/navigation";

export const Header = () => {
    return (
        <header className='flex items-center bg-black p-3'>
            <Image
                src='/assets/images/logo_sm.svg'
                width={95}
                height={32}
                alt="logo"
            />
        </header>
    )
}