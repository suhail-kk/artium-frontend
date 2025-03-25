import { Segmented } from 'antd';
import React, { useState } from 'react'

export default function Attendance() {
    const [tab, setTab] = useState('Overall info')
    return (
        <div>
            <Segmented
                options={['Overall info', 'Team wise', 'Department wise']}
                onChange={(value) => {
                    setTab(value);
                }}
            />
            <div className='mt-6 w-full'>
                {
                    tab === "Overall info" ? <OverallInfo /> :
                        tab === "Team wise" ? <TeamWise /> : <DepartmentWise />

                }
            </div>
        </div>
    )
}

const OverallInfo = () => {
    return (
        <div className='flex flex-wrap gap-4'>
            <div class="p-5 bg-white shadow w-48 rounded-2xl dark:bg-gray-900">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-center text-gray-500 dark:text-gray-400">Attendeese</dt>
                    <dd class="text-5xl font-light text-center md:text-6xl dark:text-white">13</dd>
                </dl>
            </div>
            <div class="p-5 bg-white shadow w-48 rounded-2xl dark:bg-gray-900">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-center text-gray-500 dark:text-gray-400">Absendeese</dt>
                    <dd class="text-5xl font-light text-center md:text-6xl dark:text-white">2</dd>
                </dl>
            </div>
            <div class="p-5 bg-white shadow w-48 rounded-2xl dark:bg-gray-900">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-center text-gray-500 dark:text-gray-400">Total applicants count</dt>
                    <dd class="text-5xl font-light text-center md:text-6xl dark:text-white">15</dd>
                </dl>
            </div>
        </div>
    )
}

const TeamWise = () => {
    return (
        <div className='flex flex-wrap gap-4'>
            <div class="p-6 bg-white shadow w-48 rounded-2xl dark:bg-gray-900">
                <dl class="space-y-2">
                    <dt class="text-2xl font-medium text-gray-500 dark:text-gray-400">Team A</dt>

                    <dd class="text-sm font-light  dark:text-white">Attendence: 3</dd>
                    <dd class="text-sm font-light  dark:text-white">Absenteese: 3</dd>
                    <dd class="text-sm font-light  dark:text-white">Total: 6</dd>
                </dl>
            </div>
        </div>
    )
}

const DepartmentWise = () => {
    return (
        <div className='flex flex-wrap gap-4'>
            <div className='flex flex-wrap gap-4'>
                <div class="p-6 bg-white shadow w-48 rounded-2xl dark:bg-gray-900">
                    <dl class="space-y-2">
                        <dt class="text-2xl font-medium text-gray-500 dark:text-gray-400">Team A</dt>

                        <dd class="text-sm font-light  dark:text-white">Attendence: 3</dd>
                        <dd class="text-sm font-light  dark:text-white">Absenteese: 3</dd>
                        <dd class="text-sm font-light  dark:text-white">Total: 6</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}