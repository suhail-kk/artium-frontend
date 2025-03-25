"use client"

import React, { useState } from 'react'

import CustomPagination from '@/lib/components/input/CustomPagination';
import NotificationCard from '@/lib/components/pages/events/NotificationCard';
import SelectInput from '@/lib/components/input/Select';
import Button from '@/lib/components/display/Button';

const notifications = [
    {
        title: ""
    }
]

const options = [
    {
        label: "New",
        value: "new"
    },
    {
        label: "Read",
        value: "read"
    },
    {
        label: "Unread",
        value: "unread"
    },
]

const types = [
    {
        label: "Registration",
        value: "new"
    },
    {
        label: "New user onboarded",
        value: "onboard"
    },
    {
        label: "New Applicant registered",
        value: "registered"
    },
    {
        label: "User reported an event",
        value: "reported"
    },
    {
        label: "User applied for a competition",
        value: "applied"
    },
]

export default function Page() {
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({
        status: options[0].value,
        filter_type: types[0]?.value
    })


    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Notifications</p>
            <div className='w-fit flex gap-3 items-center'>
                <div className='w-[150px]'>
                    <SelectInput
                        options={types}
                        value={filters?.filter_type}
                        labelKey="label"
                        valueKey="value"
                        onChange={(selectedValue) => {
                            setFilters((prev) => ({ ...prev, filter_type: selectedValue }))
                        }}
                    />
                </div>
                <div className='w-[150px]'>
                    <SelectInput
                        options={options}
                        value={filters?.status}
                        labelKey="label"
                        valueKey="value"
                        onChange={(selectedValue) => {
                            setFilters((prev) => ({ ...prev, status: selectedValue }))
                        }}
                    />
                </div>

                <Button additionalClass="!rounded-xl w-32">Notify</Button>
            </div>
        </div>
        <div className='w-full grid grid-cols-1 gap-4'>
            {
                notifications?.map((item, i) => (<NotificationCard item={item} key={i} />))
            }
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={notifications?.length} />
    </div>)
}

