import { useFormStatus } from "react-dom";
import React from 'react';

export const Submit = (
    props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        children?: React.ReactNode,
    }
) => {
    const status = useFormStatus();

    return (
        <button
            {...props}
            type="submit"
            disabled={props.disabled || status.pending}
            className={`text-white p-[10px] w-full ${props.className} ${(props.disabled || status.pending) ? 'bg-[#C1C1C1]' : 'bg-black'}`}
        >
            { status.pending ? '로딩중...' : props.children }
        </button>
    )
}