'use client'
import React from 'react'
import { Select } from 'antd'

export default function SelectInput({
    label,
    value,
    error = null,
    placeholder,
    options,
    onChange,
    labelKey = 'label',
    valueKey = '_id',
    otherKey,
    disabled,
    required = false,
    className = '',
    ...props
}) {
    const isError = error !== null

    const fileteredOptions = options?.map((item) => ({
        label: item[labelKey] || '',
        value: item[valueKey],
        [otherKey]: item[otherKey],
    }))

    return (
        <div className="w-full">
            {label && (
                <p className="text-primary text-[14px] font-semibold leading-[23px] mb-1">
                    {`${label}  ${required ? '*' : ''}`}
                </p>
            )}
            <Select
                showSearch
                value={value || null}
                disabled={disabled}
                placeholder={placeholder}
                optionFilterProp="label"
                className={`w-full ${className} ${isError && 'border border-solid border-[#D12E34]'
                    }`}
                onChange={(e, value) => onChange(value)}
                options={fileteredOptions}
                virtual={false}
                {...props}
            />
            {error && (
                <p className="text-[#D12E34] text-sm plus-jakarta-sans font-normal mt-2">
                    {error?.message}
                </p>
            )}
        </div>
    )
}
