"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { Popconfirm, Table } from 'antd'

import ImageView from '@/lib/components/display/ImageView'
import SearchInput from '@/lib/components/input/SearchInput'
import CustomPagination from '@/lib/components/input/CustomPagination'
import Button from '@/lib/components/display/Button'
import useApi from '@/lib/hooks/useApi'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import useToast from '@/lib/hooks/useToast'
import useDebounce from '@/lib/hooks/useDebounce'
import { deleteEvent, getEvents } from '@/lib/services/event'
import CreateAndUpdateEventModal from '@/lib/components/pages/events/admin/CreateAndUpdateEventModal'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import EventImage from '@/lib/components/common/EventImage'
import SelectInput from '@/lib/components/input/Select'

const status = [
    {
        value: "Not Started",
        label: "Not Started",
    },
    {
        value: "Inprogress",
        label: "Inprogress",
    },
    {
        value: "Completed",
        label: "Completed",
    },
    {
        value: "Cancelled",
        label: "Cancelled",
    }
]

const publish_status = [
    {
        value: true,
        label: "Published",
    },
    {
        value: false,
        label: "Not Published",
    },
]

export default function Page() {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [filters, setFilters] = useState({
        status: "",
        is_published: ""
    })
    const [modal, setModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null);

    const queryClient = useQueryClient()
    const { error, success } = useToast()
    const debouncedQuery = useDebounce(query, 300);

    const API_deleteEvent = useApi(deleteEvent)

    const { data, isLoading } = useQuery({
        queryKey: ["events-list", page, debouncedQuery, filters],
        queryFn: () => getEvents({ search: debouncedQuery, page, limit: 10, ...filters }),
    });


    const columns = [
        {
            title: "Event",
            render: (data) => (
                (
                    <Link href={`/events/${data?._id}`} className='flex flex-row gap-2 items-center'>
                        <EventImage event={data?.name} src={data?.image} />
                        <u>{data?.name}</u>
                    </Link>
                )
            ),
            key: 'name',
        },
        {
            title: "Event Type",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.event_type?.name}</p>
                </div>
            ),
            key: 'name',
        },
        {
            title: "Date",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.date}</p>
                </div>
            ),
            key: 'date',
        },
        {
            title: "Time",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.time}</p>
                </div>
            ),
            key: 'time',
        },
        {
            title: "Stage",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.stage.name}</p>
                </div>
            ),
            key: 'name',
        },
        {
            title: "Maxium number of participant",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.maxium_num_participants}</p>
                </div>
            ),
            key: 'maxium_num_participants',
        },
        {
            title: "Invigilator",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.invigilator?.full_name}</p>
                </div>
            ),
            key: 'full_name',
        },
        {
            title: "Status",
            render: (item) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{item?.status}</p>
                </div>
            ),
            key: 'status',
        },
        {
            title: "Action",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <button disabled={data?.is_published} className={`px-2 rounded-full py-[2px] bg-blue-primary text-white ${data?.is_published && "opacity-50"}`}>{data?.is_published ? "Published" : "Publish"}</button>
                    <AiFillEdit onClick={() => handleModal(data)} className='w-5 cursor-pointer h-5' />
                    <Popconfirm
                        title="Delete Event"
                        description="Are you sure you want to delete this event?"
                        onConfirm={() => handleDeleteEvent(data?._id)}
                        okText="Confirm"
                        cancelText="Cancel"
                        placement="leftBottom"

                    >
                        <button><MdDelete className='w-5 h-5' /></button>
                    </Popconfirm>

                </div>
            ),
            key: 'time',
        },
    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }

    const handleModal = (eventData = null) => {
        setSelectedEvent(eventData);
        setModal(!modal);
    };

    const handleDeleteEvent = async (id) => {
        try {
            const { isError } = await API_deleteEvent.request(id)
            if (isError) {
                error("Failed to delete event")
            } else {
                success("Event deleted successfully")
                queryClient.invalidateQueries(["events-list"])
            }
        } catch (error) {

        }
    }

    const handleFilter = (key, e) => {
        setFilters({
            ...filters,
            [key]: e.value
        })
    }

    const events = data?.data || [];
    const meta = data?.meta || {};

    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-fit text-start'>Events</p>

            <div className='w-3/4 flex justify-end gap-4'>
                <Button onClick={() => setModal(true)} additionalClass="w-32 !py-2">Add New</Button>
                <SelectInput options={status} disabled={isLoading} valueKey='value' labelKey='label' placeholder="Filter by status" onChange={(e) => handleFilter("status", e)} value={filters.status} />
                <SelectInput options={publish_status} disabled={isLoading} valueKey='value' labelKey='label' placeholder="Filter by publish status" onChange={(e) => handleFilter("is_published", e)} value={filters.is_published} />
                <CreateAndUpdateEventModal modal={modal} handlecloseModal={() => setModal(false)} data={selectedEvent} />
                <SearchInput onChange={(e) => setQuery(e.target.value)} value={query} />
            </div>
        </div>
        <div className='w-full'>
            <Table pagination={false} columns={columns} dataSource={events} />
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={meta?.total} />
    </div>)
}
