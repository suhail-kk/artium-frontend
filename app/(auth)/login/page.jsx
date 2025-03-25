"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Controller, useForm } from 'react-hook-form'

import useApi from '@/lib/hooks/useApi'
import { login } from '@/lib/services/auth'
import useToast from '@/lib/hooks/useToast'
import { errorSetter } from '@/lib/utils/helper'
import TextInput from '@/lib/components/input/TextInput'
import { useRoles } from '@/lib/hooks/useDropdowns'
import SelectInput from '@/lib/components/input/Select'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/lib/redux/authSlice'

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { success } = useToast()
    const API_loginUser = useApi(login)
    const { data: role, isLoading: rolesLoading } = useRoles()

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
                password: params.password,
                email: params.email.trim(),
            }

            const { data, isError, errors: apiErrors } =
                await API_loginUser.request(payloadData, {
                    withCredentials: true, // 👈 Ensures cookies are stored
                })

            console.log(data?.data)
            if (isError) {
                errorSetter(apiErrors, setError)
            } else {
                success('Login Successful! Welcome back.')
                reset()
                dispatch(
                    loginSuccess({
                        user: data?.data?.user,
                        accessToken: data?.data?.accessToken,
                    })
                );

                document.cookie = `accessToken=${data?.data?.accessToken}; path=/; Secure; HttpOnly;`;
                router.push('/dashboard')
            }
        })()
    }

    return (
        <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
                <div className="md:w-1/2 pr-5 flex flex-col justify-between">
                    <div className='h-full content-center'>
                        <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
                        <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
                        <form className="mt-6" action="#" method="POST">

                            <div>
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
                                        <TextInput label="Email" placeholder="Email address" onChange={onChange} value={value} error={errors.email} />
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
                                        <SelectInput options={role} disabled={rolesLoading} valueKey='_id' labelKey='name' label="Role" placeholder="Select Role" onChange={onChange} value={value} error={errors.role} />
                                    )}
                                />
                            </div>
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

                            <div className="text-right mt-2">
                                <Link href="forgot-password" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                            </div>

                            <button disabled={API_loginUser.loading} onClick={handleSubmit(onSubmit)} type="submit" className="w-full block bg-blue-500 hover:bg-blue-primary focus:bg-blue-primary text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">{API_loginUser.loading ? "Loading..." : "Login"}</button>

                        </form>
                    </div>

                    <div className="text-sm flex justify-between items-center mt-3">
                        <p>If you don't have an account...</p>
                        <Link href='/register'> <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button></Link>
                    </div>
                </div>

                <div className="w-1/2 md:block hidden ">
                    <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" />
                </div>

            </div>
        </section>
    )
}
