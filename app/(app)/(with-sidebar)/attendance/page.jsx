"use client"

import React, { useState } from 'react'

import { Table } from 'antd'

import CustomPagination from '@/lib/components/input/CustomPagination'
import SearchInput from '@/lib/components/input/SearchInput'
import Link from 'next/link'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import useToast from '@/lib/hooks/useToast'
import useDebounce from '@/lib/hooks/useDebounce'
import useApi from '@/lib/hooks/useApi'
import { deleteAttendance, getAttendance } from '@/lib/services/attendence'
import Button from '@/lib/components/display/Button'
import MarkAttendanceModal from '@/lib/components/pages/attendance/MarkAttendanceModal'

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
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null);

    const queryClient = useQueryClient()
    const { error, success } = useToast()
    const debouncedQuery = useDebounce(query, 300);

    const API_deleteAttendance = useApi(deleteAttendance)

    const { data, isLoading } = useQuery({
        queryKey: ["attendance-list", page, debouncedQuery],
        queryFn: () => getAttendance({ search: debouncedQuery, page, limit: 10 }),
    });

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

    const handleModal = (eventData = null) => {
        setSelectedEvent(eventData);
        setModal(!modal);
    };

    const handleDeleteAttendance = async (id) => {
        try {
            const { isError } = await API_deleteAttendance.request(id)
            if (isError) {
                error("Failed to delete attendance data")
            } else {
                success("Attendance deleted successfully")
                queryClient.invalidateQueries(["attendance-list"])
            }
        } catch (error) {

        }
    }

    const meta = data?.meta || {};
    const attendance_data = data?.data || [];

    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Attendance</p>
            <div className='w-3/4 flex justify-end gap-4'>
                <Button onClick={() => setModal(true)} additionalClass="w-32 !py-2">Add New</Button>
                <SearchInput onChange={(e) => setQuery(e.target.value)} value={query} />
                <MarkAttendanceModal modal={modal} handlecloseModal={() => setModal(false)} data={selectedEvent} />
            </div>
        </div>
        <div className='w-full'>
            <Table pagination={false} columns={columns} dataSource={attendance_data} />
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={meta?.total} />
    </div>)
}
