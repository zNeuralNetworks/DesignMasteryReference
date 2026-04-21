import { ReferenceEntry } from '../../types';

export const sidebar_layouts: ReferenceEntry = {
  id: "sidebar-layouts",
  title: "Sidebar Layout Patterns",
  domain: "layout",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools", "productivity"],
  confidenceScore: 90,
  slug: "sidebar-layouts",
  complexity: "intermediate",
  description: "Structural patterns for sidebar navigation including fixed, fluid, collapsible, and rail variants.",
  quickTake: "The sidebar is the primary navigation surface in most SaaS products. Fixed sidebars waste space on small screens; collapsible sidebars need explicit state persistence. Rail navigation (icon-only) is the sweet spot for dense tools.",
  whyItMatters: "Navigation layout is the first decision users make. A sidebar that disappears or shifts content on collapse destroys spatial memory — users lose their sense of where they are.",
  mechanism: [
    "Choose sidebar type: fixed-width, fluid, collapsible, or rail (icon-only)",
    "Decide on collapse behavior: push content vs overlay vs rail transition",
    "Persist collapsed state in localStorage to survive page reload",
    "Handle mobile: sidebar becomes a drawer overlay on small screens",
  ],
  whenToUse: [
    "Applications with 5+ navigation destinations",
    "Dashboard and productivity tools where vertical screen space is primary",
    "Products where users switch sections frequently",
  ],
  whenNotToUse: [
    "Content sites and marketing pages — top navigation fits better",
    "Mobile-primary apps where bottom navigation is the convention",
    "Simple tools with 3 or fewer sections",
  ],
  tradeoffs: [
    { pro: "Keeps navigation visible and accessible at all times", con: "Consumes horizontal screen space (240-280px typical)" },
    { pro: "Rail variant recovers space while maintaining visual anchors", con: "Icon-only rail requires strong icon recognition or tooltips" },
    { pro: "Collapsible gives users control over their workspace", con: "Collapse state must be persisted or users re-expand on every visit" },
  ],
  failureModes: [
    "Content reflow on collapse: shifting the main content area disorients users — use overlay instead",
    "No mobile handling: sidebar overflows or disappears on small screens without a drawer fallback",
    "Collapsed state not persisted: users must re-expand every session",
    "Too many items: sidebar with 20+ items needs grouping and collapsible sections",
  ],
  alternatives: [
    { entryId: "mystery-meat-navigation", condition: "Avoid icon-only navigation without labels or tooltips" },
    { entryId: "progressive-disclosure", condition: "Use nested collapsible sections for complex navigation hierarchies" },
  ],
  a11ySpecs: [
    "Use nav element with aria-label to distinguish from other navigation landmarks",
    "Collapsed state must be communicated: aria-expanded on the toggle button",
    "Keyboard users must be able to navigate all sidebar items without mouse",
  ],
  perfImpact: "low",
  implementationNotes: [
    "240px fixed width is the industry standard for comfortable label display",
    "Use CSS grid for layout: grid-template-columns: auto 1fr — sidebar collapses by changing first value",
    "Animate width with max-width (0 to 240px) not width — GPU-composited and prevents reflow",
    "Store collapsed state in localStorage key like 'sidebar-collapsed'",
  ],
  checklist: [
    "Sidebar collapse state persisted across sessions",
    "Mobile breakpoint has drawer overlay, not pushed layout",
    "Rail variant has tooltips on all icon-only items",
    "nav element has descriptive aria-label",
  ],
  relatedEntryIds: ['css-grid-layouts', 'flexbox-patterns', 'mystery-meat-navigation', 'progressive-disclosure'],
  tags: ["sidebar layout", "navigation layout", "dashboard layout", "collapsible sidebar", "rail navigation", "fix layout"],
  intentTags: ["fix-alignment", "reduce-cognitive-load"],
  content: `
# Sidebar Layout Patterns

The sidebar is the backbone of SaaS navigation. Getting it wrong costs users their spatial orientation.

## The Four Sidebar Types

**Fixed** (240px, always visible) — best for tools where navigation is frequent. Wastes space on small screens.

**Collapsible** (240px ↔ 0) — gives users control. Always persist the state. Push vs. overlay: overlay is almost always better — pushing content shifts every element on screen, destroying context.

**Rail** (64px, icons only) — the professional's choice for dense tools. Requires tooltip on hover for every icon. Users must recognize icons, so use universally understood symbols or add labels.

**Drawer** (mobile-only) — hidden by default, opens as overlay. Required below 768px.

## The Collapse Pattern

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: var(--sidebar-width, 240px) 1fr;
  transition: grid-template-columns 200ms ease;
}
.layout[data-collapsed] {
  --sidebar-width: 64px; /* rail */
}
\`\`\`

Never animate \`width\` — animate \`max-width\` or use \`grid-template-columns\`. Both are GPU-composited and avoid layout reflow.

## State Persistence

\`\`\`typescript
const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
// On toggle:
localStorage.setItem('sidebar-collapsed', String(!collapsed));
\`\`\`

Users who collapse the sidebar want it collapsed next session. No exceptions.
`,
};
