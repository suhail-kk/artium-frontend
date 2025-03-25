"use client";


import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ children, buttonType = 'button', type = 'blue', onClick, additionalClass, ...props }) {
    const getButtonClass = () => {
        switch (type) {
            case 'blue':
                return 'bg-blue-primary text-white hover:bg-blue-600'
            case 'gray':
                return 'bg-gray-300 text-primary hover:bg-gray-400'
            case 'outlined':
                return 'border border-gray-300 text-primary hover:bg-gray-100'
            default:
                return ''
        }
    }

    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={`px-6 py-3 font-semibold rounded-md transition ${getButtonClass()} ${additionalClass}`}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
    type: PropTypes.oneOf(['blue', 'gray', 'outlined']),
    onClick: PropTypes.func,
}

Button.defaultProps = {
    buttonType: 'button',
    type: 'blue',
    onClick: () => { },
}
