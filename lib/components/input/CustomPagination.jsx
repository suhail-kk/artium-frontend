import React from 'react'
import { ConfigProvider, Pagination } from 'antd'
import { COLORS } from '@/lib/constants/colors'

export default function CustomPagination({ page, totalCount, onChange, pageSize }) {
    return (

        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: COLORS.primary
                },
            }}
        >
            <Pagination
                current={page}
                total={totalCount}
                defaultCurrent={1}
                onChange={onChange}
                pageSize={pageSize}
            />
        </ConfigProvider>
    )
}
