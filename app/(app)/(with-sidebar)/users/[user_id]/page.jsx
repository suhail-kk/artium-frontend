"use client"

import React from 'react'
import { Tabs } from 'antd'
import ProfileImage from '@/lib/components/common/ProfileImage'
import About from '@/lib/components/pages/userProfile/About'
import Achievements from '@/lib/components/pages/userProfile/Achievements'
import UpcomingEvent from '@/lib/components/pages/userProfile/UpcomingEvent'
import AttendedEvents from '@/lib/components/pages/userProfile/AttendedEvents'
import UserReport from '@/lib/components/pages/userProfile/UserReport'
import Button from '@/lib/components/display/Button'
import { usePathname } from 'next/navigation'
import { getUserById } from '@/lib/services/users'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/lib/components/display/Loader'
import RoleLabel from '@/lib/components/common/RoleLabel'



export default function page() {
    const pathname = usePathname()
    const id = pathname.split("/").pop();

    const { data, isLoading } = useQuery({
        queryKey: ["users-info", id],
        queryFn: () => getUserById({ id }),
        enabled: !!id,
    });

    const tabs = [
        {
            key: 'user-info',
            label: "User info",
            children: <About data={data} />
        },
        {
            key: 'achievements',
            label: "Achievements",
            children: <Achievements />
        },
        {
            key: 'upcomingevent',
            label: "Upcoming events",
            children: <UpcomingEvent />
        },
        {
            key: 'participation',
            label: "Completed events",
            children: <AttendedEvents />
        },
        {
            key: 'reports',
            label: "Reports",
            children: <UserReport />
        }
    ]


    return (
        <div className=' w-full pt-5 md:pt-10 '>
            {
                isLoading || !id ? <Loader /> :
                    <>
                        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>

                            <div className='w-fit'>
                                <ProfileImage user_name={data?.full_name} />
                            </div>

                            <div className='w-full flex flex-col gap-1'>
                                <p className="w-full text-xl font-semibold flex items-center">
                                    {data?.full_name}
                                    <span className='ml-2'> <RoleLabel role={data?.user_role?.name} /></span>
                                </p>
                                <p className='text-xs text-gray-secondary'>• Arts • BA English</p>
                            </div>
                            <Button>Disqualify</Button>
                        </div>
                        <div className='my-6 md:mt-10'>
                            <Tabs
                                size="medium"
                                items={tabs}
                            />
                        </div></>
            }
        </div>
    )
}
