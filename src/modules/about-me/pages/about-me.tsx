"use client";

import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";

export const AboutMePage = () => {
  const { language } = useCommonContext();
  const t = translations[language];

  const badges = ["React", "Next.js", "TypeScript", "React Native", "Expo", "UI Engineering"];

  return (
    <section className="mx-auto w-full max-w-[900px]">
      <div className="glass-card rounded-3xl p-7 md:p-10">
        <h1 className="section-title mb-4 text-4xl font-bold md:text-5xl">{t.aboutMeTitle}</h1>
        <p className="muted mb-8 max-w-3xl text-sm md:text-base">{t.aboutMeDescription}</p>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-[var(--text)]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
