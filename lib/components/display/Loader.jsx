import React from 'react'

export default function Loader() {
    return (
        <div className="w-full h-full min-h-[300px] flex flex-col gap-2 justify-center items-center">
            <div className="p-2 animate-spin bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 rounded-full">
                <div className="bg-white rounded-full">
                    <div className="w-5 h-5 rounded-full"></div>
                </div>
            </div>
            <p>One moment, please…</p>
        </div>
    )
}
