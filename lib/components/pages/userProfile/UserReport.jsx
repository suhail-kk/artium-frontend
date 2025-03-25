import React, { useState } from 'react'
import ReportCard from '../reports/ReportCard'
import CustomPagination from '../../input/CustomPagination'

export default function UserReport() {
    const [page, setPage] = useState(false)

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (
        <div>
            <div className='grid grid-cols-1 gap-4'>
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
            </div>
            <div className='mt-6 w-full flex justify-center'>
                <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={12} />
            </div>
        </div>
    )
}
