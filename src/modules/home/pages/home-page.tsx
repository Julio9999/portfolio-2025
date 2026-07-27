"use client";

import { IconsContainer } from "../components/icons-container/icons-container";
import { SkillsGrid } from "@/modules/skills/components/skills-grid";
import { skills } from "@/modules/skills/data/skills";
import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";



export const HomePage = () => {
    const { language } = useCommonContext();
    const t = translations[language];

    return (
        <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-8">
            <div className="glass-card rounded-3xl px-6 py-10 md:px-10 md:py-14">
                <div className="max-w-3xl space-y-5">
                    <h1 className="section-title text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                        Julio Espinola
                    </h1>
                    <p className="text-lg font-semibold text-[var(--brand)] sm:text-xl md:text-3xl">
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

            <div className="glass-card rounded-3xl px-6 py-8 md:px-10 md:py-10">
                <div className="mb-4 space-y-1">
                    <h2 className="text-2xl font-semibold md:text-3xl">{t.skillsTitle}</h2>
                    {t.skillsSubtitle && (
                        <p className="text-sm text-[var(--muted)] md:text-base">{t.skillsSubtitle}</p>
                    )}
                </div>
                <SkillsGrid skills={skills} t={t} />
            </div>
        </section>
    );
};
