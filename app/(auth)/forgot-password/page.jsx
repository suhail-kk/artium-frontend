"use client"

import React, { useState } from 'react'

import Link from 'next/link'
import TextInput from '@/lib/components/input/TextInput'
import { useRouter } from 'next/navigation'
import useToast from '@/lib/hooks/useToast'
import { forgetPassword, resetPassword } from '@/lib/services/auth'
import { Controller, useForm } from 'react-hook-form'
import { errorSetter } from '@/lib/utils/helper'
import useApi from '@/lib/hooks/useApi'
import SelectInput from '@/lib/components/input/Select'
import { useRoles } from '@/lib/hooks/useDropdowns'

export default function ForgotPassword() {
    const router = useRouter()
    const { success } = useToast()
    const API_resetPassword = useApi(resetPassword)
    const API_forgetPassword = useApi(forgetPassword)
    const { data: role, isLoading: rolesLoading } = useRoles()

    const [isVerified, setIsVerified] = useState(false)

    const {
        reset,
        control,
        setValue,
        handleSubmit,
        clearErrors,
        setError, watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            role: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async () => {
        clearErrors()
        handleSubmit(async (params) => {
            const payloadData = {
                role: params.role.value,
                email: params.email.trim(),
            }

            const resetPasswordPayload = {
                ...payloadData,
                password: params.password,
            }

            const { data, isError, errors: apiErrors } =
                isVerified ?
                    await API_resetPassword.request(resetPasswordPayload) :
                    await API_forgetPassword.request(payloadData)
            if (isError) {
                errorSetter(apiErrors, setError)
            } else {
                success(data?.message)
                if (isVerified) {
                    reset()
                    router.push('/login')
                }
                setIsVerified(true)
            }
        })()
    }


    return (
        <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
                <div className="md:w-1/2 pr-5 flex flex-col justify-between">
                    <div className='h-full content-center'>
                        <h2 className="text-2xl font-bold text-[#002D74]">Forgot password</h2>
                        <p className="text-sm mt-4 text-[#002D74]">If you forgot your password, please reset</p>



                        <div className="mt-4">
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                        message: 'Email is invalid.',
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput label="Email" disabled={isVerified} placeholder="Email address" onChange={onChange} value={value} error={errors.email} />
                                )}
                            />
                        </div>
                        <div className='mt-4'>
                            <Controller
                                control={control}
                                name="role"
                                rules={{
                                    required: 'Role is required',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <SelectInput options={role} disabled={rolesLoading || isVerified} valueKey='_id' labelKey='name' label="Role" placeholder="Select Role" onChange={onChange} value={value} error={errors.role} />
                                )}
                            />
                        </div>

                        {
                            isVerified && (
                                <div className="mt-4">
                                    <Controller
                                        control={control}
                                        name="password"

                                        rules={{
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                                            maxLength: { value: 15, message: "Password must not exceed 15 characters" },
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                                                message:
                                                    "Password must contain 1 uppercase letter, 1 number, and 1 special character",
                                            },
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput type='password' label="Password" placeholder="Password" onChange={onChange} value={value} error={errors.password} />
                                        )}
                                    />
                                </div>

                            )
                        }


                        <button disabled={API_forgetPassword.loading} onClick={handleSubmit(onSubmit)} type="submit" className="w-full block bg-blue-500 hover:bg-blue-primary focus:bg-blue-primary text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">{API_forgetPassword.loading ? "Loading..." : isVerified ? "Reset Password" : "Forget Password"}</button>


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
