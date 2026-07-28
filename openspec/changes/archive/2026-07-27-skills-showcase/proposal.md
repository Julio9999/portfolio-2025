# Proposal: Skills Showcase Section

## Why

The portfolio currently shows a tech stack but does not communicate the user's **methodological and conceptual skills** — AI agent orchestration, RAG, SDD, Clean Architecture, and tooling like OpenCode. These differentiate the user beyond "I know React." A dedicated skills section makes the portfolio more compelling for technical hiring and consulting leads.

## What Changes

### In Scope
- New route `/skills` under `(common-layout)` route group
- New module `src/modules/skills/` with pages, components, and data
- 5 skill cards: OpenCode, AI Agent Management, RAG, SDD, Clean Architecture
- i18n strings for es/en (following existing pattern)
- Navbar link to `/skills`
- Responsive card grid layout using existing glass-card styling

### Out of Scope
- Real RAG / agent implementations (portfolio stays static)
- Backend, API calls, or LLM integrations
- Interactive demos or live playgrounds
- New dependencies (react-icons already installed)
- Markdown content collections or CMS
- Skill detail pages (all content lives on one page)

## Design Decisions

### 1. Page vs Section
**Decision**: Dedicated `/skills` route.

**Rationale**: Fits the existing module pattern (`src/modules/skills/`), mirrors how about-me and contact are structured, keeps the home page focused on its current purpose, and gives the skills section room to grow without crowding other pages.

### 2. Visual Representation
**Decision**: Responsive card grid (icon + name + short description + level indicator).

**Rationale**: Cards scan well, use space efficiently, and align with the existing glass-card design language. A level indicator (e.g., "Advanced", "Working") adds context without cluttering.

### 3. Data Source
**Decision**: Typed TS array in `src/modules/skills/data/skills.ts`.

**Rationale**: No external dependencies, fully type-safe, works with static export, trivially extensible. JSON or markdown would add complexity without benefit.

### 4. i18n Strategy
**Decision**: es/en, mirroring the existing `translations` object in `src/i18n/i18n.ts`.

**Rationale**: Zero new i18n architecture — just add keys. The existing pattern works well.

### 5. Icon Strategy
**Decision**: `react-icons` (already a dependency, v5.5.0).

**Rationale**: No install cost, wide library, consistent rendering. Use `SiOpenai` / `SiGo` / generic icons mapped per skill.

### 6. Navigation Integration
**Decision**: Add to navbar links array.

**Rationale**: Consistent with all existing routes. Works with the current mobile menu toggle, zero new navigation infrastructure.

### 7. Skill Content Depth
**Decision**: Name + short description + level indicator (no per-skill project list or detail page).

**Rationale**: This is a showcase, not a resume. Descriptions explain what each concept means. Level gives credibility. Going deeper would bloat the page and duplicate the about-me section.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/modules/skills/` | New | Module directory with data, components, pages |
| `src/app/(common-layout)/skills/page.tsx` | New | Route page importing SkillsPage |
| `src/i18n/i18n.ts` | Modified | Add es/en keys for skill names, descriptions |
| `src/components/navbar.tsx` | Modified | Add `/skills` link to links array |
| `src/modules/home/pages/home-page.tsx` | None | Unchanged |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Navbar gets crowded with 4 links | Low | 4 items is well within responsive design limits |
| i18n file grows large | Low | ~10 new keys is negligible |
| Icon mismatch (no perfect icon per skill) | Medium | Choose closest match from react-icons; document fallback |

## Rollback Plan

- Revert `src/i18n/i18n.ts` changes
- Revert `src/components/navbar.tsx` changes
- Delete `src/app/(common-layout)/skills/`
- Delete `src/modules/skills/`

## Dependencies

- `react-icons` ^5.5.0 (already installed)

## Success Criteria

- [ ] `/skills` route renders 5 skill cards in a responsive grid
- [ ] Cards display icon, name, description, and level indicator
- [ ] Navbar shows "Skills" / "Habilidades" link based on language
- [ ] All i18n keys render correctly in both es and en
- [ ] `next build` passes with no errors
- [ ] Mobile layout stacks cards in single column, desktop shows multi-column grid
