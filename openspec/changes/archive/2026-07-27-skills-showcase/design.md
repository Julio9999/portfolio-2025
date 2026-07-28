# Design: Skills Showcase Section

## Architecture Overview

```
src/app/(common-layout)/skills/page.tsx    ← Route page (thin re-export)
        │
        ▼
src/modules/skills/pages/skills-page.tsx    ← Page layout, title + grid
        │
        ▼
src/modules/skills/components/skills-grid.tsx  ← Responsive grid container
        │
        ▼
src/modules/skills/components/skill-card.tsx   ← Individual card (icon, name, desc, level, link)
        │
        ├── react-icons/{si,tb}   ← Icon component
        ├── useCommonContext()     ← Language → i18n keys
        └── skills.ts (data)      ← Typed array driving all content
```

**Data flow**: `skills.ts` exports typed `Skill[]` → `SkillsPage` imports array and i18n → passes to `SkillsGrid` → renders `SkillCard` × 5. Zero runtime data fetching.

## File Structure

| Path | Action | Purpose |
|------|--------|---------|
| `src/modules/skills/data/skills.ts` | Create | Typed skill catalog array with icon refs, levels, i18n keys, external links |
| `src/modules/skills/components/skill-card.tsx` | Create | Card rendering icon + name + description + level dots + external link |
| `src/modules/skills/components/skills-grid.tsx` | Create | Responsive grid wrapper mapping `Skill[]` to `<SkillCard>` |
| `src/modules/skills/pages/skills-page.tsx` | Create | Page layout — `section` with glass-card header + SkillsGrid |
| `src/app/(common-layout)/skills/page.tsx` | Create | Route page re-exporting `SkillsPage` |
| `src/i18n/i18n.ts` | Modify | Add 17 flat prefixed keys (skills.*) in es/en |
| `src/components/navbar.tsx` | Modify | Add `{ href: '/skills', label: t.skills }` to links array (index 2) |

## Component Tree

```
Layout (common-layout)
└── SkillsPage
    ├── <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">
    │   ├── <div className="glass-card rounded-3xl px-6 py-8 md:px-10 md:py-10">
    │   │   ├── <h1 className="section-title text-3xl font-bold md:text-4xl">
    │   │   │   {t.skillsTitle}
    │   │   └── <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:text-base">
    │   │       {t.skillsSubtitle}
    │   └── <SkillsGrid skills={skills}>
    │       └── <SkillCard skill={skill} /> × 5
    │           ├── <Icon className="text-3xl md:text-4xl text-[var(--brand)]" />
    │           ├── <h3 className="text-lg font-semibold">{t[nameKey]}</h3>
    │           ├── <p className="text-sm text-[var(--muted)]">{t[descKey]}</p>
    │           ├── <LevelDots level={skill.level} />  ← 5 filled/muted dots
    │           └── {skill.externalUrl && (
    │               <a href={...} target="_blank" rel="noopener noreferrer">
    │                 {t[externalLabelKey]} ↗
    │               </a>
    │           )}
```

### Props interfaces (conceptual, no separate file)

```typescript
// SkillCard — no explicit props interface, destructure inline
// SkillsGrid — no explicit props interface, destructure inline
// SkillsPage — no props (page component)
```

## Data Model

```typescript
// src/modules/skills/data/skills.ts

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
```

## Skills Catalog

### 1. OpenCode `(id: "opencode")`

| Field | Value |
|-------|-------|
| **icon** | `SiOpenai` from `react-icons/si` |
| **level** | 5 — "Dogfooding daily; this portfolio itself is authored through OpenCode" |
| **externalUrl** | `https://github.com/opencode-ai/opencode` |
| **name (en)** | OpenCode |
| **name (es)** | OpenCode |
| **desc (en)** | "Command-line AI agent for assisted coding. Edit, refactor, and manage your codebase through natural language commands." |
| **desc (es)** | "Agente de IA para codificación asistida. Edita, refactoriza y gestiona tu código mediante comandos en lenguaje natural." |
| **label (en)** | "View on GitHub" |
| **label (es)** | "Ver en GitHub" |
| **fallback** | `SiGithub` |

### 2. AI Agent Management `(id: "ai-agent-management")`

| Field | Value |
|-------|-------|
| **icon** | `SiLangchain` from `react-icons/si` |
| **level** | 4 — "Built agent workflows with tool-use, memory, and multi-step reasoning in real projects" |
| **externalUrl** | `https://js.langchain.com/docs/` |
| **name (en)** | AI Agent Management |
| **name (es)** | Gestión de Agentes IA |
| **desc (en)** | "Orchestration of autonomous LLM-powered agents: tool-use, memory, planning, and multi-step execution for complex workflows." |
| **desc (es)** | "Orquestación de agentes autónomos con LLMs: uso de herramientas, memoria, planificación y ejecución multi-paso." |
| **label (en)** | "Documentation" |
| **label (es)** | "Documentación" |
| **fallback** | `SiOpenai` |

### 3. RAG `(id: "rag")`

| Field | Value |
|-------|-------|
| **icon** | `SiOpensearch` from `react-icons/si` |
| **level** | 4 — "Implemented RAG pipelines with embeddings, chunking, and retrieval optimization" |
| **externalUrl** | `https://research.ibm.com/blog/retrieval-augmented-generation-RAG` |
| **name (en)** | RAG (Retrieval-Augmented Generation) |
| **name (es)** | RAG (Generación Aumentada por Recuperación) |
| **desc (en)** | "Semantic search integrated with language models for grounded, source-backed responses." |
| **desc (es)** | "Búsqueda semántica integrada con LLMs para respuestas fundamentadas en fuentes verificables." |
| **label (en)** | "Overview article" |
| **label (es)** | "Artículo introductorio" |
| **fallback** | `SiLangchain` |

### 4. SDD `(id: "sdd")`

| Field | Value |
|-------|-------|
| **icon** | `SiReadthedocs` from `react-icons/si` |
| **level** | 5 — "Created the methodology and dogfoods it daily; deepest possible understanding" |
| **externalUrl** | `https://github.com/orgs/gentle-ai-community/discussions` |
| **name (en)** | SDD (Spec-Driven Development) |
| **name (es)** | SDD (Desarrollo Guiado por Especificaciones) |
| **desc (en)** | "A spec-first methodology: requirements, design, and tasks before implementation. Reduces rework and technical debt." |
| **desc (es)** | "Metodología que escribe especificaciones antes que código. Reduce iteraciones y deuda técnica." |
| **label (en)** | "Community" |
| **label (es)** | "Comunidad" |
| **fallback** | `SiDocusaurus` |

### 5. Clean Architecture `(id: "clean-architecture")`

| Field | Value |
|-------|-------|
| **icon** | `TbComponents` from `react-icons/tb` |
| **level** | 5 — "Foundational philosophy applied daily; this portfolio follows Clean Architecture patterns" |
| **externalUrl** | `https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html` |
| **name (en)** | Clean Architecture |
| **name (es)** | Arquitectura Limpia |
| **desc (en)** | "Separation into layers with strict dependency rules. Inversion of control and domain-driven design for maintainable code at scale." |
| **desc (es)** | "Separación en capas con reglas de dependencia estrictas. Inversión de control y diseño guiado por el dominio." |
| **label (en)** | "Original article" |
| **label (es)** | "Artículo original" |
| **fallback** | `TbBuildingArch` |

## i18n Key Schema

17 flat keys added to `src/i18n/i18n.ts` (following existing camelCase convention):

| Key | es value | en value |
|-----|----------|----------|
| `skills` | Habilidades | Skills |
| `skillsTitle` | Skills Showcase | Skills Showcase |
| `skillsSubtitle` | Habilidades metodológicas y conceptuales que diferencian mi enfoque de desarrollo. | Methodological and conceptual skills that set my development approach apart. |
| `skillsCardOpencodeName` | OpenCode | OpenCode |
| `skillsCardOpencodeDesc` | Agente de IA para codificación asistida. Edita, refactoriza y gestiona tu código mediante comandos en lenguaje natural. | Command-line AI agent for assisted coding. Edit, refactor, and manage your code via natural language. |
| `skillsCardOpencodeLabel` | Ver en GitHub | View on GitHub |
| `skillsCardAiAgentName` | Gestión de Agentes IA | AI Agent Management |
| `skillsCardAiAgentDesc` | Orquestación de agentes autónomos con LLMs: uso de herramientas, memoria, planificación y ejecución multi-paso. | Orchestration of autonomous LLM agents: tool-use, memory, planning, and multi-step execution. |
| `skillsCardAiAgentLabel` | Documentación | Documentation |
| `skillsCardRagName` | RAG (Generación Aumentada por Recuperación) | RAG (Retrieval-Augmented Generation) |
| `skillsCardRagDesc` | Búsqueda semántica integrada con LLMs para respuestas fundamentadas en fuentes verificables. | Semantic search integrated with LLMs for grounded, source-backed responses. |
| `skillsCardRagLabel` | Artículo introductorio | Overview article |
| `skillsCardSddName` | SDD (Desarrollo Guiado por Especificaciones) | SDD (Spec-Driven Development) |
| `skillsCardSddDesc` | Metodología que escribe especificaciones antes que código. Reduce iteraciones y deuda técnica. | A spec-first methodology: requirements, design, and tasks before implementation. |
| `skillsCardSddLabel` | Comunidad | Community |
| `skillsCardCleanArchName` | Arquitectura Limpia | Clean Architecture |
| `skillsCardCleanArchDesc` | Separación en capas con reglas de dependencia estrictas. Inversión de control y diseño guiado por el dominio. | Layered separation with strict dependency rules. Inversion of control and domain-driven design. |
| `skillsCardCleanArchLabel` | Artículo original | Original article |

**Zero collisions** with existing keys (`home`, `aboutMe`, `contact`, `contactTitle`, `contactDescription`, `aboutMeTitle`, `aboutMeDescription`, `homeTagline`, `homeFocus`, `stackTitle`).

## Layout & Styling

### Grid breakpoints

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6
```

- `< 768px`: 1 column (Tailwind default `grid-cols-1`)
- `768–1024px`: 2 columns (`md:grid-cols-2`)
- `> 1024px`: 3 columns (`lg:grid-cols-3`)

### Card (glass-card)

```tsx
<div className="glass-card rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
```

Each `SkillCard` is itself a glass card — independent translucent backgrounds matching the existing design language (see `about-me.tsx` and `contact-page.tsx` for precedent).

### Page container

```
max-w-[1000px]  ← within the 820–1100px range used by about-me (900px) and contact (820px)
```

### Typography

| Element | Classes |
|---------|---------|
| Page title | `section-title text-3xl font-bold md:text-4xl` |
| Subtitle | `text-sm text-[var(--muted)] md:text-base max-w-2xl` |
| Card name | `text-lg font-semibold` |
| Card description | `text-sm text-[var(--muted)] leading-relaxed` |
| Level dot (filled) | `h-2 w-2 rounded-full bg-[var(--brand)]` |
| Level dot (empty) | `h-2 w-2 rounded-full bg-white/20` |
| External link | `text-xs text-[var(--muted)] hover:text-[var(--brand)] transition-colors` |

## Navbar Integration

In `src/components/navbar.tsx`, insert one link into the `links` array (position 2, between `/about-me` and `/contact`):

```typescript
const links = [
  { href: '/', label: t.home },
  { href: '/about-me', label: t.aboutMe },
  { href: '/skills', label: t.skills },       // ← NEW
  { href: '/contact', label: t.contact },
];
```

No other changes to the navbar — mobile menu, active styles, and layout adapt automatically.

## Decisions & Tradeoffs

### Decision: Module pattern (not flat route group)

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| `src/modules/skills/{data,components,pages}/` | Scaffold cost for 3 files, but consistent with home/about-me/contact | ✅ **Chosen** — all existing modules follow this pattern |
| `src/app/(common-layout)/skills/page.tsx` inline | Simpler, but breaks module isolation precedent | ❌ Rejected |

### Decision: Tailwind CSS Grid (not flex)

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| `grid` with `grid-cols-{1,2,3}` | Native responsive grid, no manual wrapping | ✅ **Chosen** — exact match for spec breakpoints |
| `flex` + `flex-wrap` | Requires width calcs, uneven last row | ❌ Rejected |

### Decision: react-icons Simple Icons + Tabler (mixed sets)

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| SiOpenai + SiLangchain + TbComponents | Mixes brands with abstract icons, but best visual match per skill | ✅ **Chosen** — brand icons for tools, Tabler for conceptual (Clean Architecture) |
| All Si (Simple Icons) | No good icon for Clean Architecture concepts | ❌ Rejected |
| All Hi (Heroicons) | Generic, less recognizable for tool skills | ❌ Rejected |

### Decision: External links (not detail pages)

Already in spec — every skill is a link to a canonical resource, not an internal detail page. Keeps the page scannable and avoids route bloat.

### Decision: Level scale 1–5 with dot visualization

| Option | Tradeoff | Verdict |
|--------|----------|---------|
| 5 dots (filled/muted) | Language-agnostic, scannable, no i18n needed | ✅ **Chosen** |
| Text labels (Beginner–Expert) | Requires i18n, harder to scan side-by-side | ❌ Rejected |
| Progress bar | Good but visually heavier; dots match portfolio aesthetic | ❌ Rejected |

## Risks & Mitigations

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| **Icon mismatch** — no perfect icon for RAG or Clean Architecture | Medium | Fallback icon documented per skill; code imports closest match first. SiOpensearch for RAG (search/retrieval concept) and TbComponents for Clean Architecture (software components metaphor) are reasonable. |
| **Level subjectivity** — 1–5 scale feels arbitrary | Medium | Each level backed by a one-line rationale in the data file (see Skill Catalog above). Dots are visual only, no conflicting text labels. |
| **i18n key collision** — naming overlaps with existing keys | Low | All keys use `skills*` prefix; verified zero overlap with existing 10 keys. |
| **Navbar crowded at 4 links** | Low | 4 items fits well within existing mobile hamburger menu; desktop has ample space. |

## Out of Scope

- Real RAG runtime, LLM invocation, or agent implementations (portfolio stays static)
- Backend APIs, server actions, or fetch requests
- Interactive demos or playgrounds
- Per-skill detail pages or project list subpages
- Markdown collections, CMS, or third-party data sources
- New npm dependencies (`react-icons` already installed)
- Unit or integration tests (no test runner in project)
