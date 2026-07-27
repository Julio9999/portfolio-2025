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
  /** Proficiency 1–5 */
  level: 1 | 2 | 3 | 4 | 5;
  /** Optional external resource URL */
  externalUrl?: string;
  /** i18n key suffix for the link label */
  externalLabelKey: string;
}

export const skills: Skill[] = [
  {
    id: "opencode",
    nameKey: "skillsCardOpencodeName",
    descriptionKey: "skillsCardOpencodeDesc",
    icon: SiOpenai,
    level: 5,
    externalUrl: "https://github.com/opencode-ai/opencode",
    externalLabelKey: "skillsCardOpencodeLabel",
  },
  {
    id: "ai-agent-management",
    nameKey: "skillsCardAiAgentName",
    descriptionKey: "skillsCardAiAgentDesc",
    icon: SiLangchain,
    level: 4,
    externalUrl: "https://js.langchain.com/docs/",
    externalLabelKey: "skillsCardAiAgentLabel",
  },
  {
    id: "rag",
    nameKey: "skillsCardRagName",
    descriptionKey: "skillsCardRagDesc",
    icon: SiOpensearch,
    level: 4,
    externalUrl: "https://research.ibm.com/blog/retrieval-augmented-generation-RAG",
    externalLabelKey: "skillsCardRagLabel",
  },
  {
    id: "sdd",
    nameKey: "skillsCardSddName",
    descriptionKey: "skillsCardSddDesc",
    icon: SiReadthedocs,
    level: 5,
    externalUrl: "https://github.com/orgs/gentle-ai-community/discussions",
    externalLabelKey: "skillsCardSddLabel",
  },
  {
    id: "clean-architecture",
    nameKey: "skillsCardCleanArchName",
    descriptionKey: "skillsCardCleanArchDesc",
    icon: TbComponents,
    level: 5,
    externalUrl: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
    externalLabelKey: "skillsCardCleanArchLabel",
  },
];
