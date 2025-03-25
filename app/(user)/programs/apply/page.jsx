"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import useToast from '@/lib/hooks/useToast';
import { errorSetter } from '@/lib/utils/helper';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '@/lib/components/input/TextInput';
import SelectInput from '@/lib/components/input/Select';
import Button from '@/lib/components/display/Button';


export default function Page() {
    const router = useRouter()
    const { success, error } = useToast()

    const [loading, setLoading] = useState(false);


    const {
        reset,
        watch,
        control,
        setError,
        clearErrors,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            team: "",
            email: "",
            gender: "",
            full_name: "",
            department: "",
        },
    })

    const onSubmit = () => {
        clearErrors()
        handleSubmit(async (params) => {
            setLoading(true)
            try {
                const payload = {
                    ...params
                }
                const response = true

                // const response = await API_postEnquiry.request(payload)

                if (response?.isError) {
                    setLoading(false)
                    error('Failed to submit')
                    errorSetter(response?.errors, setError)
                } else {
                    reset()
                    success(
                        "Registration completed successfully!"
                    )

                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        })()
    }

    return (
        <div className='w-full h-full items-center flex justify-center '>
            <div className='w-full h-full flex flex-col mt-10 md:mt-16 gap-6 max-w-[1100px]  px-5 lg:px-0'>
                <p className='tet-xl md:text-2xl font-bold text-blue-primary'>Registration for College sports fest - 2024s</p>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <Controller
                        control={control}
                        rules={{
                            required:
                                'Full name is required',
                            pattern: {
                                value: /^[A-Za-z\s]{1,50}$/,
                                message:
                                    'Full name should only contain letters and spaces, and be between 1 and 50 characters long',
                            },
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <TextInput
                                disabled
                                label="Full Name*"
                                placeholder="Enter your full Name"
                                value={value}
                                error={
                                    errors.full_name
                                }
                                onChange={onChange}
                            />
                        )}
                        name="full_name"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required:
                                'Email is required',
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                message:
                                    'Email is invalid.',
                            },
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <TextInput
                                disabled
                                label="Email Address*"
                                placeholder="Enter your email"
                                value={value}
                                error={errors.email}
                                onChange={onChange}
                            />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required:
                                'Gender is required',
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <SelectInput
                                options={[]}
                                value={value}
                                onChange={onChange}
                                error={errors.gender}
                                label="Gender*"
                                placeholder="Enter your gender"
                            />
                        )}
                        name="gender"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required:
                                'Team is required',
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <SelectInput
                                options={[]}
                                value={value}
                                onChange={onChange}
                                error={errors.team}
                                label="Team*"
                                placeholder="Enter your team"
                            />
                        )}
                        name="team"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required:
                                'Department is required',
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <SelectInput
                                options={[]}
                                value={value}
                                onChange={onChange}
                                error={errors.department}
                                label="Department*"
                                placeholder="Enter your department"
                            />
                        )}
                        name="department"
                    />
                </div>
                <div className='mt-8 md:mt-14 w-full gap-5 flex justify-center md:justify-end'>
                    <Button type='gray' onClick={() => router.back()}>Cancel</Button>
                    <Button type='blue'>Submit</Button>
                </div>
            </div>
        </div >
    )
}
