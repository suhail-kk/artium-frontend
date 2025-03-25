"use client"

import React from 'react'
import ProgramCard from '@/lib/components/pages/events/ProgramCard'

export default function Page() {
    return (
        <div className='w-full h-full items-center flex justify-center'>
            <div className='w-full h-full flex flex-col mt-10 md:mt-16 gap-6 max-w-[1100px]'>
                <ProgramCard />
                <ProgramCard />
                <ProgramCard />
            </div>
        </div>
    )
}
