import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiNestjs, SiTypescript } from "react-icons/si"

import { IconContainer } from "@/components/icon-container"

export const IconsContainer = () => {

    return (
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 p-4">
            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#3178c6]">
                <SiTypescript
                    size={64}
                    className="text-white group-hover:text-[#3178c6] transition-colors duration-300"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#22d3ee]">
                <RiReactjsFill
                    size={64}
                    className="text-white transform transition-all duration-1000 group-hover:text-[#22d3ee] group-hover:rotate-[360deg]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#38bdf8]">
                <RiTailwindCssFill
                    size={64}
                    className="text-white group-hover:text-[#38bdf8] transition-colors duration-300"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#d4d4d4]">
                <RiNextjsFill
                    size={64}
                    className="text-white group-hover:text-[#d4d4d4] transition-colors duration-300"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#10b981]">
                <RiNodejsFill
                    size={64}
                    className="text-white group-hover:text-[#10b981] transition-colors duration-300"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#dc2626]">
                <SiNestjs
                    size={64}
                    className="text-white group-hover:text-[#dc2626] transition-colors duration-300"
                />
            </IconContainer>
        </div>
    )

}