"use client"

import React from 'react'

import { MdDateRange } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { Tabs } from 'antd';
import Events from '@/lib/components/pages/events/user/Events';
import Results from '@/lib/components/pages/events/user/Results';
import MyEvents from '@/lib/components/pages/events/user/MyEvents';
import Notifications from '@/lib/components/pages/events/user/Notifications';
import ReportAUser from '@/lib/components/pages/events/user/ReportAUser';

export default function Page() {

    const tabs = [
        {
            key: 1,
            label: "Events",
            children: <Events />
        },
        {
            key: 2,
            label: "Results",
            children: <Results />
        },
        {
            key: 3,
            label: "Applied Events",
            children: <MyEvents />
        },
        {
            key: 4,
            label: "Notifications",
            children: <Notifications />
        },
        {
            key: 5,
            label: "Report a user",
            children: <ReportAUser />
        }
    ]
    return (
        <div className='w-full h-full items-center flex justify-center'>
            <div className='w-full h-full flex flex-col mt-10 md:mt-16 gap-6 max-w-[1100px] px-5 lg:px-0'>
                <p className='tet-xl md:text-2xl font-bold text-blue-primary'>College sports fest - 2024s</p>
                <div className='w-full'>
                    <ul className='flex flex-wrap gap-4'>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><MdOutlineCategory className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Category: Arts festival</p>
                        </li>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><TbStatusChange className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Registration Status: Open</p>
                        </li>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><CgOrganisation className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Organized by: College union</p>
                        </li>

                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><MdOutlinePlace className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Location : ABC College Kochi</p>
                        </li>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><MdOutlineContacts className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Contact Info : 982211242131</p>
                        </li>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><MdDateRange className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>Deadline for registration : 02/10/2025</p>
                        </li>
                        <li className='flex gap-2 items-center py-2 px-4 justify-center bg-blue-primary rounded-full'>
                            <div><MdDateRange className='w-4 h-4 text-white' /></div>
                            <p className='text-white text-xs'>From date - To date : 02/10/2025 - 04/02/2025</p>
                        </li>
                    </ul>
                </div>

                <div className='my-4 '>
                    <Tabs

                        size="small"
                        items={tabs}
                    />
                </div>
            </div>
        </div>
    )
}
