"use client"

import { Drawer } from 'antd'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import classNames from 'classnames'

export default function HeaderMain() {
    const [sideNav, setSideNav] = useState(false)

    const handleSideNav = () => {
        setSideNav(!sideNav)
    }

    return (
        <nav className="sticky top-0 left-0 right-0 h-[90px] bg-white shadow-for-white-box z-50">
            <div className='h-full w-full flex items-center justify-center'>
                <div className=" w-full max-w-[1100px] px-5 lg:px-0 h-full mx-auto py-2 flex justify-between items-center">
                    <a className="font-bold text-2xl lg:text-4xl" href="#">
                        ARTIUM
                    </a>
                    <div className="block lg:hidden">
                        <button onClick={handleSideNav} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                        <Drawer onClose={handleSideNav} open={sideNav}>
                            <NavList />
                        </Drawer>
                    </div>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const NavList = () => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = (path) => pathname === path

    return (
        <ul className="flex flex-col lg:flex-row gap-2 lg:inline-flex lg:items-center">
            <li>
                <a className={classNames("lg:px-4", { "text-blue-primary font-semibold": isActive('/') })} href="/">
                    Home
                </a>
            </li>
            <li>
                <a className={classNames("lg:px-4 hover:text-gray-800", { "text-blue-primary font-semibold": isActive('/about-us') })} href="/about-us">
                    About
                </a>
            </li>
            <li>
                <a className={classNames("lg:px-4 hover:text-gray-800", { "text-blue-primary font-semibold": isActive('/programs') })} href="/programs">
                    Events
                </a>
            </li>
            <li>
                <a className={classNames("lg:px-4 hover:text-gray-800", { "text-blue-primary font-semibold": isActive('/contact-us') })} href="/contact-us">
                    Contact Us
                </a>
            </li>
            <li className={classNames("p-2 border-[1px] border-blue-primary rounded-md", { "text-blue-primary font-semibold": isActive('/login') })}>
                <a className="px-4 hover:text-gray-800" href="/login">
                    Login
                </a>
            </li>
            <li className={classNames("p-2 lg:ml-4 bg-blue-primary text-white rounded-md", { "bg-blue-700": isActive('/register') })}>
                <a className="px-4 hover:text-gray-800" href="/register">
                    Register
                </a>
            </li>
        </ul>
    )
}
