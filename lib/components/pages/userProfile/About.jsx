import React from 'react'

export default function About({ data }) {
    console.log(data)

    return (
        <ul className='flex flex-col gap-4 my-4'>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Gender:</span> Male
            </li>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Phone number:</span> 982211242131
            </li>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Email:</span> {data?.email}
            </li>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Team:</span> Arts
            </li>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Department:</span> BA English
            </li>
            <li className='text-gray-secondary'>
                <span className='font-semibold'>Joined date:</span> 12:30
            </li>

            <li className='text-gray-secondary'>
                <span className='font-semibold'>User status:</span> Arun c
            </li>

        </ul>
    )
}
