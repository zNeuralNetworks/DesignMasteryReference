# Changelog

All notable changes to this project will be documented in this file. Format: `[version] - YYYY-MM-DD`. Sections: **Added**, **Changed**, **Removed**, **Fixed**. Every meaningful session of work gets a version entry — no squashing multiple sessions into one.

---

## [1.4.0] - 2026-04-22

### Added
- **Solve/Explore Mode Separation**: Hard mode separation on `ReferenceLibrary.tsx` — Solve (default, surgical) and Explore (secondary, ambient). Mode persisted to `localStorage`. Solve mode: `FixGuideRow` first, `SolveCard` format (quickTake + top 3 checklist + "Apply →"), symptom-oriented search placeholder. Explore mode: `ThemeGalleryRow` first, original visual preview cards.
- **GCP Cloud Build + Cloud Run deployment config**: `cloudbuild.yaml` and Cloud Run service config committed to repo. App is ready to deploy; first deploy tracked in TGR-90.
- **Interactive code dependency graph**: `docs/code-graph.html` — static HTML file visualising the codebase module dependency graph.
- **CLAUDE.md**: Project instructions file for Claude Code, including Linear workflow, architecture map, dev commands, and core constraints.

### Changed
- **`ReferenceLibrary.tsx`**: `mode: 'solve' | 'explore'` state added. Mode toggle added to page header alongside Grid/List toggle. `ThemeGalleryRow` hidden in Solve mode; `FixGuideRow` hidden in Explore mode. New `SolveCard` component replaces `StaticVisual` preview in Solve mode.
- **`.gitignore`**: Added rules to ignore local AI tool config directories (`.claude/`, `.codex/`, `.gemini/`) and editor configs.

### Verification Steps
- Default load: Solve mode active, FixGuideRow visible first, ThemeGallery absent
- Toggle to Explore: ThemeGalleryRow appears, FixGuideRow hidden, original visual cards shown
- `localStorage` persists mode across refresh
- `npm run build` → clean compile

---

## [1.3.0] - 2026-04-18

### Added
- **6 New Reference Entries**: `notification-fatigue`, `complexity-overload`, `form-validation-ux`, `miller-law`, `aria-live-regions`, `data-table-patterns`. Closes Tier 1 content gaps across anti-patterns (notification spam, decision paralysis), interaction patterns (form validation, data tables), and cognitive principles (working memory, screen reader announcements).
- **searchTerms Field**: Extended `FixGuide` interface with `searchTerms: string[]` array. Populated all 6 guides (including new `fix-forms`) with natural-language problem vocabulary for semantic tag-based retrieval.
- **fix-forms Guide** (6th guide): Curated guide addressing form validation timing, error messaging, success feedback, and field recovery strategies. Mapped to `form-validation-ux`, `progressive-disclosure`, `empty-states`, `toast-notifications`.
- **Knowledge Graph Completion**: Populated `relatedEntryIds` across 54 previously empty entries. Clustered by domain: cognitive/gestalt (proximity, common-region, chunking), interaction (spacing, layout, performance), design systems (tokens, atomic-design), animations, case studies, B2B patterns, and psychology principles.

### Changed
- **Fix Guide Filtering Logic** (`ReferenceLibrary.tsx`): Switched from ID-only to ID + tag-based semantic matching. Expanded results from 3–5 hard-coded entries per guide to 6–12 dynamically matched entries using problem-vocabulary tags.
- **FixGuideRow Component**: Now displays first 2 problems + overflow count (e.g., "text hard to read · hierarchy unclear · +2 more") instead of only first problem. Improves symptom recognition at a glance.
- **Active Fix Guide Banner**: Displays dynamic result count ("6 matching entries") instead of static count. Reflects semantic matching expansion.
- **progressive-disclosure.ts Content**: Deepened from 9 lines to ~140 lines. Added visual anatomy (3-state diagram), 3 implementation patterns (Accordion, Step Wizard, Details/Summary), pattern comparison table, and common pitfalls (invisible triggers, nesting, accessibility).
- **peak-end-rule.ts**: Added missing `interactiveComponent: "CelebrationDemo"` field. Semantic match to celebration-at-peak principle.

### Verification Steps
- `npm run build` → clean compile, no TS errors
- Click "Fix Spacing" → expect 6–9 matching entries (was 3–5)
- Click "Fix Forms" → expect 4–6 matching entries
- Search "miller" → miller-law entry appears
- Search "form" → form-validation-ux + progressive-disclosure appear
- Every entry viewer shows "Related References" section (previously empty for 54/57 entries)
- `peak-end-rule` entry viewer displays interactive CelebrationDemo
- TestRunner (/test) → all smoke tests pass

---

## [1.2.0] - 2026-04-17

### Added
- **Fix Guides** (`data/fixGuides.ts`): New `FixGuide` data type with 5 curated problem-to-solution guides — Fix Typography, Fix Spacing, Fix Layout, Fix Navigation, Fix Performance. Each guide includes a `problems[]` array (symptom vocabulary), `quickChecklist[]` (scannable action list), and `relatedEntryIds[]` mapping to existing entries.
- **Fix Surface on Library Homepage**: "Something feel off?" card row above the filter bar in `ReferenceLibrary.tsx`. Clicking a guide pre-fills the search query with its primary problem phrase, immediately filtering relevant entries.
- **Problem-Vocabulary Tags**: 18 entries enriched with natural-language problem tags (e.g., "cluttered", "text hard to read", "buttons too small", "app feels slow", "confusing navigation"). Search now responds to how developers describe symptoms, not just category names.
- **Intent Filter** (`referenceIndex.ts`): New `IntentFilter` type (`all | choose | implement | diagnose | evaluate-risk | study`) with `matchesIntentFilter()` logic mapped over existing entry fields. Exposed as an "I want to:" row in the library filter bar.
- **Command Palette Intent Modes** (`ReferenceCommandPalette.tsx`): Prefix-based intent detection — `fix <query>` → diagnose mode, `impl <query>` → implement mode, `avoid <query>` or `risk <query>` → evaluate-risk mode. Quick Fix guide chips shown when query is empty.
- **Schema Fields** (`types.ts`): Two optional fields added to `ReferenceEntry` — `contentStatus?: 'draft' | 'hardened' | 'flagship'` for editorial tiering, `implementationRisk?: 'low' | 'medium' | 'high'` as a distinct signal from `perfImpact`.

### Changed
- **Branding**: Renamed app from "DesignMastery Reference" to "Design Mastery Reference" across all files — `index.html`, `Layout.tsx`, `AboutPage.tsx`, `EbookGenerator.tsx`, `metadata.json`, `package.json`, `package-lock.json`.
- **`TestRunner.tsx`**: Updated Test 4 assertion to check for actual H1 text (`"Design Library"`) rather than the stale app name string.
- **`docs/CONTENT_STRATEGY.md`**: Corrected the outdated "80% placeholder" claim. All 57 active entries in `data/entries/` are fully fleshed out. The placeholder description applied to the now-deleted `data/lessons/` stubs. Documented `contentStatus` tiers.

### Removed
- **`data/lessons/`**: Deleted 54 stub files — excluded from TypeScript, unrouted, never exported from `data/index.ts`. Dead code from the pre-v1.0 curriculum phase.
- **`features/curriculum/`**: Deleted `LessonLibrary.tsx`, `LessonViewer.tsx`, `EbookGenerator.tsx` — all unrouted, tsconfig-excluded, and containing broken imports. Active `/ebook` route uses `features/reference/EbookGenerator.tsx`.

---

## [1.0.0] - 2026-04-14

### Added
- **Reference-First Architecture**: Completely consolidated the app into a single reference-first system.
- **New Taxonomy**: Implemented `Domain` and `Format` classification for all entries.
- **Reference Assistant**: Repurposed the AI tutor into a "Reference Assistant" with a senior architect persona.
- **High-Density Library**: New search-first library UI with grid/list toggles and advanced filtering.
- **Structured Reference Sheets**: Redesigned viewer with dedicated sections for mechanisms, tradeoffs, and technical notes.
- **E-Book Generator**: Specialized view for high-quality PDF export of the reference library.

### Changed
- **Branding**: Rebranded "DesignMastery" to "DesignMastery Reference".
- **Data Migration**: Automated migration of all legacy lessons to the new `ReferenceEntry` schema.
- **File System**: Renamed `features/curriculum` to `features/reference` and `data/lessons` to `data/entries`.
- **Terminology**: Systematically replaced "Lesson", "Learning", and "Curriculum" with "Reference", "Entry", and "Reference Library".
- **Type Safety**: Fully resolved all TypeScript errors and unified naming conventions across the codebase.

### Removed
- **Dead Code**: Deleted all legacy "curriculum" and "tutor" directories and components.
- **Legacy Naming**: Removed all remnants of the old lesson-based architecture from UI text and code artifacts.

## [0.1.0] - 2026-04-14
### Added
- Created `CHANGELOG.md` to track architectural shifts and major updates.
- Centralized Gemini API prompts into `services/prompts.ts` for easier tuning and maintenance.

### Changed
- Consolidated curriculum data into individual files within `data/lessons/` and aggregated them in `data/index.ts` for better maintainability.
- Replaced hardcoded Tailwind colors with CSS variables in `index.css` for robust theming.
- Consolidated Gemini AI logic into a single service (`services/geminiService.ts`).
- Migrated features into their respective domain directories (`/features/curriculum`, `/features/tutor`, `/features/demos`, `/features/admin`, `/features/diagnostics`).

### Removed
- Deleted redundant components from the root `/components` directory.
- Removed stale assets (`index.tsx`, fragmented readme files, prompt history).
