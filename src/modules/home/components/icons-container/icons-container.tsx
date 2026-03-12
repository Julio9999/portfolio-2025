import {
    RiAndroidFill,
    RiAppleFill,
    RiNextjsFill,
    RiNodejsFill,
    RiReactjsFill,
    RiTailwindCssFill
} from "react-icons/ri";
import { SiExpo, SiNestjs, SiTypescript } from "react-icons/si";
import { IconContainer } from "@/components/icon-container";

export const IconsContainer = () => {
    const skills = [
        {
            id: "typescript",
            icon: <SiTypescript size={40} className="text-[#3178c6]" />,
            label: "TypeScript",
        },
        {
            id: "react",
            icon: <RiReactjsFill size={40} className="text-[#61dafb]" />,
            label: "React",
        },
        {
            id: "react-native",
            icon: <div className="flex items-center gap-1"><RiReactjsFill size={32} className="text-[#61dafb]" /><RiAndroidFill size={18} className="text-[#85d26b]" /><RiAppleFill size={18} className="text-white" /></div>,
            label: "React Native",
        },
        {
            id: "expo",
            icon: <SiExpo size={36} className="text-white" />,
            label: "Expo",
        },
        {
            id: "next",
            icon: <RiNextjsFill size={38} className="text-white" />,
            label: "Next.js",
        },
        {
            id: "node",
            icon: <RiNodejsFill size={38} className="text-[#7cc84a]" />,
            label: "Node.js",
        },
        {
            id: "tailwind",
            icon: <RiTailwindCssFill size={38} className="text-[#38bdf8]" />,
            label: "Tailwind",
        },
        {
            id: "nestjs",
            icon: <SiNestjs size={34} className="text-[#dc2626]" />,
            label: "NestJS",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {skills.map((skill, index) => (
                <IconContainer
                    key={skill.id}
                    className="fade-up"
                    style={{ animationDelay: `${index * 60}ms` }}
                    label={skill.label}
                >
                    {skill.icon}
                </IconContainer>
            ))}
        </div>
    );
};
