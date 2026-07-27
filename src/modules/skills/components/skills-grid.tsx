import type { Skill } from "../data/skills";
import { IconContainer } from "@/components/icon-container";

export const SkillsGrid = ({
  skills,
  t,
}: {
  skills: Skill[];
  t: Record<string, string>;
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
      {skills.map((skill, index) => (
        <IconContainer
          key={skill.id}
          className="fade-up"
          style={{ animationDelay: `${index * 60}ms` }}
          label={t[skill.nameKey]}
        >
          <skill.icon className="h-10 w-10 text-[var(--brand)]" />
        </IconContainer>
      ))}
    </div>
  );
};
