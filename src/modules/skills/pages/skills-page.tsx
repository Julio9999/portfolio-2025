"use client";
import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";
import { skills } from "../data/skills";
import { SkillsGrid } from "../components/skills-grid";

export const SkillsPage = () => {
  const { language } = useCommonContext();
  const t = translations[language];

  return (
    <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">
      <div className="glass-card rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <h1 className="section-title text-3xl font-bold md:text-4xl">
          {t.skillsTitle}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:text-base">
          {t.skillsSubtitle}
        </p>
      </div>

      <SkillsGrid skills={skills} t={t} />
    </section>
  );
};
