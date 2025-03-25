import React from 'react'
import ProfileImage from '../../common/ProfileImage'

export default function ResultCard() {
    return (
        <div className="flex hover:bg-slate-200 cursor-pointer justify-between px-3 py-2 bg-white items-center gap-1 rounded-lg border border-gray-100">
            <div className='flex gap-4 items-center'>
                <div className='w-16 text-[30px] text-secondary font-black h-16 flex justify-center items-center rounded-full'>
                    #1
                </div>
                <ProfileImage />
                <div>
                    <span className='text-gray-secondary text-base'>Andrea posted a new Tweet have a look</span>
                    <p className='text-xs text-gray-secondary mt-1'>• Arts • BA English</p>
                </div>
            </div>
        </div>
    )
}
