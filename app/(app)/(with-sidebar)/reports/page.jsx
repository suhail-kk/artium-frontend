"use client"

import React, { useState } from 'react'

import ReportCard from '@/lib/components/pages/reports/ReportCard';
import CustomPagination from '@/lib/components/input/CustomPagination';

const reports = [
    {
        reported_user: {
            name: "Alice Johnson",
            team: "Design",
            department: "BFA Graphic Design",
        },
        reporting_user: {
            name: "John Smith",
            team: "Marketing",
            department: "BBA Marketing",
        },
        reason: "Inappropriate behavior during the event",
    },
    {
        reported_user: {
            name: "David Lee",
            team: "Tech Innovators",
            department: "BSc Computer Science",
        },
        reporting_user: {
            name: "Emily Davis",
            team: "Event Management",
            department: "BA Event Management",
        },
        reason: "Failure to follow event guidelines",
    },
    {
        reported_user: {
            name: "Sarah Kim",
            team: "Literature Club",
            department: "BA English",
        },
        reporting_user: {
            name: "Michael Brown",
            team: "Photography",
            department: "Diploma in Photography",
        },
        reason: "Disrespectful comments during the session",
    },
    {
        reported_user: {
            name: "Chris Green",
            team: "Music Club",
            department: "BA Music",
        },
        reporting_user: {
            name: "Olivia White",
            team: "Drama Society",
            department: "BA Performing Arts",
        },
        reason: "Use of prohibited items during the performance",
    },
    {
        reported_user: {
            name: "Jessica Wilson",
            team: "Science Club",
            department: "BSc Chemistry",
        },
        reporting_user: {
            name: "Daniel Thompson",
            team: "Tech Wizards",
            department: "BSc Computer Science",
        },
        reason: "Plagiarism in project submission",
    },
];

export default function Page() {
    const [page, setPage] = useState(1)

    const onPaginationChange = (page) => {
        setPage(page)
    }
    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Reports</p>
        </div>
        <div className='w-full grid grid-cols-1 gap-4'>
            {
                reports?.map((item, i) => (<ReportCard item={item} key={i} />))
            }
        </div>
        <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={reports?.length} />
    </div>)
}

