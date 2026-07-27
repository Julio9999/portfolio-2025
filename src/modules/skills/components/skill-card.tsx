import type { Skill } from "../data/skills";

export const SkillCard = ({
  skill,
  t,
}: {
  skill: Skill;
  t: Record<string, string>;
}) => {
  return (
    <div className="glass-card rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
      <div className="flex flex-col gap-3">
        <skill.icon className="text-3xl text-[var(--brand)] md:text-4xl" />

        <h3 className="text-lg font-semibold">{t[skill.nameKey]}</h3>

        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {t[skill.descriptionKey]}
        </p>

        <div className="flex gap-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i < skill.level ? "bg-[var(--brand)]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
