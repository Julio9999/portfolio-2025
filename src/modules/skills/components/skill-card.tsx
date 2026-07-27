import type { Skill } from "../data/skills";

export const SkillCard = ({
  skill,
  t,
}: {
  skill: Skill;
  t: Record<string, string>;
}) => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-4 transition duration-300 hover:bg-white/10">
      <p className="text-center text-sm font-medium text-[var(--text)]">
        {t[skill.nameKey]}
      </p>
      <p className="mt-1 text-center text-xs leading-relaxed text-[var(--muted)]">
        {t[skill.descriptionKey]}
      </p>
    </div>
  );
};
