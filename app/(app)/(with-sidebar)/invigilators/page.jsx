"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { Popconfirm, Table } from 'antd'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useQuery, useQueryClient } from '@tanstack/react-query'

import useToast from '@/lib/hooks/useToast';
import useDebounce from '@/lib/hooks/useDebounce';
import Loader from '@/lib/components/display/Loader'
import Button from '@/lib/components/display/Button'
import ImageView from '@/lib/components/display/ImageView'
import SearchInput from '@/lib/components/input/SearchInput'
import CustomPagination from '@/lib/components/input/CustomPagination'
import { getInvigilators } from '@/lib/services/invigilators';
import ProfileImage from '@/lib/components/common/ProfileImage';
import InviteModal from '@/lib/components/pages/invigilators/InviteModal';


export default function Page() {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false)

    const debouncedQuery = useDebounce(query, 300);

    const { data, isLoading } = useQuery({
        queryKey: ["invigilators-list", page, debouncedQuery],
        queryFn: () => getInvigilators({ search: debouncedQuery, page, limit: 10 }),
    });

    const columns = [
        {
            title: "Name",
            render: (data) => (
                (
                    <Link href={""} className='flex flex-row gap-2 items-center'>
                        <ProfileImage user_name={data?.invigilator?.full_name} />
                        <u>{data?.invigilator?.full_name}</u>
                    </Link>
                )
            ),
            key: 'name',
        },
        {
            title: "No. of assigned events",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{data?.no_of_assigned_events}</p>
                </div>
            ),
            key: 'no_of_assigned_events',
        },
        {
            title: "No. of completed events",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{data?.no_of_completed_events}</p>
                </div>
            ),
            key: 'no_of_completed_events',
        },
        {
            title: "Invite status",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p className={`px-2 py-[1px] text-xs rounded-full text-white ${data?.status ? 'bg-green-700' : 'bg-orange-500'}`}>{data?.status ? 'Accepted' : 'Invited'}</p>
                </div>
            ),
        },
    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }

    const invigilators = data?.data || [];
    const meta = data?.meta || {};


    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Invigilators</p>

            <div className='w-full flex justify-end gap-4'>
                <Button onClick={() => setModal(true)} additionalClass="w-32 !py-2">Invite</Button>
                <InviteModal modal={modal} handlecloseModal={() => setModal(false)} />
                <SearchInput onChange={(e) => setQuery(e.target.value)} value={query} />
            </div>
        </div>
        {
            isLoading ? <Loader /> : (
                <> <div className='w-full'>
                    <Table pagination={false} columns={columns} dataSource={invigilators} />
                </div>
                    <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={meta?.total} />
                </>
            )
        }
    </div>)
}
