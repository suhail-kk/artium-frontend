"use client"

import React, { useState } from 'react'

import { Table } from 'antd'

import CustomPagination from '@/lib/components/input/CustomPagination'
import SearchInput from '@/lib/components/input/SearchInput'
import Link from 'next/link'

const data = [
    {
        id: 1,
        total: 13,
        abscendees: 1,
        attendeese: 12,
        event: "English poem writing"
    },
    {
        id: 2,
        id: 1,
        total: 13,
        abscendees: 1,
        attendeese: 12,
        event: "Kuchippudi"
    },
    {
        id: 3,
        id: 1,
        total: 13,
        abscendees: 1,
        attendeese: 12,
        event: "English poem writing"
    },
    {
        id: 4,
        id: 1,
        total: 13,
        abscendees: 1,
        attendeese: 12,
        event: "Photography"
    },
    {
        id: 5,
        id: 1,
        total: 13,
        abscendees: 1,
        attendeese: 12,
        event: "English story writing"
    },
]
export default function Page() {
    const [page, setPage] = useState(1)

    const columns = [
        {
            title: "Event",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.event}</p>
                </div>
            ),
            key: 'event',
        },
        {
            title: "Attendeese",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.attendeese}</p>
                </div>
            ),
            key: 'attendeese',
        },
        {
            title: "Absenteese",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.abscendees}</p>
                </div>
            ),
            key: 'abscendees',
        },
        {
            title: "Total",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.total}</p>
                </div>
            ),
            key: 'total',
        },
        {
            title: "Actions",
            render: () => (
                <div className='flex flex-row gap-2 items-center'>
                    <Link href={`/events/2?tab=attendance`}><u>View details</u></Link>
                </div>
            ),
            key: 'view-details',
        },

    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>attendance</p>
            <SearchInput />
        </div>
        <div className='w-full'>
            <Table pagination={false} columns={columns} dataSource={data} />
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={data?.length} />
    </div>)
}
