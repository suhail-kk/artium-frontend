import React, { useState } from 'react'
import ReportCard from '../reports/ReportCard'
import CustomPagination from '../../input/CustomPagination'

export default function Reports() {
    const [page, setPage] = useState(1)

    const onPaginationChange = (page) => {
        setPage(page)
    }

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
            </div>  <div className='w-full flex justify-center mt-6'>
                <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={13} />
            </div>
        </div>
    )
}
