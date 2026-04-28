import { ReferenceEntry } from '../../types';

export const variable_fonts: ReferenceEntry = {
  id: "variable-fonts",
  title: "Variable Fonts",
  domain: "typography",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "marketing", "devtools"],
  confidenceScore: 92,
  slug: "variable-fonts",
  complexity: "intermediate",
  description: "Using a single font file to animate weight, width, and slant smoothly.",
  quickTake: "Variable fonts (OpenType Font Variations) allow a single font file to behave like multiple fonts, providing infinite control over weight, width, and other axes.",
  whyItMatters: "Traditional web fonts require separate files for every weight (400, 500, 700), increasing HTTP requests. Variable fonts offer better performance and total design freedom.",
  mechanism: [
    "Load a single '.woff2' file that supports variable axes",
    "Use CSS 'font-variation-settings' or specific properties like 'font-weight' to adjust axes",
    "Animate axes smoothly using CSS transitions or Framer Motion",
    "Define fallback fonts for older browsers that don't support variable technology"
  ],
  whenToUse: [
    "Apps with complex typographic systems (multiple weights/widths)",
    "Marketing sites with high-impact, animated typography",
    "Performance-critical applications where minimizing font requests is key"
  ],
  whenNotToUse: [
    "When using a font that doesn't have a variable version available",
    "Simple apps that only need one weight (Regular)",
    "Legacy projects that must support IE11"
  ],
  tradeoffs: [
    { pro: "Significant performance boost (fewer HTTP requests)", con: "Variable font files are larger than a single standard weight file" },
    { pro: "Infinite control over typographic expression", con: "Can be complex to implement correctly with fallbacks" }
  ],
  failureModes: [
    "The 'Invisible Text' (FOIT): Large variable font files taking too long to load",
    "Axis Abuse: Using extreme values that make the font unreadable",
    "Missing Fallbacks: Text disappearing on older browsers"
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use to define the sizes that your variable font will occupy" },
    { entryId: "web-vitals", condition: "Use to measure the LCP impact of your font loading strategy" }
  ],
  a11ySpecs: [
    "Ensure font weight and width don't compromise readability for low-vision users",
    "Maintain high contrast regardless of the font weight being used",
    "Avoid high-frequency animations of font axes"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'font-display: swap' to ensure text is visible while the variable font loads",
    "Leverage Google Fonts' variable font support for easy integration",
    "Animate 'font-weight' for a smooth 'breathing' effect on headers"
  ],
  checklist: [
    "Limited active axes to those with clear typographic purpose",
    "Checked rendering, fallback, and loading behavior across browsers",
    "Verified variable settings preserve readability at small sizes"
  ],
  relatedEntryIds: ['typography-scale', 'design-tokens'],
  interactiveComponent: "VariableFonts",
  tags: ["Typography","Performance","Design","font weight","responsive typography","fix typography","text looks flat","no contrast in text"],
  contentStatus: 'draft',
  content: `

# Variable Fonts

Traditional web fonts require separate files for "Regular", "Bold", "Italic". **Variable fonts** are a single file containing every variation.

### Why it matters
1.  **Performance**: One HTTP request instead of 4-5.
2.  **Design Freedom**: You aren't stuck with \`400\` or \`700\`. You can use \`font-weight: 543\`.
    
`,
  intentTags: ["improve-readability", "improve-aesthetics"],
};
