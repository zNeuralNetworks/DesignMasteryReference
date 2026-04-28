import { ReferenceEntry } from '../../types';

export const content_width_containers: ReferenceEntry = {
  id: "content-width-containers",
  title: "Content Width & Containers",
  domain: "layout",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "content", "portfolio", "marketing", "consumer", "productivity", "systems"],
  confidenceScore: 93,
  slug: "content-width-containers",
  complexity: "beginner",
  description: "Strategic use of max-width containers to constrain content to readable, well-proportioned widths for each content type.",
  quickTake: "Every type of content has an ideal reading width that differs from the screen width. Prose gets hard to read past 680px. Data tables often need 1000px+. Marketing heroes look weak unless they span the full viewport. The job of a container system is to match the right width constraint to the right content type, and never default to 100% width for everything.",
  whyItMatters: "Line length is one of the most research-backed factors in reading comprehension — the optimal range is 45–75 characters per line (roughly 40–75ch or 480–680px at body font sizes). Content that spans a 1440px monitor at body font size can have 150+ characters per line, dramatically reducing reading speed and causing eye strain. Proper container widths are a readability intervention, not just aesthetics.",
  mechanism: [
    "Define a container system with 3–4 named widths covering the range from prose to full-bleed: prose (680px), content (860px), wide (1200px), full-bleed (100%)",
    "Apply containers with max-width + margin: 0 auto so content stays centered and never exceeds its limit — the element is still responsive below the max-width",
    "Use horizontal padding (typically 16–24px) on containers to prevent content from touching viewport edges on narrow screens",
    "Match container width to content type: text articles use prose, dashboard cards use wide, hero images use full-bleed"
  ],
  whenToUse: [
    "Any page with body copy or long-form text — apply the prose container (65ch or ~680px) to reading columns",
    "Dashboard and app layouts where the content area should cap at a comfortable width rather than stretching to fill ultra-wide monitors",
    "Marketing pages where the narrative needs to feel focused and not sprawl across a 2560px display",
    "Form pages — long form labels and inputs at full width look disconnected on wide screens; a content-width container focuses the experience"
  ],
  whenNotToUse: [
    "Data-intensive tables and grids that legitimately need all available horizontal space — forcing max-width on a wide table causes unnecessary horizontal scroll",
    "Full-screen map or canvas interfaces where the entire viewport is the workspace"
  ],
  tradeoffs: [
    { pro: "Prose max-width instantly improves readability on wide displays with zero effort", con: "Mismatched container widths (prose container around a wide data table) cause unnecessary horizontal scrollbars" },
    { pro: "Container system gives engineers clear semantic choices — prose vs wide — instead of pixel-guessing", con: "Full-bleed sections inside a contained page require the container to be broken out, which can create inconsistent padding" },
    { pro: "Centered containers with margin: auto remain responsive — they constrain only at larger sizes, never below", con: "Ultra-wide displays (3440px+) may still feel too wide at 1200px max-width; 1400px or 1440px caps are better for modern designs" }
  ],
  failureModes: [
    "Using max-width: 100% instead of a pixel value — this is a no-op; it sets the max to 100% which is already the default",
    "Forgetting horizontal padding on the container — prose content hits the screen edge on mobile",
    "Nesting containers inside containers at different widths without considering the cumulative effect — prose inside content inside wide creates confusing alignment",
    "Applying prose width to the entire page layout instead of just the text content area — sidebars and navigation become unreasonably narrow"
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use when the problem is type size and scale, not line length and container width" },
    { entryId: "css-grid-layouts", condition: "Use when containers need to become part of a responsive multi-column grid structure" }
  ],
  a11ySpecs: [
    "WCAG 1.4.8 recommends that text can be resized without loss of content and that line length does not exceed 80 characters — prose containers enforce this at the layout level",
    "Ensure container padding does not collapse to zero on mobile, leaving text flush against screen edges"
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS: .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; } — always include padding to prevent edge-flush on small screens",
    "For ch-based prose width: max-width: 65ch sets width relative to the element's font size — it automatically adjusts if the user increases font size",
    "Tailwind: max-w-prose (65ch), max-w-2xl (672px), max-w-4xl (896px), max-w-6xl (1152px), mx-auto — combine with px-4 sm:px-6 lg:px-8 for responsive padding",
    "For full-bleed sections inside a contained layout, use a negative-margin technique or restructure to let the full-bleed element escape the container entirely"
  ],
  checklist: [
    "Prose and article content is constrained to ~65ch or 680px max-width",
    "Containers include horizontal padding (min 16px) for small screens",
    "Container is centered with margin: 0 auto or equivalent",
    "Full-bleed elements (hero images, banners) are not inside a width-constraining container",
    "Different content types use appropriate container widths — not everything is the same max-width"
  ],
  relatedEntryIds: ['typography-scale', 'spacing-systems', 'flexbox-patterns'],
  tags: ["max-width", "container", "line length", "reading width", "prose width", "text too wide", "hard to read", "content feels stretched", "line too long", "centering", "margin auto", "65ch"],
  intentTags: ["improve-readability", "fix-alignment"],
  contentStatus: 'flagship',
  content: `
# Content Width & Containers

## The Four Container Widths

Most products need exactly four container sizes. Name them, use them consistently, and document which content type belongs in each.

| Name       | Max Width | Use Cases                                               |
|------------|-----------|----------------------------------------------------------|
| Prose      | 65ch / ~680px | Articles, blog posts, documentation, form pages     |
| Content    | 860px     | Product pages, settings panels, mixed text+media        |
| Wide       | 1200px    | Dashboards, marketing sections, card grids              |
| Full-bleed | 100%      | Hero images, video backgrounds, maps, full-width tables |

\`\`\`css
.container-prose   { max-width: 65ch;    margin: 0 auto; padding: 0 24px; }
.container-content { max-width: 860px;   margin: 0 auto; padding: 0 24px; }
.container-wide    { max-width: 1200px;  margin: 0 auto; padding: 0 24px; }
/* full-bleed: no max-width, just handle padding contextually */
\`\`\`

## Why 65ch Works

The \`ch\` unit equals the width of the "0" character in the current font. At 65ch, you're getting approximately 65–75 characters per line at most body font sizes — the range where reading fluency peaks based on typography research. It also scales automatically with user font size preferences, making it inherently accessible.

At 16px base with a typical body font, 65ch ≈ 680px. At the user's browser zoomed to 125%, 65ch ≈ 850px — the line length stays optimal even as the font grows. A fixed 680px value would produce too-short lines when zoomed.

## Responsive Container Padding

The container padding must scale at smaller viewports:

\`\`\`css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 5vw, 48px);
}
\`\`\`

Or with media queries:
\`\`\`css
.container {
  padding: 0 16px;        /* mobile */
}
@media (min-width: 640px) {
  .container { padding: 0 24px; }   /* tablet */
}
@media (min-width: 1024px) {
  .container { padding: 0 40px; }   /* desktop */
}
\`\`\`

## Full-Bleed Breakout

A full-bleed element inside a contained layout requires escaping the container. The cleanest approach:

\`\`\`css
/* Escape a contained layout to go full-bleed */
.full-bleed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
\`\`\`

This works regardless of the parent container's max-width. Alternative: restructure the DOM so the full-bleed element is outside the container — preferred for semantic clarity.

## Ultra-Wide Displays

At 3440×1440 (ultrawide) and 5120×2880 (5K), even a 1200px max-width can leave enormous dead space. Consider:
- Max-width of 1400–1600px for wide layouts
- Responsive grid inside the container that adds more columns on very wide screens
- Background colors or textures that extend edge-to-edge while content stays contained — so the page doesn't look like a narrow strip on a wide monitor
`,
};
