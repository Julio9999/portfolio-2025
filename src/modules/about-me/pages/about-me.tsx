"use client";

import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";

export const AboutMePage = () => {
  const { language } = useCommonContext();
  const t = translations[language];

  return (
    <section className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.aboutMeTitle}</h1>
        <p className="text-sm md:text-base text-white/80">{t.aboutMeDescription}</p>
      </div>
    </section>
  );
};
