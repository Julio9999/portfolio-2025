# Tasks: Skills Showcase Section

> **Status**: ✅ All 8 tasks completed. Apply phase done. Ready for verify phase.

## Task List

### ✅ Task 1 (DONE): Create typed Skill data module

**Goal**: Define `Skill` interface and export 5 skills with icons, levels, i18n key refs, and external URLs.

**Files**: `src/modules/skills/data/skills.ts` (create)

**Steps**:
1. ✅ Create directory `src/modules/skills/data/`
2. ✅ Define `Skill` interface: `id`, `nameKey`, `descriptionKey`, `icon: React.ComponentType<{className?: string}>`, `level: 1|2|3|4|5`, `externalUrl?: string`, `externalLabelKey`
3. ✅ Import icons — `SiOpenai`, `SiLangchain`, `SiOpensearch`, `SiReadthedocs` from `react-icons/si`; `TbComponents` from `react-icons/tb`
4. ✅ Export `skills: Skill[]` array with all 5 entries using values from design's Skills Catalog

**Acceptance**:
- ✅ TypeScript compiles the file with no errors
- ✅ `skills` array has exactly 5 items
- ✅ Each item has all required fields; `externalUrl` is optional and absent only for skills without one
- ✅ Icon components are typed as `React.ComponentType<{className?: string}>`
- ✅ `level` values use the union type literal (not `number`)

**Effort**: S | **Depends on**: none

### ✅ Task 2 (DONE): Add 18 i18n keys to translations

**Goal**: Add 18 `skills*` prefixed keys to both `es` and `en` translation objects.

**Files**: `src/i18n/i18n.ts` (modify)

**Steps**:
1. ✅ Add 3 page-level keys: `skills` (navbar label), `skillsTitle`, `skillsSubtitle`
2. ✅ Add 15 card-level keys (name, desc, label × 5 skills) following the `skillsCard{SkillId}{Field}` pattern
3. ✅ Insert in both `es` and `en` objects, keeping existing key ordering

**Acceptance**:
- ✅ Both `es` and `en` objects contain all 18 new keys
- ✅ No duplicate key names with existing keys (check: home, aboutMe, contact, contactTitle, contactDescription, aboutMeTitle, aboutMeDescription, homeTagline, homeFocus, stackTitle)
- ✅ No TypeScript errors — existing `translations` type accepts the new keys (the existing pattern uses `Record<string, string>` or implicit typing)
- ✅ Values match the i18n table in design.md exactly

**Effort**: M | **Depends on**: none (can run in parallel with Task 1)

### ✅ Task 3 (DONE): Create SkillCard presentational component

**Goal**: Build individual card rendering icon, name, description, 5-dot level indicator, and optional external link.

**Files**: `src/modules/skills/components/skill-card.tsx` (create)

**Steps**:
1. ✅ Create `SkillCard` accepting `{ skill: Skill; t: Record<string, string> }`
2. ✅ Render glass-card div: `"glass-card rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"`
3. ✅ Render `<skill.icon className="text-3xl md:text-4xl text-[var(--brand)]" />`
4. ✅ Render name (`<h3 className="text-lg font-semibold">{t[skill.nameKey]}</h3>`)
5. ✅ Render description (`<p className="text-sm text-[var(--muted)] leading-relaxed">{t[skill.descriptionKey]}</p>`)
6. ✅ Render level dots: 5 `span` elements, `h-2 w-2 rounded-full`, first `skill.level` dots with `bg-[var(--brand)]`, rest with `bg-white/20`
7. ✅ Conditionally render external link: `{skill.externalUrl && (<a href={skill.externalUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--brand)] transition-colors">{t[skill.externalLabelKey]} ↗</a>)}`

**Acceptance**:
- ✅ Card renders all elements when all fields present
- ✅ Card renders without external link section when `externalUrl` is undefined (no layout shift)
- ✅ Level dots render 5 total, matching `skill.level` filled count
- ✅ No TypeScript errors
- ✅ Styling matches existing glass-card look (translucent, border-white/20, rounded-3xl, backdrop-blur)

**Effort**: M | **Depends on**: 1

### ✅ Task 4 (DONE): Create SkillsGrid layout wrapper

**Goal**: Build responsive grid that maps `Skill[]` into `SkillCard` components.

**Files**: `src/modules/skills/components/skills-grid.tsx` (create)

**Steps**:
1. ✅ Import `SkillCard` and `Skill` type
2. ✅ Accept `{ skills: Skill[]; t: Record<string, string> }`
3. ✅ Render `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">`
4. ✅ Map `skills` to `<SkillCard key={skill.id} skill={skill} t={t} />`

**Acceptance**:
- ✅ Grid renders exactly `skills.length` cards
- ✅ Single column <768px, 2 columns 768–1024px, 3 columns >1024px
- ✅ Each card receives correct skill prop and i18n map
- ✅ No TypeScript errors

**Effort**: S | **Depends on**: 3

### ✅ Task 5 (DONE): Create SkillsPage

**Goal**: Compose page layout with glass-card header (title + subtitle) and SkillsGrid.

**Files**: `src/modules/skills/pages/skills-page.tsx` (create)

**Steps**:
1. ✅ Add `"use client"` directive
2. ✅ Import `useCommonContext` from `@/context/common-context`, `translations` from `@/i18n/i18n`, `skills` from `../data/skills`, `SkillsGrid` from `../components/skills-grid`
3. ✅ Extract `const { language } = useCommonContext(); const t = translations[language];`
4. ✅ Render `<section className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">`
5. ✅ Inner glass-card div: `<div className="glass-card rounded-3xl px-6 py-8 md:px-10 md:py-10">`
6. ✅ Title: `<h1 className="section-title text-3xl font-bold md:text-4xl">{t.skillsTitle}</h1>`
7. ✅ Subtitle: `<p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:text-base">{t.skillsSubtitle}</p>`
8. ✅ `<SkillsGrid skills={skills} t={t} />`

**Acceptance**:
- ✅ Page renders title, subtitle, and skill cards grid
- ✅ `max-w-[1000px]` is within the 820–1100px range used by other pages
- ✅ No TypeScript errors
- ✅ Follows same "use client" + `useCommonContext` + `translations[language]` pattern as about-me and contact

**Effort**: S | **Depends on**: 4, 2

### ✅ Task 6 (DONE): Create route page entry

**Goal**: Wire Next.js route `/skills` under `(common-layout)` route group, re-exporting SkillsPage.

**Files**: `src/app/(common-layout)/skills/page.tsx` (create)

**Steps**:
1. ✅ Create directory `src/app/(common-layout)/skills/`
2. ✅ Import `SkillsPage` from `@/modules/skills/pages/skills-page`
3. ✅ Export default component rendering `<SkillsPage />`

**Acceptance**:
- ✅ File follows exact same pattern as `contact/page.tsx` (thin re-export, no "use client", no extra logic)
- ✅ `/skills` route resolves without 404
- ✅ No TypeScript errors

**Effort**: S | **Depends on**: 5

### ✅ Task 7 (DONE): Add `/skills` link to navbar

**Goal**: Insert skills link at position 2 in the navbar links array.

**Files**: `src/components/navbar.tsx` (modify)

**Steps**:
1. ✅ In the `links` array, insert `{ href: '/skills', label: t.skills }` between the `/about-me` and `/contact` entries
2. ✅ No other navbar changes needed — mobile menu, active styles, and layout adapt automatically

**Acceptance**:
- ✅ Navbar shows "Skills" (en) / "Habilidades" (es) link
- ✅ Link navigates to `/skills`
- ✅ Link appears in correct position: Home → About Me → Skills → Contact
- ✅ No styling or layout regressions on desktop or mobile

**Effort**: S | **Depends on**: 2 (needs `t.skills` key)

### ✅ Task 8 (DONE): Verify lint and build

**Goal**: Confirm zero TypeScript, lint, or build errors.

**Files**: none

**Steps**:
1. ✅ Run `npm run lint`
2. ✅ Run `npm run build`

**Acceptance**:
- ✅ `npm run lint` exits with code 0, no warnings
- ✅ `npm run build` passes with no errors
- ✅ `/skills` page renders in production build (4.09 kB, static)

**Effort**: S | **Depends on**: 6, 7

---

## Suggested Implementation Order

```
1 (data) ──→ 3 (SkillCard) ──→ 4 (SkillsGrid) ──→ 5 (SkillsPage) ──→ 6 (route) ──→ 8 (verify)
        │                                                              │
        2 (i18n) ──────────────────────────────────────────────────────┘
                                                                        7 (navbar) ──→ 8
```

**Rationale**: Task 1 (data model) and Task 2 (i18n keys) are independent and can be done in parallel — neither depends on the other. Task 3 (SkillCard) needs the data types. Task 4 (SkillsGrid) composes cards. Task 5 (SkillsPage) composes the grid and uses i18n keys. Task 6 (route) and Task 7 (navbar) wire everything together. Task 8 (verify) is last.

This ordering guarantees that each task is verifiable immediately: data compiles, card renders in isolation, grid maps correctly, page assembles, route resolves, navbar links.

---

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~195 (53 + 54 + 48 + 15 + 25 + 8 + 3 + 0) |
| Files added | 5 (`skills.ts`, `skill-card.tsx`, `skills-grid.tsx`, `skills-page.tsx`, route `page.tsx`) |
| Files modified | 2 (`i18n.ts`, `navbar.tsx`) |
| Chained PRs recommended | No — well under 400-line budget, change is self-contained |
| Suggested split | Single PR |
| Delivery strategy | ask-on-risk |
| 400-line budget risk | Low |

```
Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low
```

The entire change is estimated at ~195 net lines. This is under 50% of the 400-line review budget. The change touches only 7 files (5 new, 2 modified), all within the same concern (new module + wiring). No database, no API, no complex state. Single PR is safe and appropriate.
