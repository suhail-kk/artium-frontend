"use client"

import Button from '@/lib/components/display/Button'
import TextAreaInput from '@/lib/components/input/TextAreaInput'
import TextInput from '@/lib/components/input/TextInput'
import React, { useState } from 'react'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here (e.g., send data to backend)
        console.log('Form submitted:', formData)
    }

    const handleCancel = () => {
        setFormData({ fullName: '', email: '', subject: '' })
    }

    return (
        <div className='w-full h-full items-center flex justify-center'>
            <div className='w-full h-full max-w-[1100px]'>
                <p className='mt-10 md:mt-16 text-xl md:text-[38px] text-center text-blue-primary font-bold'>Contact Us</p>

                <p className='text-lg mt-8 leading-[30px] tracking-wide text-center text-primary font-normal'>
                    We’re here to help with any inquiries or support you may need. Feel free to reach out by filling out the contact form below, and our team will get back to you as soon as possible.
                </p>

                <div className='w-full flex flex-col gap-4 mt-4'>
                    <TextInput label="Full Name" name="fullName"
                        value={formData.fullName}
                        onChange={handleChange} placeholder="Enter your full name"
                    />
                    <TextInput label="Email" name="fullName"
                        value={formData.email}
                        onChange={handleChange} placeholder="Enter your email address"
                    />


                    <TextAreaInput label="Subject" name="subject"
                        value={formData.subject}
                        onChange={handleChange} placeholder="Enter your subject"
                    />

                </div>

                <div className="flex justify-center gap-4 mt-6">

                    <Button buttonType="button" type="gray" onClick={handleCancel}>
                        Cancel
                    </Button>

                    <Button buttonType="button" type="blue">
                        Submit
                    </Button>
                </div>
            </div>
        </div >
    )
}
