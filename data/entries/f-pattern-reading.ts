import { ReferenceEntry } from '../../types';

export const f_pattern_reading: ReferenceEntry = {
  id: "f-pattern-reading",
  title: "F-Pattern & Reading Patterns",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["content", "saas", "marketing", "dashboard"],
  confidenceScore: 88,
  slug: "f-pattern-reading",
  complexity: "beginner",
  description: "Eye-tracking research shows users scan web pages in predictable patterns — F-pattern for text, Z-pattern for sparse layouts — and design should work with these patterns.",
  quickTake: "The F-pattern isn't a design target — it's what happens when hierarchy fails. Users scan in an F because most content beyond line 1 isn't worth reading in full. Design better hierarchy and users scan more thoroughly. But place critical information in the F-path anyway as a fallback.",
  whyItMatters: "Eye-tracking studies consistently show users don't read every word — they scan. Information outside the scan path is often missed entirely. Understanding common scan patterns tells you where critical information must be placed (and warns you when it won't be seen).",
  mechanism: [
    "F-pattern: First horizontal scan (full width), second shorter horizontal scan, then vertical scan down the left edge",
    "Z-pattern: Diagonal eye movement — top-left → top-right → bottom-left → bottom-right — for sparse layouts",
    "Layer cake pattern: users scan headings and first sentences, skipping body text",
    "Place most important information in the first 2 lines and leftmost positions",
  ],
  whenToUse: [
    "Content-heavy pages (articles, search results, lists) — F-pattern applies",
    "Sparse marketing/landing pages — Z-pattern applies",
    "Navigation placement decisions — left-aligned nav gets more attention than right-aligned",
  ],
  whenNotToUse: [
    "As a rigid layout template — F-pattern describes failure states, not ideal design",
    "Single-focus pages (checkout, form completion) — users read more carefully when motivated",
  ],
  tradeoffs: [
    { pro: "Grounding layout decisions in actual user eye behavior rather than guesswork", con: "F-pattern is descriptive of poor hierarchy — designing toward it accepts that hierarchy is weak" },
    { pro: "Critical CTAs and headlines placed in scan paths are seen even by scanners", con: "Content past the vertical edge of the F is often missed — can't compensate for placement with design alone" },
  ],
  failureModes: [
    "Important CTA in bottom-right: outside Z-pattern endpoint for landing pages",
    "Key product differentiators in paragraph body: scanners never reach them",
    "Right-aligned navigation: left edge of F-scan path misses right-side content",
    "Lists without scannable hierarchy: all items receive equal attention, key items don't stand out",
  ],
  alternatives: [
    { entryId: "serial-position-effect", condition: "Serial position: items at beginning and end of lists are remembered better" },
    { entryId: "visual-weight", condition: "Visual weight directs attention more actively than relying on scan patterns" },
  ],
  a11ySpecs: [
    "Screen readers navigate linearly — visual scan path placement doesn't help assistive technology users",
    "Critical information must also be accessible in DOM order, not just visually prominent",
    "Heading structure (h1–h6) mirrors visual hierarchy for screen reader navigation",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Left-align primary content — the vertical stroke of the F runs down the left edge",
    "Front-load value: most important information in first 1–2 words of each line",
    "Use bullet points and short paragraphs — walls of text produce more aggressive F-scanning",
    "Subheadings every 2–3 paragraphs interrupt the F-pattern and re-engage readers",
  ],
  checklist: [
    "Primary CTA and key headlines in top-left or center-top position",
    "Most important content in first sentence of each paragraph",
    "Navigation left-aligned or top-centered",
    "No critical information buried in paragraph bodies without heading callout",
  ],
  relatedEntryIds: ['serial-position-effect', 'visual-weight', 'type-hierarchy', 'white-space'],
  tags: ["F-pattern", "reading patterns", "eye tracking", "scanning behavior", "information scent", "content hierarchy"],
  intentTags: ["improve-readability", "increase-emphasis"],
  content: `
# F-Pattern & Reading Patterns

Users don't read — they scan. And they scan in predictable patterns. Design to be scannable, not just readable.

## The F-Pattern

In eye-tracking studies of text-heavy pages, users typically:

1. **First horizontal scan**: Read most of the first line (top)
2. **Second horizontal scan**: Shorter read of the second line
3. **Vertical scan**: Scroll down the left edge, occasionally scanning right

The result: an F-shape of eye attention.

**What causes it:** Poor hierarchy. When users can't tell what's worth reading, they give up on full reads and fall back to scanning the start of lines.

## The Z-Pattern

For sparse layouts (landing pages, minimal UIs) with few elements:

1. **Top-left** → Top-right (first horizontal)
2. **Diagonal** → bottom-left
3. **Bottom-left** → bottom-right (second horizontal)

This is why logo goes top-left, CTA goes top-right and/or bottom-right.

## Designing for Scanners

**Front-load value**: Put the important words first.

Bad: *"In order to start the process, you'll need to click the button below."*
Good: *"Click below to start."*

**Use headings generously**: Subheadings interrupt the scan and re-engage users. Every 2–3 paragraphs.

**Make lists, not paragraphs**: Bullets are designed to be scanned. Paragraphs are designed to be read.

## The Lesson

Don't just place information in the F/Z path — improve hierarchy so users engage beyond it.

But as a defensive strategy: your most important content should be in the scan path even if everything else is also excellent.
`,
};
