import React from 'react'

import { Empty } from 'antd';

export default function NoDataFound() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Empty />
        </div>
    )
}
