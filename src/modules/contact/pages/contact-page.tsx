"use client";
import { useCommonContext } from "@/context/common-context";
import { translations } from "@/i18n/i18n";
import { MdEmail } from "react-icons/md";

export const ContactPage = () => {
  const { language } = useCommonContext();
  const t = translations[language];

  return (
    <section className="mx-auto w-full max-w-[820px]">
      <div className="glass-card rounded-3xl p-7 text-center md:p-10">
        <h1 className="section-title text-4xl font-bold md:text-5xl">{t.contactTitle}</h1>
        <p className="muted mx-auto mt-4 max-w-xl text-sm md:text-base">{t.contactDescription}</p>
        <div className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
          <MdEmail className="text-2xl md:text-3xl text-[var(--brand)]" />
          <a
            href="mailto:julioespinola9999@gmail.com"
            className="break-all text-[var(--text)] hover:text-[var(--brand)]"
          >
            julioespinola9999@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
