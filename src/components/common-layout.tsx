"use client"
import { Poppins } from "next/font/google";
import { Navbar } from "./navbar";
import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}


const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const CommonLayout = ({ children }: Props) => {


    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true)
    }, [])

    if (!active) {
        return null; // or a loading spinner
    }

    return (
        <div className={`flex flex-col min-h-screen purple-background ${poppins.className}`}>
            <Navbar />
            <div className={` text-white p-6 md:p-16`}>
                {children}
            </div>
        </div>
    )
}