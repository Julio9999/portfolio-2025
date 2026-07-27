import { SiOpenai, SiLangchain, SiOpensearch, SiReadthedocs } from "react-icons/si";
import { TbComponents } from "react-icons/tb";

export interface Skill {
  /** kebab-case identifier, e.g. "ai-agent-management" */
  id: string;
  /** i18n key suffix for the skill name */
  nameKey: string;
  /** react-icons component (Simple Icons or Tabler set) */
  icon: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  {
    id: "opencode",
    nameKey: "skillsCardOpencodeName",
    icon: SiOpenai,
  },
  {
    id: "ai-agent-management",
    nameKey: "skillsCardAiAgentName",
    icon: SiLangchain,
  },
  {
    id: "rag",
    nameKey: "skillsCardRagName",
    icon: SiOpensearch,
  },
  {
    id: "sdd",
    nameKey: "skillsCardSddName",
    icon: SiReadthedocs,
  },
  {
    id: "clean-architecture",
    nameKey: "skillsCardCleanArchName",
    icon: TbComponents,
  },
];
