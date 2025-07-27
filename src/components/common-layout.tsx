import { Poppins } from "next/font/google";
import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode;
}


const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const CommonLayout = ({ children }: Props) => {
    return (
        <div className={`flex flex-col min-h-screen bg-gradient-to-r from-[#1e1b4b] to-[#2e026d] ${poppins.className}`}>
            <Navbar />
            <div className={` text-white p-6 md:p-16`}>
                {children}
            </div>
        </div>
    )
}