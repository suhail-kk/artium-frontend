import React from 'react'

import { Progress } from "antd"

const conicColors = {
    '0%': '#FE1F99',
    '50%': '#FE791A',
    '100%': '#ffccc7',
};

export default function CircularProgress({ value }) {
    return (
        <Progress type="circle" percent={value} strokeColor={conicColors}
            trailColor="#DBDBDB"
            strokeWidth="9"
            strokeLinecap="round"
        />
    )
}
