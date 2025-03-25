import React from 'react'

import { BiGroup } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";


export default function EventCard() {
    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Male</p>
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                <div className='absolute bottom-2 right-4 w-full flex justify-end'>
                    <p className='text-white text-[12px]'>Created on: 1hr ago</p>
                </div>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Javascript Bootcamp for Absolute Beginners</h1>
            <div className="my-4 flex flex-wrap gap-4">
                <div className="flex space-x-1 items-center">
                    <span>
                        <MdOutlineDateRange className='w-5 h-5' />
                    </span>
                    <p className='font-normal text-xs'>12/09/2024</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <IoMdTime className='w-5 h-5' />
                    </span>
                    <p className='font-normal text-xs'>12:40</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <MdOutlinePlace className='w-5 h-5' />
                    </span>
                    <p className='font-normal text-xs'>Stage 01</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <BiGroup className='w-5 h-5' />
                    </span>
                    <p className='font-normal text-xs'>Single</p>
                </div>
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Apply Now</button>
            </div>
        </div>
    )
}
