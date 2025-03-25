import React, { useState } from 'react'
import ResultCard from '../events/ResultCard'
import CustomPagination from '../../input/CustomPagination'

export default function Achievements() {
    const [page, setPage] = useState(false)

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
            <div className='mt-6 w-full flex justify-center'>
                <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={12} />
            </div>
        </div>
    )
}
