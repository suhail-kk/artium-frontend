import React, { useState } from 'react'
import ApplicantCard from './ApplicantCard'
import SelectInput from '../../input/Select'
import CustomPagination from '../../input/CustomPagination'

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


export default function Applicants() {
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({
        team: options[0].value,
        department: options[0]?.value
    })

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (
        <div>
            <div className='w-full flex justify-end gap-4'>
                <div className='w-[150px] mb-4'>
                    <SelectInput
                        options={options}
                        value={filters?.team}
                        labelKey="label"
                        valueKey="value"
                        onChange={(selectedValue) => {
                            setFilters((prev) => ({ ...prev, team: selectedValue }))
                        }}
                    />
                </div>
                <div className='w-[150px]'>
                    <SelectInput
                        options={options}
                        value={filters?.department}
                        labelKey="label"
                        valueKey="value"
                        onChange={(selectedValue) => {
                            setFilters((prev) => ({ ...prev, department: selectedValue }))
                        }}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
            </div>
            <div className='w-full flex justify-center mt-6'>
                <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={options?.length} />
            </div>
        </div>
    )
}
