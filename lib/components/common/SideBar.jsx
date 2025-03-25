"use client"

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Popconfirm } from 'antd'
import useApi from '@/lib/hooks/useApi'
import { logout } from '@/lib/services/auth'
import useToast from '@/lib/hooks/useToast'

const SideBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const { success, error } = useToast()
    const API_logoutUser = useApi(logout)


    const items = [
        { title: 'Dashboard', linkTo: '/dashboard' },
        { title: 'Users', linkTo: '/users' },
        { title: 'Applicants', linkTo: '/applicants' },
        { title: 'Attendance', linkTo: '/attendance' },
        { title: 'Stages', linkTo: '/stages' },
        { title: 'Invigilators', linkTo: '/invigilators' },
        { title: 'Events', linkTo: '/events' },
        { title: 'Results', linkTo: '/results' },
        { title: 'Reports', linkTo: '/reports' },
        { title: 'Notifications', linkTo: '/notifications' },
        { title: 'Downloads', linkTo: '/downloads' },
    ];

    const confirm = async () => {
        try {
            const { isError } = await API_logoutUser.request()
            if (isError) {
                error("Logout Failed! Please try again later.");
            } else {
                success("Logout Successful! You have been signed out safely.");
                router.push("/login");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='bg-[#02183d] w-full md:w-[250px] lg:w-[290px] h-full min-h-screen'>
            <div className='border-bottom-gray-200 h-[10vh] min-h-[95px] px-16 py-6 cursor-pointer' >
                <p className='text-white font-bold text-center italic uppercase text-[30px]'>Artium</p>
            </div>
            <div className=" px-10 pb-6 ">
                {items?.map((item, i) => {
                    const isActiveRoute = pathname?.includes(item?.linkTo)
                    return (
                        <div
                            onClick={() => router.push(item?.linkTo)}
                            key={i}
                            className={`px-6 py-3 my-5 rounded-full cursor-pointer ${isActiveRoute ? 'bg-white ' : ' bg-transparent'}`}
                        >
                            <p
                                className={`font-semibold text-lg ${isActiveRoute ? 'text-[#02183d]' : 'text-white'}`}
                            >
                                {item?.title}
                            </p>
                        </div>
                    )
                })}

                <Popconfirm
                    title="Logout"
                    description="Are you sure to logout"
                    onConfirm={confirm}
                    okText="Logut"
                    cancelText="Cancel"
                    placement="rightBottom"
                >
                    <button><p className={`font-semibold text-lg text-white px-6`}>Logout</p></button>
                </Popconfirm>

            </div>
        </div>
    )
}

export default SideBar
