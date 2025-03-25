import React from 'react'
import Header from '@/lib/components/common/Header'

export default function layout({ children }) {
    return (
        <div className='w-full h-screen'>
            <div className='h-[10vh] min-h-[95px]'>
                <Header />
            </div>
            <div className='!h-[calc(100vh-95px)] flex justify-center overflow-y-auto px-5 py-2 md:px-10'>
                <div className='w-full max-w-[1100px] p-5 md:p-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}
