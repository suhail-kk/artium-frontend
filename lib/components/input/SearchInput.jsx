'use client'
import React from 'react'
import { Input } from 'antd'
// import { SearchIcon } from "@/lib/components/common/Icons"

export default function SearchInput({
    placeholder = 'Search',
    value,
    onChange,
    className = "border border-solid border-secondary rounded-lg",
    ...props
}) {
    return (
        <>
            <span className="block relative">
                <Input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full px-3 py-2 pr-12 ${className}`}
                    {...props}
                />
                {/* <button className="w-5 h-5 cursor-pointer absolute top-[15px] right-4">
                    <SearchIcon />
                </button> */}
            </span>
        </>
    )
}
