import React, { useState } from 'react'
import Button from '../../display/Button'
import ImageView from '../../display/ImageView'
import Link from 'next/link'

export default function ReportCard({ item }) {
    const [showFullReason, setShowFullReason] = useState(false)

    const isLongReason = item?.reason?.length > 700
    const reasonText = showFullReason || !isLongReason
        ? item?.reason
        : `${item?.reason?.substring(0, 700)}...`

    return (
        <div className='relative w-full flex flex-col p-5 rounded-lg border border-gray-primary'>
            <div className='flex lg:flex-wrap gap-y-4 gap-x-10'>
                <div>
                    <p className='text-lg mb-2'>Reported By:</p>
                    <Link href="">
                        <div className='flex gap-4 items-center'>
                            <ImageView imageStyle='w-10 h-10 rounded-full' />
                            <div>
                                <p>{item?.reported_user?.name}</p>
                                <p className='text-xs text-gray-secondary'>• {item?.reported_user?.team} • {item?.reported_user?.department}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <p className='text-lg mb-2'>Reported User:</p>
                    <Link href="">
                        <div className='flex gap-4 items-center'>
                            <ImageView imageStyle='w-10 h-10 rounded-full' />
                            <div>
                                <p>{item?.reporting_user?.name}</p>
                                <p className='text-xs text-gray-secondary'>• {item?.reporting_user?.team} • {item?.reporting_user?.department}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <p className='text-lg mb-2'>Reported Event:</p>
                    <Link href="">
                        <div className='flex gap-4 items-center'>
                            <ImageView imageStyle='w-10 h-10 rounded-lg' />
                            <div>
                                <p>Poem making</p>
                                <p className='text-xs text-gray-secondary'>• Stage 01 • 3hr ago</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <p className='text-lg mb-1 mt-4'>Reason</p>
            <p className='text-base text-gray-secondary'>{reasonText} {
                isLongReason && (
                    <span className='text-blue-primary text-xs font-semibold cursor-pointer' onClick={() => setShowFullReason(!showFullReason)}> {showFullReason ? 'See Less' : 'See More'}</span>
                )
            }</p>

            <div className='absolute top-4 right-4'>
                <Button type='blue'>Mark as read</Button>
            </div>
        </div>
    )
}
