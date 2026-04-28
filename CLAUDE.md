# CLAUDE.md — DesignMasteryReference

Project instructions for Claude Code. Read this before starting any work.

---

## What this repo is

**DesignMasteryReference** is a design debugger / search engine SPA — not a passive course or library browser. The primary workflow is mid-build, symptom-driven retrieval under time pressure. Every decision should optimize for that use case.

Stack: React 18 + TypeScript + Vite 6, Tailwind CSS v4, Framer Motion 11, React Router v6. No backend — all data is local TypeScript files.

See `AGENTS.md` for code rules and data model constraints.

---

## Linear

**Project:** DesignMasteryReference
**URL:** https://linear.app/babia/project/designmasteryreference-4c48b6472fe8
**Team:** Synapse Drift (TGR)
**Initiative:** Personal Product OS

### Before starting work

1. Check the active NEXT issue in Linear — currently **TGR-90** (Deploy to Cloud Run).
2. If the task maps to an existing issue, reference it in your commit messages and PR descriptions.
3. If the task is new and non-trivial, create a Linear issue before starting.

### Issue routing

| Work type | Label | Priority |
|---|---|---|
| Deployment / infra | `infra`, `deployment` | p1 |
| Content quality / entries | `content` | p1–p2 |
| UX / frontend feature | `frontend`, `ux` | p2–p3 |
| Tooling / system | `system` | p2 |
| Roadmap / speculative | `frontend`, `ux` | p3 |

### When closing work

- Mark the corresponding Linear issue Done before or when merging.
- Update the project description summary if the current state meaningfully changes.
- The runbook document lives at: https://linear.app/babia/document/runbook-designmasteryreference-ebe635f1deba

---

## Dev commands

```bash
npm run dev               # start dev server
npm run lint              # validate:entries + typecheck (run before every commit)
npm run build             # production build
npm run validate:entries  # schema + cross-ref validation for all 121 entries
npm run typecheck         # tsc --noEmit
```

`npm run lint` chains both validation and typecheck — always run it after touching entry files, `types.ts`, or `data/index.ts`.

---

## Architecture in one page

```
types.ts                          ← single source of truth for ReferenceEntry
data/entries/*.ts                 ← 121 individual entries
data/index.ts                     ← registry (import and export all entries)
data/validateEntries.ts           ← schema + cross-ref validation

features/reference/
  ReferenceLibrary.tsx            ← main surface; Solve/Explore mode state
  referenceIndex.ts               ← filter / sort / search logic
  ReferenceViewer.tsx             ← entry detail view
  ReferenceCommandPalette.tsx     ← command palette with intent-prefix detection
  ComparisonPage.tsx              ← side-by-side entry comparison
  EbookGenerator.tsx              ← PDF export view
  AboutPage.tsx

features/demos/
  StaticVisuals.tsx               ← static preview cards (58 components)
  InteractiveDemos.tsx            ← interactive demos resolved at runtime

features/admin/AdminDashboard.tsx ← PIN-protected dashboard (PIN: 19901991)
features/diagnostics/TestRunner.tsx

components/Layout.tsx             ← shared nav/header
contexts/ThemeContext.tsx         ← theme provider
contexts/AnnotationContext.tsx    ← annotation provider
```

**Knowledge graph** — always pass `repo_root="/Users/theorajan/local builds/designmastery-reference"` to `mcp__code-review-graph__*` tools when working from a worktree.

---

## Core constraints

- New entries → `data/entries/` + register in `data/index.ts` + conform to `ReferenceEntry` in `types.ts`
- New interactive demos → `InteractiveDemos.tsx`; new static visuals → `StaticVisuals.tsx`; reference by name in entry file
- Icons: `lucide-react` only
- Styling: Tailwind CSS utility classes only — no custom CSS files
- Animation: `framer-motion` only
- Filtering/search changes → `referenceIndex.ts`
- Theme/layout changes → `ThemeContext.tsx`, `Layout.tsx`
