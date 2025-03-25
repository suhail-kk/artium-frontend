import React from 'react'
import ImageView from '../display/ImageView'

export default function EventImage({ src = null, event = ""
}) {

    function handleEventName(event) {
        let short_cut = ""
        const words = event?.split(" ")
        short_cut += words[0]?.slice(0, 1)?.toUpperCase() + (words[1]?.slice(0, 1)?.toUpperCase() || "")
        return short_cut
    }

    return (
        <div className="relative w-10 h-10 content-center rounded-md hover:bg-red-700 bg-gradient-to-r from-[#845ec2] via-[#d65db1] to-[#ff6f91] ">
            {
                src ? <ImageView className="w-full h-full object-cover rounded-md" alt="" /> : <div className='flex text-lg justify-center items-center font-semibold text-white'>{handleEventName(event)}</div>
            }
        </div>
    )
}
