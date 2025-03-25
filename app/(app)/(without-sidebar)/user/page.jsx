"use client"

import React from 'react'
import ImageView from '@/lib/components/display/ImageView'

export default function Page() {
    return (
        <div className='p-5 md:p-10 w-full flex justify-center'>
            <div className='w-full max-w-[1100px]'>
                <ImageView src='/assets/images/profile/cover.jpg' imageStyle='w-full h-[150px] object-cover' />
            </div>
        </div>
    )
}
