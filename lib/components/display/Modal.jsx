"use client"

import React from 'react'
import { ConfigProvider, Modal } from "antd";

export default function CustomModal({ width = 500, modal, handleCloseModal, title, children, ...props }) {
    return (
        <ConfigProvider
            theme={{}}
        >
            <Modal
                centered
                footer={null}
                title={title}
                open={modal}
                width={width}
                onCancel={handleCloseModal}
                {...props}

            >{children}</Modal>
        </ConfigProvider>
    )
}
