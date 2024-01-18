import React from 'react';

export default function ResultPageLayout(props: { params: any, children: React.ReactNode }) {
    return (
        <main className='flex justify-center items-center overflow-hidden h-full w-full'>
            {props.children}
        </main>
    )
}
