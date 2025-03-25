import React from 'react'
import EventCard from '../EventCard'

export default function Events() {
  return (
    <div className='w-full h-full items-center flex justify-center '>
      <div className='w-full h-full flex flex-col gap-6 max-w-[1100px]  px-5 lg:px-0'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}
