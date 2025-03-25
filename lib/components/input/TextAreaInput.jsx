import React from 'react'
import { Input } from 'antd'

const { TextArea } = Input;

export default function TextAreaInput({
    label,
    value,
    required = false,
    error = null,
    onChange,
    placeholder,
    type = 'text',
    className = ' p-3 border border-solid border-gray-100',
}) {
    const isError = error !== null
    return (
        <div className="w-full">
            {label && (
                <p className="text-primary text-[14px] font-semibold leading-[23px] mb-1">
                    {`${label}  ${required ? "*" : ""}`}
                </p>
            )}
            <TextArea
                type={type}
                label={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full ${className} rounded-2xl border-gray-100 type text-primary ${isError && 'border border-solid border-[#D12E34]'
                    }`}
                style={{ height: 120, resize: 'none' }}
            />
            {error && (
                <p className="text-[#D12E34] text-sm plus-jakarta-sans font-normal mt-2">
                    {error?.message}
                </p>
            )}
        </div>
    )
}
