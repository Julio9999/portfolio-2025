export interface Skill {
  /** kebab-case identifier, e.g. "ai-agent-management" */
  id: string;
  /** i18n key suffix for the skill name */
  nameKey: string;
  /** i18n key suffix for the description */
  descriptionKey: string;
}

export const skills: Skill[] = [
  {
    id: "opencode",
    nameKey: "skillsCardOpencodeName",
    descriptionKey: "skillsCardOpencodeDesc",
  },
  {
    id: "ai-agent-management",
    nameKey: "skillsCardAiAgentName",
    descriptionKey: "skillsCardAiAgentDesc",
  },
  {
    id: "rag",
    nameKey: "skillsCardRagName",
    descriptionKey: "skillsCardRagDesc",
  },
  {
    id: "sdd",
    nameKey: "skillsCardSddName",
    descriptionKey: "skillsCardSddDesc",
  },
  {
    id: "clean-architecture",
    nameKey: "skillsCardCleanArchName",
    descriptionKey: "skillsCardCleanArchDesc",
  },
];
