import type { Skill } from "../data/skills";

export const SkillCard = ({
  skill,
  t,
}: {
  skill: Skill;
  t: Record<string, string>;
}) => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-3 transition duration-300 hover:bg-white/10 sm:p-4">
      <p className="text-balance text-center text-sm font-medium text-[var(--text)] break-words">
        {t[skill.nameKey]}
      </p>
      <p className="mt-1 text-center text-xs leading-relaxed text-[var(--muted)] break-words">
        {t[skill.descriptionKey]}
      </p>
    </div>
  );
};
