"use client"
import { Navbar } from "./navbar";
import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const CommonLayout = ({ children }: Props) => {


    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true)
    }, [])

    if (!active) {
        return null; // or a loading spinner
    }

    return (
        <div className="flex flex-col min-h-screen" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <Navbar />
            <main className="w-full px-5 py-8 md:px-12 md:py-12 lg:px-20 lg:py-16 fade-up">
                {children}
            </main>
        </div>
    )
}