import React from 'react'
import { Input } from 'antd'

export default function TextInput({
    label,
    value,
    required = false,
    error = null,
    onChange,
    placeholder,
    type = 'text',
    isRounded = false,
    className = 'p-3 border border-solid border-gray-100',
    ...props
}) {
    const isError = error !== null
    return (
        <div className="w-full">
            {label && (
                <p className="text-primary text-[14px] font-semibold leading-[23px] mb-1">
                    {`${label}  ${required ? '*' : ''}`}
                </p>
            )}
            <Input
                type={type}
                label={label}
                value={value}
                onChange={onChange}
                {...props}
                placeholder={placeholder}
                className={`w-full  border-gray-100 type text-primary ${className} ${isError && 'border border-solid border-[#D12E34]'} ${isRounded ? 'rounded-full' : 'rounded-xl'}`}
            />
            {error && (
                <p className="text-[#D12E34] text-sm plus-jakarta-sans font-normal mt-2">
                    {error?.message}
                </p>
            )}
        </div>
    )
}
