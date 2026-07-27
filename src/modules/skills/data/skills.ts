import { SiOpenai, SiLangchain, SiOpensearch, SiReadthedocs } from "react-icons/si";
import { TbComponents } from "react-icons/tb";

export interface Skill {
  /** kebab-case identifier, e.g. "ai-agent-management" */
  id: string;
  /** i18n key suffix for the skill name */
  nameKey: string;
  /** i18n key suffix for the description */
  descriptionKey: string;
  /** react-icons component (Simple Icons or Tabler set) */
  icon: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  {
    id: "opencode",
    nameKey: "skillsCardOpencodeName",
    descriptionKey: "skillsCardOpencodeDesc",
    icon: SiOpenai,
  },
  {
    id: "ai-agent-management",
    nameKey: "skillsCardAiAgentName",
    descriptionKey: "skillsCardAiAgentDesc",
    icon: SiLangchain,
  },
  {
    id: "rag",
    nameKey: "skillsCardRagName",
    descriptionKey: "skillsCardRagDesc",
    icon: SiOpensearch,
  },
  {
    id: "sdd",
    nameKey: "skillsCardSddName",
    descriptionKey: "skillsCardSddDesc",
    icon: SiReadthedocs,
  },
  {
    id: "clean-architecture",
    nameKey: "skillsCardCleanArchName",
    descriptionKey: "skillsCardCleanArchDesc",
    icon: TbComponents,
  },
];
