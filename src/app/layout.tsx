import '../styles/globals.css'
import type { Metadata } from 'next'
import React from 'react';
import RecoilRootProvider from "@/components/providers/RecoilProvider";

export const metadata: Metadata = {
  title: '반장창고',
  description: '2024년 (주) 두번째 프론트엔드 개발자 채용 과제',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className='flex items-center justify-center w-full h-full'>
      <RecoilRootProvider>
        <div className='relative flex flex-col w-full h-full pc:w-[350px] pc:h-[864px] bg-white overflow-hidden'>
          {props.children}
        </div>
      </RecoilRootProvider>
      </body>
      </html>
  )
}