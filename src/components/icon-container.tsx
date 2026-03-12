import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
}

export const IconContainer = ({ children, className, style, label }: Props) => {
    return (
        <div
            className={`group rounded-2xl border border-white/20 bg-white/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${className}`}
            style={style}
        >
            <div className="mb-3 flex min-h-[44px] items-center justify-center">{children}</div>
            <p className="text-center text-sm font-medium text-[var(--muted)] group-hover:text-[var(--text)]">{label}</p>
        </div>
    )
}
