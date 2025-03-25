import React, { useState } from 'react'
import CustomPagination from '../../input/CustomPagination'
import EventCard from '../events/EventCard'

export default function UpcomingEvent() {
    const [page, setPage] = useState(false)

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className='mt-6 w-full flex justify-center'>
                <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={12} />
            </div>
        </div>
    )
}
