"use client"

import React, { useState } from 'react'

import { Table } from 'antd';

import SearchInput from '@/lib/components/input/SearchInput';
import CustomPagination from '@/lib/components/input/CustomPagination';
import Link from 'next/link';
import ImageView from '@/lib/components/display/ImageView';

const results = [
    {
        id: 1,
        event: "Poem Writing",
        first: {
            name: "Suhail",
            team: "Science",
            department: "BSc Computer Science",
        },
        second: {
            name: "Anya",
            team: "Literature",
            department: "BA English",
        },
        third: {
            name: "Ravi",
            team: "Fine Arts",
            department: "BFA Painting",
        },
    },
    {
        id: 2,
        event: "Debate Competition",
        first: {
            name: "Anya",
            team: "Literature",
            department: "BA English",
        },
        second: {
            name: "Ravi",
            team: "Fine Arts",
            department: "BFA Painting",
        },
        third: {
            name: "Mira",
            team: "Tech Wizards",
            department: "BSc Computer Science",
        },
    },
    {
        id: 3,
        event: "Art Exhibition",
        first: {
            name: "Ravi",
            team: "Fine Arts",
            department: "BFA Painting",
        },
        second: {
            name: "Mira",
            team: "Tech Wizards",
            department: "BSc Computer Science",
        },
        third: {
            name: "Aryan",
            team: "Harmony",
            department: "BA Music",
        },
    },
    {
        id: 4,
        event: "Coding Hackathon",
        first: {
            name: "Mira",
            team: "Tech Wizards",
            department: "BSc Computer Science",
        },
        second: {
            name: "Aryan",
            team: "Harmony",
            department: "BA Music",
        },
        third: {
            name: "Suhail",
            team: "Science",
            department: "BSc Computer Science",
        },
    },
    {
        id: 5,
        event: "Music Battle",
        first: {
            name: "Aryan",
            team: "Harmony",
            department: "BA Music",
        },
        second: {
            name: "Suhail",
            team: "Science",
            department: "BSc Computer Science",
        },
        third: {
            name: "Anya",
            team: "Literature",
            department: "BA English",
        },
    },
];


export default function Page() {
    const [page, setPage] = useState(1)

    const columns = [
        {
            title: "Event",
            render: (data) => (
                (
                    <Link href={""} className='flex flex-row gap-2 items-center'>
                        <ImageView imageStyle="h-7 w-7 object-cover rounded-full" />
                        <u>{data?.event}</u>
                    </Link>
                )
            ),
            key: 'event',
        },
        {
            title: "First place",
            render: (item) => (
                <div className='flex flex-col'>
                    <p className="font-semibold">{item?.first?.name}</p>
                    <p className='text-xs text-gray-secondary'>• {item?.first?.team} • {item?.first?.department}</p>
                </div>
            ),
            key: 'first',
        },
        {
            title: "Second place",
            render: (item) => (
                <div className='flex flex-col'>
                    <p className="font-semibold">{item?.second?.name}</p>
                    <p className='text-xs text-gray-secondary'>• {item?.second?.team} • {item?.second?.department}</p>
                </div>
            ),
            key: 'second',
        },
        {
            title: "Third place",
            render: (item) => (
                <div className='flex flex-col'>
                    <p className="font-semibold">{item?.third?.name}</p>
                    <p className='text-xs text-gray-secondary'>• {item?.third?.team} • {item?.third?.department}</p>
                </div>
            ),
            key: 'third',
        },
        {
            title: "Actions",
            render: () => (
                <div className='flex flex-row gap-2 items-center'>
                    <Link href={`/events/2?tab=results`}><u>View details</u></Link>
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
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Results</p>
            <SearchInput />
        </div>
        <div className='w-full'>
            <Table pagination={false} columns={columns} dataSource={results} />
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={results?.length} />
    </div>)
}
