import React from 'react'

import { Breadcrumb } from 'antd'
import { SlArrowRight } from "react-icons/sl";


export default function BreadCrumbList({ items }) {
    return (
        <Breadcrumb items={items} separator={<SlArrowRight className='h-7 text-black' />
        } />
    )
}
