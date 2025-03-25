import React, { useState } from 'react'
import NotificationCard from '../NotificationCard'
import SelectInput from '@/lib/components/input/Select'

const options = [
  {
    label: "New",
    value: "new"
  },
  {
    label: "Read",
    value: "read"
  },
  {
    label: "Unread",
    value: "unread"
  },
]

export default function Notifications() {
  const [status, setStatus] = useState(options[0].value)

  return (
    <div className='w-full h-full items-center flex justify-center '>
      <div className='w-full h-full flex flex-col gap-6 max-w-[1100px]  px-5 lg:px-0'>
        <div className='w-full flex justify-end'>
          <div className='w-[150px]'>
            <SelectInput
              options={options}
              label="Status"
              value={status}
              labelKey="label"
              valueKey="value"
              onChange={(selectedValue) => {
                console.log(selectedValue)
                setStatus(selectedValue)
              }}
            />
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </div>
  )
}
