"use client";

import { IconsContainer } from "../components/icons-container/icons-container";
import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";



export const HomePage = () => {
    const { language } = useCommonContext();
    const t = translations[language];

    return (
        <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-8">
            <div className="glass-card rounded-3xl px-6 py-10 md:px-10 md:py-14">
                <div className="max-w-3xl space-y-5">
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Portfolio 2026
                    </p>
                    <h1 className="section-title text-4xl font-bold leading-tight md:text-6xl">
                        Julio Espinola
                    </h1>
                    <p className="text-xl font-semibold text-[var(--brand)] md:text-3xl">
                        {t.homeTagline}
                    </p>
                    <p className="max-w-2xl text-base text-[var(--muted)] md:text-lg">
                        {t.homeFocus}
                    </p>
                </div>
            </div>

            <div className="glass-card rounded-3xl px-6 py-8 md:px-10 md:py-10">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">{t.stackTitle}</h2>
                <IconsContainer />
            </div>
        </section>
    );
};
