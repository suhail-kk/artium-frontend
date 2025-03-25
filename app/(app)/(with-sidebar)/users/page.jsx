"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { Table } from 'antd'
import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/lib/services/users'
import Loader from '@/lib/components/display/Loader'
import RoleLabel from '@/lib/components/common/RoleLabel'
import SearchInput from '@/lib/components/input/SearchInput'
import ProfileImage from '@/lib/components/common/ProfileImage'
import CustomPagination from '@/lib/components/input/CustomPagination'

export default function Page() {
    const [page, setPage] = useState(1)

    const { data, isLoading } = useQuery({
        queryKey: ["users-list", page],
        queryFn: getUsers,
    });


    const columns = [
        {
            title: "Full name",
            render: (data) => (
                (
                    <Link href={`/users/${data?._id}`} className='flex flex-row gap-2 items-center'>
                        <ProfileImage user_name={data?.full_name} />
                        <u>{data?.full_name}</u>
                    </Link>
                )
            ),
            key: 'applicant',
        },
        {
            title: "Email",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.email}</p>
                </div>
            ),
            key: 'email',
        },
        {
            title: "User Type",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <RoleLabel role={item?.user_role?.name} />
                </div>
            ),
            key: 'event',
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
            title: "Actions",
            render: () => (
                <div className='flex flex-row gap-2 items-center'>
                    <Link href={`/users/${data?._id}`}><u>View profile</u></Link>
                </div>
            ),
            key: 'department',
        },

    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Users</p>
            <SearchInput />
        </div>
        {
            isLoading ? <Loader /> :
                <>
                    <div className='w-full'>
                        <Table pagination={false} columns={columns} dataSource={data?.data?.data?.data} />
                    </div>
                    <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={data?.length} />
                </>
        }
    </div>)
}
