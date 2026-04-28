import { ReferenceEntry } from '../../types';

export const font_pairing: ReferenceEntry = {
  id: "font-pairing",
  title: "Font Pairing",
  domain: "typography",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "content", "portfolio", "dashboard", "systems"],
  confidenceScore: 92,
  slug: "font-pairing",
  complexity: "intermediate",
  description: "The practice of selecting two complementary typefaces that create contrast while maintaining visual harmony.",
  quickTake: "Use a maximum of two typefaces — one for display/headings and one for body text. The most reliable pairing is a serif with a sans-serif, using weight variation within each family as your primary tool. Personality match matters: don't pair a whimsical script with a technical monospace.",
  whyItMatters: "Poor font pairing is one of the most visible signs of an amateur design. When typefaces compete rather than complement, the UI feels visually noisy and untrustworthy. Good pairing creates a typographic system that communicates hierarchy, personality, and professionalism without the user consciously noticing.",
  mechanism: [
    "Choose a primary typeface that defines your brand voice (the display/heading font)",
    "Select a secondary typeface that contrasts in classification (serif vs. sans-serif) but shares similar x-height and proportions",
    "Establish weight roles: use the heading font at heavy weights (700–900) and the body font at regular/medium (400–500)",
    "Verify pairing at actual use sizes — a pairing that looks good at 60px may feel wrong at 16px",
    "Limit decorative or personality fonts to large display sizes only; never use them for body text"
  ],
  whenToUse: [
    "Building a brand-forward marketing site or portfolio that needs a distinct typographic voice",
    "Creating a content-heavy product (blog, docs, editorial) where readability and visual interest both matter",
    "Designing a SaaS UI that needs to feel premium and considered rather than generic",
    "Starting a design system from scratch and establishing typographic tokens"
  ],
  whenNotToUse: [
    "System UIs where the OS default font (San Francisco, Segoe UI) is already the right choice for native feel",
    "Dashboard products where data density is the priority and decorative contrast adds no value",
    "When loading performance is critical and two web font families would cost too much in bytes"
  ],
  tradeoffs: [
    { pro: "Creates strong visual personality and brand differentiation", con: "Two web font families increase load time; requires careful subsetting" },
    { pro: "Serif + sans-serif contrast gives clear hierarchy signals at a glance", con: "Wrong pairing is more visually damaging than a single well-chosen font" },
    { pro: "Established heuristics (Google Fonts suggestions) reduce guesswork", con: "Popular pairings (Playfair + Lato) are overused and can feel generic" }
  ],
  failureModes: [
    "Using three or more typefaces, creating visual chaos with no clear hierarchy",
    "Pairing fonts with similar classifications (two geometric sans-serifs) that create monotony rather than contrast",
    "Using a display font at body size, destroying readability",
    "Pairing fonts with clashing historical periods or personalities (e.g., Art Deco with brutalist sans)",
    "Relying on italic or oblique styles of the body font as the heading font — these are not true contrasting pairs"
  ],
  alternatives: [
    { entryId: "variable-fonts", condition: "Use when you want expressive range from a single typeface using weight/width axes instead of two separate families" },
    { entryId: "typography-scale", condition: "Use when size hierarchy alone is sufficient and font pairing is unnecessary complexity" }
  ],
  a11ySpecs: [
    "Never use a decorative or script font for text smaller than 24px",
    "Ensure body font has a minimum 400 weight available — lightweight fonts fail contrast at small sizes",
    "Test pairing legibility for users with dyslexia: open apertures and distinct letterforms (a, g, l) are critical",
    "Avoid all-caps styling in decorative display fonts for longer than 3–4 words"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use `font-display: swap` for all custom web fonts to prevent invisible text during load",
    "Subset fonts to only the character sets you need (Latin-only cuts file size by 60–70%)",
    "Preconnect to Google Fonts CDN: `<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>`",
    "Define font families as design tokens: `--font-display: 'Fraunces', serif` and `--font-body: 'Inter', sans-serif`",
    "Use `font-synthesis: none` to prevent browsers from faking bold/italic when a weight isn't loaded"
  ],
  checklist: [
    "Limited to exactly 2 typeface families",
    "Heading and body fonts are from different classifications (serif/sans-serif)",
    "Both fonts have been tested at their actual use sizes, not just mockup sizes",
    "Fonts are subsetting and loaded with font-display: swap",
    "Font families are stored as design tokens for consistent use across the system",
    "Pairing tested for legibility with the real content (not lorem ipsum)"
  ],
  relatedEntryIds: ["typography-scale", "variable-fonts"],
  tags: ["font pairing", "fonts look bad together", "too many fonts", "typography feels off", "typeface selection", "web fonts"],
  intentTags: ["improve-aesthetics", "improve-readability"],
  contentStatus: 'hardened',
  content: `# Font Pairing

## The Core Rule: Maximum Two Families

Every typeface you add to a design multiplies the ways things can go wrong. Two typefaces, each playing a clear role, is almost always better than three. The exception is a monospace font for code blocks — this is functionally distinct enough to not count as "decorative" pairing.

**Roles:**
- **Display font** — headings, hero text, large callouts. Can have personality.
- **Body font** — paragraphs, UI labels, captions. Must prioritize legibility above all.

## Contrast Is the Point

The reason serif + sans-serif works is contrast. Your eye immediately reads the heading and body as typographically distinct, which reinforces hierarchy without requiring size alone. Two sans-serifs, no matter how well-chosen, look like you forgot to pick a second font.

**High-contrast pairings that work:**
- Fraunces (variable serif) + Inter (geometric sans)
- Playfair Display (editorial serif) + Source Sans 3 (humanist sans)
- DM Serif Display + DM Sans (same family, different classification — designed to pair)

**What to avoid:**
- Two geometric sans-serifs (Futura + Montserrat — too similar)
- Two old-style serifs (Garamond + Caslon — fights with no resolution)
- A casual script with anything technical

## Google Fonts Pairing Heuristics

Google Fonts surfaces pairing suggestions on each font page. These are validated by usage data across millions of sites. While the most popular pairings (Playfair + Lato, Raleway + Lora) are overused, the methodology is sound:

1. Search for your primary font on Google Fonts
2. Scroll to "Pairings" on the font detail page
3. Filter by classification to find contrast (if your primary is serif, filter secondary by sans-serif)
4. Test at your actual use sizes in the preview

## Weight as Your Primary Variation Tool

Within a paired system, weight variation does more work than switching fonts. Using \`font-weight: 700\` on your sans-serif heading and \`font-weight: 400\` on your body creates hierarchy without needing a second family for every tier. The mistake most designers make is reaching for a third typeface when weight contrast would solve the problem.

\`\`\`css
:root {
  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
}

body, p, label {
  font-family: var(--font-body);
  font-weight: 400;
}

/* Don't reach for a third font — use weight */
.caption {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.75rem;
}
\`\`\`

## Personality Matching

Every typeface has a personality rooted in its historical period and use. Mismatched personalities read as incoherent even to users who can't articulate why.

| Typeface class | Personality signals |
|---|---|
| Old-style serif (Garamond, Palatino) | Classic, literary, trustworthy |
| Modern serif (Didot, Bodoni) | Fashion, luxury, editorial |
| Slab serif (Rockwell, Bitter) | Bold, approachable, American |
| Humanist sans (Gill Sans, Myriad) | Friendly, accessible, humanist |
| Geometric sans (Futura, Circular) | Clean, modern, tech |
| Grotesque sans (Helvetica, Akzidenz) | Neutral, functional, Swiss |

Pair fonts that occupy adjacent or complementary personality territories. Don't pair a fashion serif (Didot) with a rugged slab (Rockwell).
`,
};
