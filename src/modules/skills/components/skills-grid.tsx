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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} t={t} />
      ))}
    </div>
  );
};
