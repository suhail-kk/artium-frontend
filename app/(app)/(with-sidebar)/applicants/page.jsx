"use client"

import React, { useState } from 'react'

import { Table } from 'antd'
import { MdOutlineDelete } from "react-icons/md";

import CustomPagination from '@/lib/components/input/CustomPagination'
import SearchInput from '@/lib/components/input/SearchInput'
import Link from 'next/link'
import ImageView from '@/lib/components/display/ImageView'

const data = [
    {
        id: 1,
        team: "Arts",
        full_name: "Suhail KK",
        department: "BA English",
        event: "English poem writing"
    },
    {
        id: 2,
        team: "Arts",
        full_name: "Nihal Roshan PC",
        department: "BA English",
        event: "Kuchippudi"
    },
    {
        id: 3,
        team: "Arts",
        full_name: "Imthiyaz p",
        department: "BA English",
        event: "English poem writing"
    },
    {
        id: 4,
        team: "Science",
        full_name: "Fayis p",
        department: "BSC CS",
        event: "Photography"
    },
    {
        id: 5,
        team: "Commerce",
        full_name: "Muzammil KT",
        department: "Bcom",
        event: "English story writing"
    },
]
export default function Page() {
    const [page, setPage] = useState(1)

    const columns = [
        {
            title: "Applicant",
            render: (data) => (
                (
                    <Link href={""} className='flex flex-row gap-2 items-center'>
                        <ImageView imageStyle="h-7 w-7 object-cover rounded-full" />
                        <u>{data?.full_name}</u>
                    </Link>
                )
            ),
            key: 'applicant',
        },
        {
            title: "Team",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.team}</p>
                </div>
            ),
            key: 'team',
        },
        {
            title: "Department",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.department}</p>
                </div>
            ),
            key: 'department',
        },
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
            title: "Actions",
            render: () => (
                <div className='flex flex-row gap-2 items-center'>
                    <MdOutlineDelete className='w-5 h-5 cursor-pointer' />
                </div>
            ),
            key: 'actions',
        },

    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Applicants</p>
            <SearchInput />
        </div>
        <div className='w-full'>
            <Table pagination={false} columns={columns} dataSource={data} />
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={data?.length} />
    </div>)
}
