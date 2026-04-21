import { ReferenceEntry } from '../../types';

export const line_length: ReferenceEntry = {
  id: "line-length",
  title: "Line Length",
  domain: "typography",
  format: "principle",
  verdict: "recommended",
  useContext: ["content", "saas", "dashboard", "marketing", "portfolio", "systems", "productivity"],
  confidenceScore: 95,
  slug: "line-length",
  complexity: "beginner",
  description: "Optimal reading lines span 45–75 characters (66ch ideal) — beyond this range, eye fatigue and comprehension suffer measurably.",
  quickTake: "Set a max-width of 65–75ch on any prose container. Wider text forces the eye to travel too far per line and makes it hard to return to the correct next line. Narrower text creates a choppy, anxious reading rhythm. The 66-character measure is rooted in centuries of book typography.",
  whyItMatters: "Line length is one of the highest-leverage readability decisions in web design, yet it's routinely ignored. Developers default to 100% container width and text stretches across 1400px monitors, creating a physically fatiguing reading experience. Correcting line length alone can dramatically improve perceived quality and time-on-page.",
  mechanism: [
    "Set prose containers to `max-width: 65ch` (the `ch` unit equals the width of '0' in the current font)",
    "Center the container within wider layouts using `margin-inline: auto`",
    "For responsive layouts, use `clamp()` to scale the container width between a minimum and maximum: `max-width: clamp(45ch, 65ch, 75ch)`",
    "Apply the constraint at the prose wrapper level, not on individual paragraphs",
    "Allow wider widths for non-prose content (tables, code blocks, images) that break out of the prose container"
  ],
  whenToUse: [
    "Any page or component containing prose text intended to be read linearly (articles, docs, onboarding copy)",
    "Long-form landing page sections with multiple paragraphs",
    "Email templates and transactional message bodies",
    "Legal copy, terms of service, and help center articles"
  ],
  whenNotToUse: [
    "Single-line UI labels, button text, and navigation items where line length is irrelevant",
    "Data tables and code displays where width serves information density",
    "Headline-only sections where a single large line is intentional",
    "Narrow mobile layouts where the viewport already constrains width below the threshold"
  ],
  tradeoffs: [
    { pro: "Measurably improves reading speed and comprehension at the 66ch measure", con: "On wide screens, constrained text leaves visible whitespace that some stakeholders perceive as 'wasted space'" },
    { pro: "The `ch` unit scales with font-size, making it font-responsive by default", con: "ch width varies slightly per font; test with your actual body font, not a system default" },
    { pro: "Simple to implement — one CSS property on a wrapper element", con: "Requires layout restructuring if existing code uses full-width containers everywhere" }
  ],
  failureModes: [
    "Setting max-width in pixels instead of ch — font size changes break the measure",
    "Applying the constraint on `p` tags directly instead of a wrapper, causing inconsistent spacing between elements",
    "Forgetting to allow code blocks and tables to break out of the prose constraint",
    "Using ch units but never testing with the actual deployed font (variable fonts especially can shift ch width)",
    "Constraining line length without centering the column, creating awkward left-aligned narrow text in wide layouts"
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use when hierarchy and size relationships are the primary readability problem rather than line length" }
  ],
  a11ySpecs: [
    "WCAG 1.4.8 (AAA) requires that line length does not exceed 80 characters",
    "WCAG 1.4.12 (AA) requires text can reflow without horizontal scrolling at 400% zoom — constrained prose containers help this",
    "Never set a fixed height on prose containers; text must be able to reflow vertically",
    "Ensure the prose container is not clipped (`overflow: hidden`) as this can cut off text at large font sizes"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use the `ch` unit: `max-width: 65ch` — this scales with font size automatically",
    "Wrap all prose content in a `.prose` or `.content` class, not individual elements",
    "For content coming from a CMS, apply the prose constraint at the render wrapper level",
    "Tailwind: `max-w-prose` sets `max-width: 65ch` out of the box",
    "For responsive scaling: `max-width: clamp(45ch, 55vw, 75ch)` gives a viewport-aware measure"
  ],
  checklist: [
    "Prose containers have max-width set in `ch` units, not pixels",
    "Line length tested with actual deployed font at 400% zoom",
    "Container is centered in wide layouts with margin-inline: auto",
    "Code blocks and tables are allowed to break out of the prose container",
    "Mobile layouts verified — constraint doesn't cause overflow on small screens"
  ],
  relatedEntryIds: ["typography-scale", "content-width-containers"],
  tags: ["text too wide", "hard to read", "line too long", "readability", "improve readability", "measure", "prose width"],
  intentTags: ["improve-readability", "fix-alignment"],
  content: `# Line Length

## The 66-Character Rule

The optimal line length for comfortable reading is 45–75 characters, with 66 characters as the ideal. This isn't arbitrary — it comes from centuries of book and newspaper typography, validated by eye-tracking research that shows the eye struggles to return accurately to the next line when the measure exceeds 80 characters.

At 100+ characters per line (common in full-width web layouts), readers:
- Lose their place when returning to the next line
- Experience eye fatigue from excessive horizontal travel
- Subconsciously increase scroll speed, reducing comprehension

At under 40 characters per line (common on mobile without proper handling), readers:
- Experience an anxious, choppy rhythm
- Read fewer words per fixation, increasing cognitive effort
- Encounter excessive hyphenation and awkward line breaks

## The \`ch\` Unit

CSS's \`ch\` unit is purpose-built for this: it equals the width of the "0" character in the current font. This means your max-width constraint automatically scales with font-size changes — if a user increases their browser font size, your line length stays proportionally correct.

\`\`\`css
.prose {
  max-width: 65ch;
  margin-inline: auto;
}
\`\`\`

Note: \`ch\` is calculated from the "0" character specifically, which is slightly narrower than average character width in most fonts. In practice, \`65ch\` gives you roughly 65–70 visible characters, which lands squarely in the optimal range.

## Responsive Line Length with clamp()

On very narrow viewports, \`max-width: 65ch\` does nothing — the viewport is already narrower. On very wide viewports, you want to constrain prose but let layout elements breathe. \`clamp()\` handles this gracefully:

\`\`\`css
.prose {
  /* Minimum 45ch, preferred 55vw, maximum 75ch */
  max-width: clamp(45ch, 55vw, 75ch);
  margin-inline: auto;
}
\`\`\`

This approach:
- Allows narrower text on small screens where the viewport constrains naturally
- Scales with viewport on medium screens
- Hard-caps at 75ch on wide screens

## Prose vs. Non-Prose Elements

The line length constraint applies to readable prose, not all content. Code blocks, data tables, and wide images should be allowed to break out of the prose container:

\`\`\`css
.prose {
  max-width: 65ch;
  margin-inline: auto;
}

/* Allow these to be wider than the prose column */
.prose pre,
.prose table,
.prose .wide-figure {
  max-width: 100vw;
  margin-inline: calc(-1 * ((100vw - 65ch) / 2));
}
\`\`\`

## Real-World Calibration

The \`ch\` unit is calculated per font. Inter's "0" is narrower than Georgia's "0", so \`65ch\` in Inter gives slightly fewer pixels than \`65ch\` in Georgia. Always verify your final line length with:

1. Open a paragraph of real content (not lorem ipsum) in your browser
2. Select a single line of text
3. Count the characters (or use a character counter tool)
4. Adjust your max-width until a middle line lands between 60–75 characters
`,
};
