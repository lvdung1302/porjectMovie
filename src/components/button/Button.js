import React from 'react';

const Button = ({
        onClick, 
        className='', 
        full = false,
        type = 'button', 
        bgColor= 'primary', 
        children,
        ...props
    }) => {
        let bgClassName = 'bg-primary';
        switch (bgColor) {
            case 'primary':
                bgClassName = 'bg-primary';
                break;
            case 'secondary':
                bgClassName = 'bg-secondary';
                break;
            default:
                break;
        }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-3 capitalize rounded-lg mt-auto ${full ? 'w-full': ''} ${bgClassName} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;