import React from 'react';
import {Header} from "@/components/ui/Header";

export default function PageLayout(props: { params: any, children: React.ReactNode }) {

    return (
        <>
            <Header/>
            <main className='grow overflow-hidden'>
                {props.children}
            </main>
        </>
    )
}
