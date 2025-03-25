import React from 'react'
import Card from '@/lib/components/pages/downloads/Card'

const items = [
    {
        title: "Events List"
    },
    {
        title: "Users List"
    },
    {
        title: "Applicants List"
    },
    {
        title: "Winners List"
    },
    {
        title: "attendance List"
    },
]

export default function Page() {
    return (
        <div className='w-full mt-4 flex flex-col gap-4 items-center'>
            <div className='w-full flex justify-between items-center'>
                <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Downloads</p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    items?.map((item) => (<Card item={item} />))
                }
            </div>
        </div>
    )
}
