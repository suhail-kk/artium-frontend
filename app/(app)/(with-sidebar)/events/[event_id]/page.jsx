"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useParams, useRouter } from 'next/navigation'

import { Tabs } from 'antd'

import ImageView from '@/lib/components/display/ImageView'
import About from '@/lib/components/pages/eventDetails/About'
import Result from '@/lib/components/pages/eventDetails/Result'
import Reports from '@/lib/components/pages/eventDetails/Reports'
import Applicants from '@/lib/components/pages/eventDetails/Applicants'
import Attendance from '@/lib/components/pages/eventDetails/Attendance'


export default function page() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'about';

    const tabs = [
        {
            key: 'about',
            label: "About",
            children: <About />
        },
        {
            key: 'results',
            label: "Results",
            children: <Result />
        },
        {
            key: 'applicants',
            label: "Applicants",
            children: <Applicants />
        },
        {
            key: 'attendance',
            label: "Attendance",
            children: <Attendance />
        },
        {
            key: 'reports',
            label: "Reports",
            children: <Reports />
        }
    ]

    const handleTabChange = (key) => {
        router.push(`/events/${params.event_id}?tab=${key}`);
    };

    return (
        <div className=' w-full pt-5 md:pt-10 '>
            <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
                <ImageView width={50} height={50} imageStyle="h-[50px] w-[50px] object-cover rounded-lg" />
                <div className='w-full flex flex-col gap-1'>
                    <p className="w-full text-xl font-semibold flex items-center">
                        Poem making
                        <span className="ml-2 px-[10px] rounded-full leading-[20px] text-[8px]  tracking-wide text-white bg-green-primary">
                            Completed
                        </span>
                    </p>
                    <p className='text-gray-secondary text-xs'>
                        03 Applicants
                    </p>
                </div>
            </div>
            <div className='my-6 md:mt-10'>
                <Tabs
                    size="medium"
                    items={tabs}
                    activeKey={activeTab}
                    onChange={handleTabChange}
                />
            </div>
        </div>
    )
}
