import React from 'react'

export default function RoleLabel({ role }) {
    const roleStyles = {
        Faculty: "bg-red-500",
        Student: "bg-gray-900",
        Admin: "bg-green-500",
        "Team Lead": "bg-violet-500",
    }

    return (
        <div className={`w-fit py-[2px] px-2 rounded-full text-xs text-white ${roleStyles[role] || "bg-gray-500"}`}>
            {role}
        </div>
    )
}
