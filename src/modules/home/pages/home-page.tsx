import { Poppins } from "next/font/google";
import { IconsContainer } from "../components/icons-container/icons-container";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const HomePage = () => {
  return (
    <div
      className={`bg-gradient-to-r from-[#1e1b4b] to-[#2e026d] min-h-screen text-white p-6 md:p-16 ${poppins.className}`}
    >
      <div className="max-w-[1000px] mx-auto flex items-center flex-col gap-4 backdrop-blur-3xl bg-white/10 rounded-2xl border border-white/20 shadow-lg py-6 w-full animate-gradientShift px-4 md:px-8">
        <div className="text-center flex flex-col gap-2">
          <p className="text-4xl md:text-6xl font-bold">Julio Espinola</p>
          <p className="text-4xl md:text-6xl">
            <span className="font-bold text-purple-400">Front</span>end Developer
          </p>
        </div>

        <div className="py-6">
          <IconsContainer />
        </div>
      </div>
    </div>
  );
};
