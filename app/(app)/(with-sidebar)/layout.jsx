import React from 'react'
import SideBar from '@/lib/components/common/SideBar'
import Header from '@/lib/components/common/Header'

export default function layout({ children }) {
    return (
        <div className='flex'>
            <div className='hidden md:block'>
                <SideBar />
            </div>
            <div className='relative overflow-y-hidden w-full'>
                <div className='h-[10vh] min-h-[95px]'>
                    <Header />
                </div>
                <div className='!h-[calc(100vh-95px)] overflow-y-auto px-5 py-2 md:px-10'>{children}</div>
            </div>
        </div>
    )
}
