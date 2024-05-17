import React from 'react';
import { useState } from "react";

type Props = {
    title: string,
    children: React.ReactNode
}

function InputAccordion({ title, children }: Props) {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className=''>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='w-full flex justify-between'>
                <span className='font-semibold'>{title}</span>
                <span className='text-xl font-bold'>{!accordionOpen ? "+" : "-"}</span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out text-sm ${accordionOpen ? `grid-rows-[1fr] opacity-100` : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default InputAccordion