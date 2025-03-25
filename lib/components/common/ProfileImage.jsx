import React from 'react'
import ImageView from '../display/ImageView'

export default function ProfileImage({ src = null, user_name = ""
}) {

    function handleUserName(user_name) {
        let short_cut = ""
        const words = user_name?.split(" ")
        short_cut += words[0]?.slice(0, 1)?.toUpperCase() + (words[1]?.slice(0, 1)?.toUpperCase() || "")
        return short_cut
    }

    return (
        <div className="relative w-10 h-10 content-center rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            {
                src ? <ImageView className="w-full h-full object-cover rounded-full" alt="" /> : <div className='flex text-lg justify-center items-center font-semibold text-white'>{handleUserName(user_name)}</div>
            }
        </div>
    )
}
