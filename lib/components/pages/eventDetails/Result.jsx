import React from 'react'
import ResultCard from './ResultCard'

export default function Result() {
    return (
        <div className='flex flex-col gap-4'>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
        </div>
    )
}
