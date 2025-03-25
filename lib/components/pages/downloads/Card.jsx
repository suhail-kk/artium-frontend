import React from 'react'
import Button from '../../display/Button'

export default function Card({ item }) {
    return (
        <div className="flex hover:bg-slate-200 cursor-pointer justify-between px-3 py-2 bg-white items-center gap-1 rounded-lg border border-gray-100">
            <p>
                {item?.title}
            </p>
            <div>
                <Button>Download</Button>
            </div>
        </div>
    )
}
