import React from 'react'

import { MdOutlineDelete } from "react-icons/md";

export default function NotificationCard() {
    return (
        <div className="flex hover:bg-slate-200 cursor-pointer justify-between px-3 py-2 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            <div className='flex gap-4 items-center'>
                <div className="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                </div>
                <div>
                    <span >Andrea posted a new Tweet have a look</span>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <MdOutlineDelete className='text-blue-primary w-6 h-6' />
            </div>
        </div>
    )
}
