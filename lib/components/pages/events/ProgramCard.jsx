import React from 'react'

import { MdArrowOutward, MdDateRange } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import Button from '../../display/Button';
import { useRouter } from 'next/navigation';


export default function ProgramCard() {

    const router = useRouter()

    const handleViewProgram = () => {
        router.push(`/programs/2`)
    }
    const handleRegisterProgram = () => {
        router.push(`/programs/apply`)
    }
    return (
        <div data-aos="fade-right">
            <div className="w-full shadow-for-white-box rounded-xl p-6">
                <div className="flex flex-col ">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full mb-3">
                            <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" alt="Event image" className=" w-full  h-[380px] object-fill  rounded-2xl" />

                            <div onClick={handleViewProgram} className='
               cursor-pointer absolute left-6 border-[1px] border-white bottom-6 text-white text-xs font-semibold rounded-[4px] bg-black px-3 py-1 flex gap-2 justify-center items-center'>
                                View details <MdArrowOutward className='w-3 h-3 text-white' />
                            </div>
                        </div>
                        <div className="flex-auto justify-evenly">
                            <div className="flex flex-wrap ">
                                <div className="flex items-center w-full justify-between min-w-0 ">
                                    <h2 className="text-xl mr-auto font-semibold cursor-pointer text-blue-primary truncate ">Lorem ipsum
                                        is placeholder text commonly used in the graphic</h2>

                                </div>
                            </div>
                            <div className='my-4'>
                                <ul className='flex flex-col gap-4 my-4'>
                                    <li className='flex gap-2 items-center'>
                                        <div><MdOutlineCategory className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Category: Arts festival</p>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div><TbStatusChange className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Registration Status: Open</p>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div><CgOrganisation className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Organized by: College union</p>
                                    </li>

                                    <li className='flex gap-2 items-center'>
                                        <div><MdOutlinePlace className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Location : ABC College Kochi</p>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div><MdOutlineContacts className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Contact Info : 982211242131</p>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div><MdDateRange className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>Deadline for registration : 02/10/2025</p>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div><MdDateRange className='w-5 h-5 text-gray-500' /></div>
                                        <p className='text-gray-500'>From date - To date : 02/10/2025 - 04/02/2025</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Button onClick={handleRegisterProgram} additionalClass="!w-[170px] !rounded-full">Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
