import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { IconContainer } from "./components/icon-container";
import { Poppins } from "next/font/google";



const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export default function Home() {
  return (
    <div className={`bg-gradient-to-r from-[#1e1b4b] to-[#2e026d] min-h-screen text-white p-16 ${poppins.className}`}>

      <div className="flex items-center flex-col gap-4 backdrop-blur-3xl bg-white/10 rounded-2xl border border-white/20 shadow-lg py-6 w-full animate-gradientShift">
        <div className="text-center flex flex-col gap-2">
          <p className="text-6xl font-bold">Julio Espinola</p>
          <p className="text-6xl">
            <span className="font-bold text-purple-400">Front</span>end Developer
          </p>
        </div>

        <div className="flex items-center gap-4 py-6">
          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#3178c6]">
            <SiTypescript
              size={80}
              className="text-white group-hover:text-[#3178c6] transition-colors duration-300"
            />
          </IconContainer>

          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#22d3ee]">
            <RiReactjsFill
              size={80}
              className="text-white transform transition-all duration-1500 group-hover:text-[#22d3ee] group-hover:rotate-[360deg]"
            />
          </IconContainer>

          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#38bdf8]">
            <RiTailwindCssFill
              size={80}
              className="text-white group-hover:text-[#38bdf8] transition-colors duration-300"
            />
          </IconContainer>

          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#d4d4d4]">
            <RiNextjsFill
              size={80}
              className="text-white group-hover:text-[#d4d4d4] transition-colors duration-300"
            />
          </IconContainer>

          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#10b981]">
            <RiNodejsFill
              size={80}
              className="text-white group-hover:text-[#10b981] transition-colors duration-300"
            />
          </IconContainer>

          <IconContainer className="group transition-shadow duration-300 hover:shadow-[0_0_30px_#dc2626]">
            <SiNestjs
              size={80}
              className="text-white group-hover:text-[#dc2626] transition-colors duration-300"
            />
          </IconContainer>
        </div>
      </div>

    </div>
  );
}
