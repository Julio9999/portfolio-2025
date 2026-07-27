import type { Skill } from "../data/skills";
import { SkillCard } from "./skill-card";

export const SkillsGrid = ({
  skills,
  t,
}: {
  skills: Skill[];
  t: Record<string, string>;
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} t={t} />
      ))}
    </div>
  );
};
