# Spec: Skills Showcase Section

## Purpose

A dedicated skills section that communicates the user's methodological and conceptual skills — AI agent orchestration, RAG, SDD, Clean Architecture, and OpenCode tooling — beyond a simple tech-stack listing. Differentiates the portfolio for technical hiring and consulting leads.

## Requirements

### REQ-1: Dedicated Skills Route
The system SHALL expose `/skills` under the `(common-layout)` route group and render the skills showcase page.
#### Scenario: Route loads without error
When navigating to `/skills`
Then the page SHALL render a 200 response with skills-related content

### REQ-2: Exactly Five Skills
The showcase SHALL display exactly five skills: OpenCode, AI Agent Management, RAG, SDD (Spec-Driven Development), Clean Architecture.
#### Scenario: All skills present
When the page renders
Then exactly five distinct skill cards SHALL be visible
And each card SHALL correspond to one of the named skills

### REQ-3: Card Content
Each skill card SHALL display an icon, a name, a short description, and a proficiency level on a 1–5 scale.
#### Scenario: Card elements visible
When inspecting any skill card
Then it SHALL contain one icon, one name, one description, and one level indicator
#### Scenario: Level value in range
When reading the level indicator
Then its value SHALL be an integer between 1 and 5 inclusive

### REQ-4: Responsive Grid
The card grid SHALL adapt to three viewport breakpoints: single column (<768px), two columns (768–1024px), three or more columns (>1024px).
#### Scenario: Mobile stacks vertically
When viewport is narrower than 768px
Then skill cards SHALL form a single vertical column
#### Scenario: Desktop uses multi-column grid
When viewport is wider than 1024px
Then skill cards SHALL display in a grid with at least three columns and no horizontal overflow

### REQ-5: i18n Support
All visible text on `/skills` SHALL use translation keys from `src/i18n/i18n.ts`, supporting `es` and `en` locales.
#### Scenario: English translations render
When language is `en`
Then skill names, descriptions, and page headings SHALL appear in English
#### Scenario: Spanish translations render
When language is `es`
Then the same keys SHALL render in Spanish

### REQ-6: External Context Link
Each skill card SHOULD include an external link (tool homepage, GitHub repo, or canonical article) for deeper context. Links SHALL open in a new tab with `rel="noopener noreferrer"`.
#### Scenario: Link opens external resource
When clicking an external link on a skill card
Then a new browser tab SHALL open to the linked resource
#### Scenario: Missing link does not break layout
When a skill has no external link
Then the card SHALL render without layout shift or broken-link artifacts

### REQ-7: Navbar Integration
The navbar SHALL include a `/skills` link, ordered `/` → `/about-me` → `/skills` → `/contact`.
#### Scenario: Navbar shows skills link
When viewing any page
Then the navbar SHALL contain a labeled link to `/skills`
#### Scenario: Link navigates correctly
When clicking the skills navbar link
Then the browser SHALL navigate to `/skills`

### REQ-8: Typed Data Module
Skills data SHALL be defined in a typed TypeScript module and imported by the page component. No skill data SHALL be hardcoded in JSX.
#### Scenario: Data is type-safe
When inspecting the skills data module
Then it SHALL export a typed array where each element has fields for icon, name, description, level, and optional link
#### Scenario: Data drives rendering
When the page renders
Then every visible card SHALL derive its content from the data module, not from inline values

### REQ-9: Static Constraint
The implementation SHALL NOT introduce runtime API calls, LLM invocations, fetch requests, or backend dependencies. The page SHALL render entirely from static data.
#### Scenario: No network requests on page load
When the `/skills` page loads
Then no outbound HTTP requests to external APIs SHALL be observable in browser devtools
#### Scenario: Build succeeds without backend
When running `next build`
Then the build SHALL succeed without requiring any API endpoint or server

### REQ-10: Visual Consistency
The skills page SHALL use the same `glass-card` design language — translucent backgrounds, border-white/20, rounded-3xl, backdrop-blur — and matching max-width as existing pages.
#### Scenario: Glass-card styling applied
When inspecting any skill card
Then it SHALL have translucent background, rounded corners, and subtle border consistent with other glass cards
#### Scenario: Layout width matches site standard
When viewing the skills page
Then its content SHALL be constrained to the same max-width range (820–1100px) as `/about-me` and `/contact`

## Out of Scope

- Real RAG, agent, or LLM runtimes (portfolio stays static)
- Backend APIs, server-side data fetching, or server actions
- Interactive demos, playgrounds, or live code editors
- Per-skill detail pages or project-list subpages
- Markdown collections, CMS, or third-party data sources
- New npm dependencies (react-icons already installed)
- Unit or integration test files
