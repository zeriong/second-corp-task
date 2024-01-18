'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="w-full h-full flex justify-center items-center bg-black">
        <div className='flex flex-col items-center justify-center gap-12'>
          <Image
              src='assets/images/logo_lg.svg'
              width={150}
              height={51}
              alt="logo"
          />
          <Link href="/order" className='text-[25px] p-5 bg-white rounded-2xl cursor-pointer'>
            주문하러가기
          </Link>
        </div>
      </div>
  )
}
