import HeaderMain from '@/lib/components/common/HeaderMain'
import React from 'react'

export default function layout({ children }) {

    return (
        <main className="min-h-screen relative">
            <HeaderMain />
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1100px]'>
                    {children}
                </div>
            </div>
        </main>
    )
}
