import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const IconContainer = ({children, className}: Props) => {
    return (
        <div className={`p-4 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer ${className}`}>
            {children}
        </div>
    )
}
