"use client"

import React from 'react'

import ProfileImage from './ProfileImage'

export default function Header() {

    return (
        <div className='w-full gap-3 flex items-center justify-end  h-full pr-10 border-b border-bottom-gray-200'>
            <ProfileImage />
            <div className='cursor-pointer'>
                <p className='text-primary text-base font-semibold'>Jhon doe</p>
                <p className='text-secondary text-md'>Admin</p>
            </div>
        </div>
    )
}