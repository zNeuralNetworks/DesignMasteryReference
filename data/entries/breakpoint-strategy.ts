import { ReferenceEntry } from '../../types';

export const breakpoint_strategy: ReferenceEntry = {
  id: "breakpoint-strategy",
  title: "Breakpoint Strategy",
  domain: "responsiveness",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "mobile", "content", "marketing", "dashboard"],
  confidenceScore: 93,
  slug: "breakpoint-strategy",
  complexity: "intermediate",
  description: "Choosing responsive breakpoints based on content needs rather than specific device dimensions.",
  quickTake: "Breakpoints should be set where your content breaks, not at device widths. The classic 768/1024/1280 values are arbitrary — your layout may need 600px or 900px. Add breakpoints when something looks wrong, not to target an iPhone model.",
  whyItMatters: "There are thousands of device sizes. Targeting specific devices guarantees your design breaks on the next wave of hardware. Content-driven breakpoints work for any device because they're based on what the design needs, not what the device is.",
  mechanism: [
    "Start with mobile layout at 375px (common small phone)",
    "Resize the viewport wider until the layout looks broken or awkward",
    "Set a breakpoint at that point — add layout rules to improve it",
    "Repeat until 1440px+ desktop is handled",
  ],
  whenToUse: [
    "All responsive layouts — content-driven breakpoints are always the right approach",
    "Component-level responsive behavior (use container queries for components)",
  ],
  whenNotToUse: [
    "When container queries solve the problem at component level without global breakpoints",
  ],
  tradeoffs: [
    { pro: "Works for any device — past, present, and future", con: "Requires more iteration than copying a preset breakpoint list" },
    { pro: "Fewer unnecessary breakpoints = leaner CSS", con: "Team needs shared breakpoint tokens to avoid inconsistency" },
  ],
  failureModes: [
    "Too many breakpoints: adding a breakpoint every 100px creates unmaintainable CSS",
    "Device-specific targeting: designing for 'iPhone 14' instead of a size range creates gaps",
    "Ignoring intermediate sizes: layouts tested only at 375px and 1440px often break at 800px",
  ],
  alternatives: [
    { entryId: "fluid-adaptive-layouts", condition: "When fluid scaling between breakpoints is preferable to fixed jumps" },
    { entryId: "css-grid-layouts", condition: "auto-fill/auto-fit in CSS Grid often eliminates breakpoints entirely for grid content" },
  ],
  a11ySpecs: [
    "Breakpoints must not remove access to content — hidden content must still be accessible to screen readers",
    "Ensure text remains readable (sufficient size and contrast) at all breakpoint ranges",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Tailwind default scale is a good starting point: sm(640) md(768) lg(1024) xl(1280) 2xl(1536)",
    "For most SaaS: 3 breakpoints cover 95% of cases (640px, 1024px, 1280px)",
    "Container queries (@container) remove the need for many viewport-level breakpoints in component libraries",
    "Use DevTools responsive mode — drag from 320px to 1600px slowly and watch for breakage",
  ],
  checklist: [
    "Breakpoints defined where content breaks, not at arbitrary device widths",
    "Tested at 320px, 480px, 768px, 1024px, 1280px, 1440px",
    "No more than 4–5 breakpoints unless genuinely needed",
    "Breakpoint values stored as design tokens for team consistency",
  ],
  relatedEntryIds: ['mobile-first-design', 'fluid-adaptive-layouts', 'css-grid-layouts', 'responsive-images'],
  tags: ["breakpoints", "responsive design", "layout breaks on tablet", "responsive breakpoints", "media queries", "fix mobile"],
  intentTags: ["fix-alignment"],
  content: `
# Breakpoint Strategy

The question isn't "what are the device breakpoints?" It's "where does this layout break?"

## The Content-First Method

1. Open DevTools, set to 375px wide
2. Drag the viewport wider, slowly
3. Stop when something looks broken or awkward
4. That's your breakpoint — add styles to fix it
5. Continue to 1440px+

You might end up with breakpoints at 520px, 840px, and 1100px. That's fine. They're based on your content, not a device model.

## When to Use Framework Defaults

Tailwind's defaults (640/768/1024/1280/1536) are a reasonable starting point for most layouts. Use them when:
- You're building a generic component library
- Your layout doesn't have specific breakage points
- You want predictability across a team

Override them when your layout genuinely needs different values.

## Container Queries: The Breakpoint Alternative

For components that appear in multiple contexts (sidebar, main content, modal), viewport breakpoints are the wrong tool:

\`\`\`css
/* Component responds to its container, not the viewport */
@container (min-width: 400px) {
  .card { display: flex; }
}
\`\`\`

This removes the need for breakpoints in many component-level situations entirely.
`,
};
