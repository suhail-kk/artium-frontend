import React from 'react'

import Link from 'next/link'
import TextInput from '@/lib/components/input/TextInput'

export default function ForgotPassword() {
    return (
        <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
                <div className="md:w-1/2 pr-5 flex flex-col justify-between">
                    <div className='h-full content-center'>
                        <h2 className="text-2xl font-bold text-[#002D74]">Forgot password</h2>
                        <p className="text-sm mt-4 text-[#002D74]">If you forgot your password, please reset</p>
                        <div className="mt-4">
                            <TextInput label="Email" placeholder="Email address" />
                        </div>

                        <div className="mt-4">
                            <TextInput label="New password" placeholder="New password" />
                        </div>
                        <div className="mt-4">
                            <TextInput label="Confirm password" placeholder="Confirm password" />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="text-sm flex justify-between items-center mt-3">
                        <p>If you have an account...</p>
                        <Link href='/login'> <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Login</button></Link>
                    </div>
                </div>

                <div className="w-1/2 md:block hidden ">
                    <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" />
                </div>

            </div>
        </section>
    )
}
