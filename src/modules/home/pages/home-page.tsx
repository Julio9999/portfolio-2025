import { IconsContainer } from "../components/icons-container/icons-container";



export const HomePage = () => {
    return (
        <div className="max-w-[1000px] mx-auto flex items-center flex-col gap-4 backdrop-blur-3xl bg-white/10 rounded-2xl border border-white/20 shadow-lg py-6 w-full px-4 md:px-8">
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
    );
};
