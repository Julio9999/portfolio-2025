import {
    RiNextjsFill,
    RiNodejsFill,
    RiReactjsFill,
    RiTailwindCssFill
} from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { IconContainer } from "@/components/icon-container";

export const IconsContainer = () => {
    return (
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 p-4">
            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#3178c6] active:shadow-[0_0_30px_#3178c6]">
                <SiTypescript
                    size={64}
                    className="text-white transition-colors duration-300 group-hover:text-[#3178c6] group-active:text-[#3178c6]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#22d3ee] active:shadow-[0_0_30px_#22d3ee]">
                <RiReactjsFill
                    size={64}
                    className="text-white transform transition-all duration-1000 group-hover:text-[#22d3ee] group-hover:rotate-[360deg] group-active:text-[#22d3ee] group-active:rotate-[360deg]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#38bdf8] active:shadow-[0_0_30px_#38bdf8]">
                <RiTailwindCssFill
                    size={64}
                    className="text-white transition-colors duration-300 group-hover:text-[#38bdf8] group-active:text-[#38bdf8]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#d4d4d4] active:shadow-[0_0_30px_#d4d4d4]">
                <RiNextjsFill
                    size={64}
                    className="text-white transition-colors duration-300 group-hover:text-[#d4d4d4] group-active:text-[#d4d4d4]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#10b981] active:shadow-[0_0_30px_#10b981]">
                <RiNodejsFill
                    size={64}
                    className="text-white transition-colors duration-300 group-hover:text-[#10b981] group-active:text-[#10b981]"
                />
            </IconContainer>

            <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#dc2626] active:shadow-[0_0_30px_#dc2626]">
                <SiNestjs
                    size={64}
                    className="text-white transition-colors duration-300 group-hover:text-[#dc2626] group-active:text-[#dc2626]"
                />
            </IconContainer>
        </div>
    );
};
